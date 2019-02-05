import {BehaviorSubject, isObservable, Observable, timer} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, startWith} from 'rxjs/operators';
import {LazyGetter} from 'typescript-lazy-get-decorator';
import {GM, GMResource} from '../../interfaces/greasemonkey';
import {addCssClases} from '../fn/addCssClasses';
import {addStyle} from '../fn/addStyle';
import {distinctUntilObjectChanged} from '../fn/distinctUntilObjectChanged';
import {mkSpan} from '../fn/mkSpan';
import {IconMenuItem} from './IconMenuItem';

const _value: unique symbol = Symbol('value');

export abstract class ValuedMenuItem<T> extends IconMenuItem {

  public constructor(imgUrl: string, label?: string) {
    super(imgUrl, label);
    this.innerContainer.appendChild(this.valueElement);
    addStyle(this.root, GM.getResourceText(GMResource.BS_CSS));

    this.initTextObservable()
      .subscribe(value => {
        this.valueElement.innerHTML = value;
      });
    setTimeout(
      () => {
        const initialValue = this.computeValue();
        if (isObservable(initialValue)) {
          initialValue
            .pipe(distinctUntilObjectChanged())
            .subscribe(v => {
              this.value = v;
            });
        } else {
          timer(0, 1000)
            .pipe(
              map<any, T>(() => <T>this.computeValue()),
              distinctUntilObjectChanged()
            )
            .subscribe(() => {
              this.value = <T>this.computeValue();
            });
        }
      },
      1
    );
  }

  public get value(): T {
    return this[_value].value;
  }

  public set value(v: T) {
    this[_value].next(v);
  }

  @LazyGetter()
  public get valueElement(): HTMLSpanElement {
    return addCssClases(mkSpan('??'), 'item');
  }

  @LazyGetter()
  private get [_value](): BehaviorSubject<T> {
    return new BehaviorSubject<T>(<any>null);
  }

  public getValueObservable(): Observable<T> {
    return this[_value].pipe(distinctUntilChanged(), shareReplay());
  }

  protected abstract computeValue(): T | Observable<T>;

  protected initTextObservable(): Observable<string> {
    return this.getValueObservable()
      .pipe(
        map(this.valueStringifier, this),
        startWith('??'),
        distinctUntilChanged()
      );
  }

  protected valueStringifier(value: T): string {
    //tslint:disable-next-line:triple-equals
    return <any>value == null ? '??' : value.toLocaleString();
  }
}

import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {ValuedMenuItem} from './ValuedMenuItem';

export abstract class ReadiableMenuItem<T> extends ValuedMenuItem<T> {

  public constructor(imgUrl: string, label?: string) {
    super(imgUrl, label);
    const classes = this.innerContainer.classList;

    this.isReady().subscribe(ready => {
      if (ready) {
        classes.remove('btn-dark');
        classes.add(...this.getReadyClasses());
      } else {
        classes.remove(...this.getReadyClasses());
        classes.add('btn-dark');
      }
    });
  }

  public isReady(): Observable<boolean> {
    return this.getValueObservable().pipe(
      map(this.readyMapper, this),
      distinctUntilChanged()
    );
  }

  protected getReadyClasses(): string[] {
    return ['btn-success'];
  }

  protected abstract readyMapper(value: T): boolean;
}

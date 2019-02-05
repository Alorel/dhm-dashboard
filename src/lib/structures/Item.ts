import {noop, startCase} from 'lodash-es';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {LazyGetter} from 'typescript-lazy-get-decorator';
import {GM, GMResource} from '../../interfaces/greasemonkey';
import {HideableUIItem} from '../../interfaces/HideableUIItem';
import {addStyle} from '../fn/addStyle';
import {getGameValue} from '../fn/getGameValue';
import {mkElement} from '../fn/mkElement';
import {navigate, NavTarget} from '../fn/navigate';
import {ValuedMenuItem} from './ValuedMenuItem';

const replace = /\.(png|gif)$/g;

export class Item extends ValuedMenuItem<number> implements HideableUIItem<HTMLDivElement> {

  public constructor(asset: string,
                     public readonly valueOb$: Observable<number>) {
    super(`/images/${asset}`, '');

    this.shouldHideFromUI()
      .subscribe(shouldHide => {
        if (shouldHide) {
          this.root.appendChild(this.hideStyleEl);
        } else {
          try {
            this.root.removeChild(this.hideStyleEl);
          } catch {
            //noop
          }
        }
      });
    addStyle(this.root, GM.getResourceText(GMResource.TOOLTIP_CSS));
    this.innerContainer.setAttribute('data-balloon-pos', 'up');
    this.innerContainer.setAttribute('data-balloon', startCase(asset.toString().replace(replace, '')));
  }

  @LazyGetter()
  private get hideStyleEl(): HTMLStyleElement {
    return mkElement('style', ':host{display:none!important}');
  }

  public static fromName(name: string): Item {
    return new Item(`${name}.png`, getGameValue(name));
  }

  public static fromNameClick(name: string): Item {
    return Item.fromName(name).addOnClick(() => {
      GM.unsafeWindow.clicksItem(name);
    });
  }

  public static fromNameNav(name: string, navTarget: NavTarget): Item {
    return Item.fromName(name).nav(navTarget);
  }

  public addOnClick(fn: (e: Event) => void): this {
    this.addPointer();
    this.root.addEventListener('click', fn, {passive: true});
    this.addOnClick = () => this;

    return this;
  }

  public addOnRightClick(fn: (e: Event) => void): this {
    this.addPointer();
    this.addOnClick = () => this;
    this.root.addEventListener('contextmenu', fn);

    return this;
  }

  public addSecondaryTooltip(text: string): this {
    this.valueElement.setAttribute('data-balloon-pos', 'down');
    const newFn = (newText: string): this => {
      this.valueElement.setAttribute('data-balloon', newText);

      return this;
    };
    this.addSecondaryTooltip = newFn;
    newFn(text);

    return this;
  }

  public extractDomElement(): HTMLDivElement {
    return this.container;
  }

  public forceState(cssClass: string): this {
    const cl = this.innerContainer.classList;
    cl.remove('btn-dark');
    cl.add(cssClass);

    return this;
  }

  public nav(where: NavTarget): this {
    return this.addOnClick(() => {
      navigate(where);
    });
  }

  public shouldHideFromUI(): Observable<boolean> {
    return this.valueOb$.pipe(
      map(shouldHideFromUIMapper),
      distinctUntilChanged()
    );
  }

  protected computeValue(): Observable<number> | number {
    return this.valueOb$;
  }

  private addPointer(): void {
    addStyle(this.root, ':host{cursor:pointer}');
    this.addPointer = noop;
  }
}

function shouldHideFromUIMapper(num: number): boolean {
  return num <= 0;
}

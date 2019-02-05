import {LazyGetter} from 'typescript-lazy-get-decorator';
import {addCssClases} from '../fn/addCssClasses';
import {addStyle} from '../fn/addStyle';

export abstract class IconMenuItem {
  public constructor(imgUrl: string, label?: string) {
    this.imgUrl = imgUrl;
    this.label = label || '';
    const onClick = this.getOnClick();
    if (onClick) {
      this.root.addEventListener('click', onClick);
    }

    addStyle(this.root, require('../styles/IconMenuItemBase.scss'));
    this.root.appendChild(this.innerContainer);
    this.innerContainer.appendChild(this.img);
    this.innerContainer.appendChild(this.labelElement);
  }

  @LazyGetter()
  public get container(): HTMLDivElement {
    return document.createElement('div');
  }

  @LazyGetter()
  public get img(): HTMLImageElement {
    return addCssClases('img', 'item');
  }

  public get imgUrl(): string {
    return this.img.src;
  }

  public set imgUrl(v: string) {
    this.img.src = v;
  }

  @LazyGetter()
  public get innerContainer(): HTMLSpanElement {
    return addCssClases('span', 'btn', 'btn-sm', 'btn-dark');
  }

  public get label(): string {
    return this.labelElement.innerHTML;
  }

  public set label(v: string) {
    this.labelElement.innerHTML = v;
  }

  @LazyGetter()
  public get labelElement(): HTMLSpanElement {
    return addCssClases('span', 'item');
  }

  @LazyGetter()
  protected get root(): ShadowRoot {
    return this.container.attachShadow({mode: 'closed'});
  }

  protected getOnClick(): void | (() => void) {
    // none
  }
}

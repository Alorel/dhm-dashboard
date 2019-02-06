//tslint:disable:max-line-length

export function addCssClases<K extends keyof HTMLElementTagNameMap>(el: K, ...classes: string[]): HTMLElementTagNameMap[K];
export function addCssClases<T extends Element>(el: T, ...classes: string[]): T;
export function addCssClases(el: any, ...classes: string[]): any {
  if (typeof el === 'string') {
    el = document.createElement(el);
  }
  el.classList.add(...classes);

  return el;
}

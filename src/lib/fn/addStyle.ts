export function addStyle<T extends Node>(el: T, css: string): T {
  const style = document.createElement('style');
  style.innerText = css;
  el.appendChild(style);

  return el;
}

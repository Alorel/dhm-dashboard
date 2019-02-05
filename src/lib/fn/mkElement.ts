export function mkElement<K extends keyof HTMLElementTagNameMap>(name: K,
                                                                 text: string,
                                                                 asHTML?: boolean): HTMLElementTagNameMap[K] {
  const el = document.createElement(name);
  el[asHTML ? 'innerHTML' : 'innerText'] = text;

  return el;
}

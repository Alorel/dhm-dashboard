import {mkElement} from './mkElement';

export function mkSpan(text: string, asHTML?: boolean): HTMLSpanElement {
  return mkElement('span', text, asHTML);
}

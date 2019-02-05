import {Observable} from 'rxjs';

export interface HideableUIItem<T extends Node = Node> {
  extractDomElement(): T;

  shouldHideFromUI(): Observable<boolean>;
}

export function isHideableUIItem(v: any): v is HideableUIItem {
  return !!v && typeof v.shouldHideFromUI === 'function' &&
    typeof v.extractDomElement === 'function';
}

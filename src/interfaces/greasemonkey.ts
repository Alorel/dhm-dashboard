import {Obj} from './Obj';

export const enum GMResource {
  BS_CSS = 'bs_css',
  TOOLTIP_CSS = 'tooltip_css'
}

declare const unsafeWindow: typeof window & Obj<any>;
declare const GM_info: {
  readonly script: {
    readonly homepage: string;
    readonly name: string;
    readonly version: string;
    readonly [k: string]: any;
  };
};

declare function GM_getResourceText(which: GMResource): string;

export const GM = {
  getResourceText: GM_getResourceText,
  info: GM_info,
  unsafeWindow
};

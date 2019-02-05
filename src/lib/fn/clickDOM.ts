function clickCommon(el?: HTMLElement | null): boolean {
  if (el) {
    el.click();

    return true;
  }

  return false;
}

export function domClickID(id: string): void {
  if (!clickCommon(document.getElementById(id))) {
    throw new Error(`Unable to click DOM ID ${id}`);
  }
}

export function domClickSelector(selector: string): void {
  if (!clickCommon(<HTMLElement>document.querySelector(selector))) {
    throw new Error(`Unable to click selector "${selector}"`);
  }
}

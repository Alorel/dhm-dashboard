import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {getGameValue} from '../fn/getGameValue';
import {navigate, NavTarget} from '../fn/navigate';
import {ReadiableMenuItem} from '../structures/ReadiableMenuItem';

class CraftingTimer extends ReadiableMenuItem<number> {
  public constructor() {
    super('/images/craftingSkill.png');
  }

  protected computeValue(): Observable<number> {
    return combineLatest(getGameValue('smeltingCurrentOreTo'), getGameValue('smeltingCurrentOreAt'))
      .pipe(
        map<[number, number], number>(([to, at]) => to - at)
      );
  }

  protected getOnClick(): void | (() => void) {
    return () => {
      navigate(NavTarget.CRAFTING);
    };
  }

  protected readyMapper(value: number): boolean {
    return value === 0;
  }

  protected valueStringifier(value: number): string {
    return value === -1 ? '??' : this.readyMapper(value) ? 'ready' : super.valueStringifier(value);
  }
}

export const craftingTimer = new CraftingTimer();

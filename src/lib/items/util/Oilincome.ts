import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {GM, GMResource} from '../../../interfaces/greasemonkey';
import {addStyle} from '../../fn/addStyle';
import {getGameValue} from '../../fn/getGameValue';
import {navigate, NavTarget} from '../../fn/navigate';
import {ValuedMenuItem} from '../../structures/ValuedMenuItem';

class OilIncomeDisplay extends ValuedMenuItem<number> {

  public constructor() {
    super('/images/oil_lighter.png');
    addStyle(this.root, GM.getResourceText(GMResource.BS_CSS));
  }

  protected computeValue(): Observable<number> | number {
    return combineLatest(getGameValue('oilIn'), getGameValue('oilOut')).pipe(
      map(([$in, $out]) => $in - $out),
      distinctUntilChanged()
    );
  }

  protected getOnClick(): void | (() => void) {
    return () => {
      navigate(NavTarget.MINING_MACHINERY);
    };
  }

  protected valueStringifier(value: number): string {
    const label = value ? 'success' : 'danger';
    const sym = value ? '+' : '-';

    return `<span class="text-${label}">${sym + (value || 0).toLocaleString()}</span>`;
  }
}

export const oilIncomeDisplay = new OilIncomeDisplay();

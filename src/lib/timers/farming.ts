import {navigate, NavTarget} from '../fn/navigate';
import {PatchTimer} from '../structures/PatchTimer';

class FarmingTimer extends PatchTimer {

  public constructor() {
    super('/images/farmingSkill.png', 'farm');
  }

  protected getOnClick(): void | (() => void) {
    return () => {
      navigate(NavTarget.FARMING);
    };
  }
}

export const farmingTimer = new FarmingTimer();

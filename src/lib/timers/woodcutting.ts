import {navigate, NavTarget} from '../fn/navigate';
import {PatchTimer} from '../structures/PatchTimer';

class WoodcuttingTimer extends PatchTimer {

  public constructor() {
    super('/images/woodcuttingSkill.png', 'tree');
  }

  protected getOnClick(): void | (() => void) {
    return () => {
      navigate(NavTarget.WOODCUTTING);
    };
  }
}

export const woodcuttingTimer = new WoodcuttingTimer();

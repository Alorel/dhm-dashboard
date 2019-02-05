import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {getGameValue} from '../fn/getGameValue';
import {navigate, NavTarget} from '../fn/navigate';
import {times1k} from '../fn/times1k';
import {TimerMenuItem} from '../structures/TimerMenuItem';

class ExplorationTimer extends TimerMenuItem {
  public constructor() {
    super('/images/exploringSkill.png');
  }

  protected computeValue(): Observable<number> {
    return getGameValue('explorerCooldown').pipe(map(times1k));
  }

  protected getOnClick(): void | (() => void) {
    return () => {
      navigate(NavTarget.EXPLORATION);
    };
  }
}

export const explorationTimer = new ExplorationTimer();

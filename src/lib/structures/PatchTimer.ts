import {range} from 'lodash-es';
import {combineLatest, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {distinctUntilObjectChanged} from '../fn/distinctUntilObjectChanged';
import {getGameValue} from '../fn/getGameValue';
import {TimerMenuItem} from './TimerMenuItem';

export abstract class PatchTimer extends TimerMenuItem {

  public constructor(imgUrl: string,
                     private readonly prefix: string,
                     label?: string) {
    super(imgUrl, label);
  }

  public getAvailablePatches(): Observable<number[]> {
    const o$ = range(1, 7).map<Observable<number>>(i => getGameValue(`${this.prefix}Unlocked${i}`));

    return combineLatest(...o$).pipe(
      map<number[], number[]>(unlockStates => {
        const out: number[] = [];

        for (let i = 0; i < unlockStates.length; i++) {
          if (unlockStates[i]) {
            out.push(i + 1);
          }
        }

        return out;
      }),
      distinctUntilObjectChanged()
    );
  }

  protected computeValue(): Observable<number> {
    return this.getAvailablePatches().pipe(
      switchMap<number[], number[]>(indices => {
        return combineLatest(...indices.map<Observable<number>>(i => getGameValue(`${this.prefix}Timer${i}`)));
      }),
      map(allTimes => {
        const filteredTimes = allTimes.map(timeFn).filter(filterInvalids);

        return filteredTimes.length ? Math.min(...filteredTimes) : -1;
      })
    );
  }
}

function timeFn(val: number): number {
  if (val === 1) {
    return 0;
  } else if (val > 0) {
    return val * 1000;
  } else {
    return -1;
  }
}

function filterInvalids(v: number): boolean {
  return v !== -1;
}

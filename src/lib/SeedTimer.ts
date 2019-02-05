import {padStart, range} from 'lodash-es';
import {duration} from 'moment';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {seedGrowTimes, seedNames} from '../consts/seeds';
import {GM, GMResource} from '../interfaces/greasemonkey';
import {addStyle} from './fn/addStyle';
import {getGameValue} from './fn/getGameValue';
import {navigate, NavTarget} from './fn/navigate';
import {ReadiableMenuItem} from './structures/ReadiableMenuItem';

function getDivider(): Observable<number> {
  const obs$ = range(1, 7).map<Observable<number>>(i => getGameValue(`farmUnlocked${i}`));

  return combineLatest(obs$).pipe(
    map<number[], number>(unlockStates => {
      let out = 0;
      for (const us of unlockStates) {
        out += us;
      }

      return Math.max(1, out);
    }),
    distinctUntilChanged()
  );
}

class SeedTimer extends ReadiableMenuItem<number> {
  public constructor() {
    super('/images/clock_white.png');
    addStyle(this.root, GM.getResourceText(GMResource.TOOLTIP_CSS));
    this.innerContainer.setAttribute('data-balloon-pos', 'up');

    this.computeValue().subscribe(v => {
      const dur = duration(v);
      const out: number[] = [
        dur.hours(),
        dur.minutes(),
        dur.seconds()
      ];

      if (dur.days()) {
        out.unshift(dur.days());
      }

      const txt = out.map(num => padStart(num.toString(), 2, '0')).join(':');
      this.innerContainer.setAttribute('data-balloon', txt);
    });
  }

  protected computeValue(): Observable<number> {

    return getDivider().pipe(
      switchMap<number, number>(divider => {
        return combineLatest(seedNames.map<Observable<number>>(getGameValue)).pipe(
          map<number[], number>(counts => {
            let out = 0;
            for (let i = 0; i < counts.length; i++) {
              out += counts[i] * seedGrowTimes[seedNames[i]];
            }

            return Math.floor(out / divider);
          })
        );
      }),
      distinctUntilChanged()
    );
  }

  protected getOnClick(): void | (() => void) {
    return () => {
      navigate(NavTarget.FARMING);
    };
  }

  protected getReadyClasses(): string[] {
    return ['btn-danger'];
  }

  protected readyMapper(value: number): boolean {
    return value === 0;
  }

  protected valueStringifier(value: number): string {
    return this.readyMapper(value) ? 'Done' : duration(value).humanize();
  }
}

export const seedTimer = new SeedTimer();

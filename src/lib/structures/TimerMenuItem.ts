import {padStart} from 'lodash-es';
import {duration} from 'moment';
import {ReadiableMenuItem} from './ReadiableMenuItem';

export abstract class TimerMenuItem extends ReadiableMenuItem<number> {

  public static format(v: number): string {
    return padStart(v.toString(), 2, '0');
  }

  protected readyMapper(value: number): boolean {
    return value === 0;
  }

  protected valueStringifier(millis: number): string {
    switch (millis) {
      case 0:
        return 'ready';
      case -1:
        return '??';
      default:
        const m = duration(millis);
        const oot = [m.hours(), m.minutes(), m.seconds()];
        const days = m.days();

        if (days) {
          oot.unshift(days);
        }

        return oot.map(TimerMenuItem.format).join(':');
    }
  }
}

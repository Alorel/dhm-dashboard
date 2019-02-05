import {duration} from 'moment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GM, GMResource} from '../../interfaces/greasemonkey';
import {addStyle} from '../fn/addStyle';
import {AbstractHideableTimer} from './AbstractHideableTimer';
import {TimerMenuItem} from './TimerMenuItem';

export abstract class AbstractLongRunningHideableTimer extends AbstractHideableTimer {

  public constructor(imgUrl: string, label?: string) {
    super(imgUrl, label);
    addStyle(this.root, GM.getResourceText(GMResource.TOOLTIP_CSS));

    const c = this.innerContainer;
    c.setAttribute('data-balloon-pos', 'up');
    this.computeValue().pipe(map(TimerMenuItem.prototype['valueStringifier']))
      .subscribe(v => {
        c.setAttribute('data-balloon', v);
      });
  }

  protected abstract computeValue(): Observable<number>;

  protected valueStringifier(millis: number): string {
    return duration(millis).humanize();
  }
}

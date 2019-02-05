import {addStyle} from '../fn/addStyle';
import {TimerMenuItem} from './TimerMenuItem';

export abstract class AbstractHideableTimer extends TimerMenuItem {

  public constructor(imgUrl: string, label?: string) {
    super(imgUrl, label || '');
    addStyle(this.root, '.force-hide{display:none!important}');
  }

  protected getReadyClasses(): string[] {
    return super.getReadyClasses().concat('force-hide');
  }
}

import {duration} from 'moment';
import {combineLatest} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {COMBAT_POTIONS, NON_COMBAT_POTIONS} from '../../consts/potions';
import {GM} from '../../interfaces/greasemonkey';
import {getGameValue} from '../fn/getGameValue';
import {MkListNode} from '../fn/mkList';
import {Item} from '../structures/Item';

export const potionsNShit: MkListNode<any>[] = NON_COMBAT_POTIONS.map<MkListNode<any>>(i => {
  const item = Item.fromName(i)
    .addOnClick(() => {
      GM.unsafeWindow.clicksItem(i);
    });

  getGameValue(i)
    .pipe(
      map(count => GM.unsafeWindow.getPotionTimer(i) * 1000 * count),
      distinctUntilChanged(),
      map(t => duration(t).humanize())
    )
    .subscribe(txt => {
      item.addSecondaryTooltip(`Enough for ${txt}`);
    });

  return item;
});

potionsNShit.push(
  ...COMBAT_POTIONS.map<MkListNode<any>>(potionName => {
    const item = Item.fromName(potionName).forceState('btn-light');
    const mobName$ = getGameValue<string>('monsterName');
    const potUsed$ = getGameValue(`${potionName}Used`);

    combineLatest(mobName$, potUsed$)
      .pipe(
        map<[string, number], boolean>(([mob, used]) => !mob || mob === 'none' || !!used),
        distinctUntilChanged()
      )
      .subscribe(shouldDisable => {
        item.innerContainer.classList[shouldDisable ? 'add' : 'remove']('disabled');
      });

    return item;
  })
);

import {GM} from '../../interfaces/greasemonkey';
import {MkListNode} from '../fn/mkList';
import {NavTarget} from '../fn/navigate';
import {Item} from '../structures/Item';

export const rawFoodNShit: MkListNode<any>[] = [
  'rawRainbowFish',
  'rawWhale',
  'rawShark',
  'rawSwordfish',
  'rawTuna',
  'rawChicken',
  'rawSardine',
  'rawShrimp'
].map(Item.fromNameClick);

rawFoodNShit.unshift(Item.fromName('heat').addOnClick(() => {
  GM.unsafeWindow.clicksItem(GM.unsafeWindow.getOvenType());
}));
rawFoodNShit.unshift(Item.fromNameNav('bait', NavTarget.COOKING));

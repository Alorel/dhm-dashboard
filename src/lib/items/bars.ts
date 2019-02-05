import {MkListNode} from '../fn/mkList';
import {NavTarget} from '../fn/navigate';
import {Item} from '../structures/Item';

export const barsNShit: MkListNode<any>[] = [
  'bronzeBars',
  'ironBars',
  'silverBars',
  'goldBars',
  'promethiumBars',
  'titaniumBars'
].map(Item.fromNameClick);

barsNShit.push(
  Item.fromNameNav('ironBucket', NavTarget.CRAFTING),
  Item.fromName('lava')
);

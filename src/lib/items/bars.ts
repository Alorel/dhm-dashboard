import {MkListNode} from '../fn/mkList';
import {NavTarget} from '../fn/navigate';
import {Item} from '../structures/Item';

export const barCounts: MkListNode<any>[] = [
  'bronzeBars',
  'ironBars',
  'silverBars',
  'goldBars',
  'promethiumBars',
  'titaniumBars'
].map(Item.fromNameClick);

barCounts.push(
  Item.fromNameNav('ironBucket', NavTarget.CRAFTING),
  Item.fromName('lava')
);

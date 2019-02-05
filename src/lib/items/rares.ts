import {MkListNode} from '../fn/mkList';
import {Item} from '../structures/Item';

export const rareCounts: MkListNode<any>[] = [
  'treasureChest',
  'treasureMap',
  'xpLamp10k',
  'bagOfCash',
  'hauntedPainting',
  'hpEmblem1',
  'hpEmblem1Uncharged',
  'hpEmblem2',
  'hpEmblem2Uncharged'
].map<MkListNode<any>>((n: string) => Item.fromNameClick(n).forceState('btn-success'));

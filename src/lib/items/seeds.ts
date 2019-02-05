import {seedNames} from '../../consts/seeds';
import {getGameValue} from '../fn/getGameValue';
import {MkListNode} from '../fn/mkList';
import {NavTarget} from '../fn/navigate';
import {seedTimer} from '../SeedTimer';
import {Item} from '../structures/Item';

export const seedCounts: MkListNode<any>[] = seedNames
  .map(n => Item.fromNameNav(n, NavTarget.FARMING));

seedCounts.push(seedTimer);

seedCounts.unshift(...[
  'fishBones',
  'bones',
  'ashes',
  'iceBones'
].map(n => Item.fromNameClick(n)));

seedCounts.unshift(new Item('bonemealBin.png', getGameValue('bonemeal')));

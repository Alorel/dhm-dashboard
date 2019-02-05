import {getGameValue} from '../fn/getGameValue';
import {Item} from '../structures/Item';

export const boneCounts = [
  'fishBones',
  'bones',
  'ashes',
  'iceBones'
].map(n => Item.fromNameClick(n));

boneCounts.unshift(new Item('bonemealBin.png', getGameValue('bonemeal')));

import {getGameValue} from '../fn/getGameValue';
import {Item} from '../structures/Item';

export const bonesNShit = [
  'fishBones',
  'bones',
  'ashes',
  'iceBones'
].map(n => Item.fromNameClick(n));

bonesNShit.unshift(new Item('bonemealBin.png', getGameValue('bonemeal')));

import {MkListNode} from '../fn/mkList';
import {NavTarget} from '../fn/navigate';
import {Item} from '../structures/Item';

export const cookedFoodNShit: MkListNode<any>[] = [
  'chicken',
  'cheese',
  'honey',
  'potato',
  'apple',
  'caveCarrot',
  'shrimp',
  'sardine',
  'tuna',
  'shark',
  'shrimp2',
  'sardine2',
  'tuna2',
  'swordfish2',
  'shark2',
  'swordfish',
  'whale',
  'whale2',
  'rainbowFish',
  'rainbowFish2'
].map(Item.fromNameClick);

cookedFoodNShit.unshift(Item.fromNameNav('energy', NavTarget.EXPLORATION));

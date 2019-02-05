import {range} from 'lodash-es';
import {MkListNode} from '../fn/mkList';
import {NavTarget} from '../fn/navigate';
import {Item} from '../structures/Item';
import {oilIncomeDisplay} from './util/Oilincome';

export const oresNShit: MkListNode<any>[] = [
  Item.fromName('bloodCrystals').nav(NavTarget.SHOP),
  oilIncomeDisplay,
  Item.fromName('oil').nav(NavTarget.MINING_MACHINERY)
];
oresNShit.push(
  ...[
    'sapphire',
    'emerald',
    'ruby',
    'diamond',
    'bloodDiamond',
    'stone',
    'copper',
    'iron',
    'silver',
    'gold',
    'promethium',
    'titanium',
    ...range(1, 4).map(i => `geode${i}`)
  ].map(n => Item.fromNameClick(n))
);

import {GM} from '../../interfaces/greasemonkey';

export const enum NavTarget {
  BREW = 'brew',
  BREWING = 'brewing',
  CRAFTING = 'crafting',
  COOKING = 'cooking',
  FARMING = 'farming',
  EXPLORATION = 'exploring',
  MINING = 'mining',
  MINING_MACHINERY = 'miningOres',
  MAIN = 'main',
  WOODCUTTING = 'woodcutting',
  SHOP = 'shop'
}

export function navigate(where: NavTarget): void {
  GM.unsafeWindow.navigate(where);
}

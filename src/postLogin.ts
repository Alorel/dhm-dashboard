import {GM} from './interfaces/greasemonkey';
import {addCssClases} from './lib/fn/addCssClasses';
import {insertAfter} from './lib/fn/insertAfter';
import {mkElement} from './lib/fn/mkElement';
import {createMkListFn} from './lib/fn/mkList';
import {mkSpan} from './lib/fn/mkSpan';
import {navigate, NavTarget} from './lib/fn/navigate';
import {barsNShit} from './lib/items/bars';
import {bonesNShit} from './lib/items/bonez';
import {cookedFoodNShit} from './lib/items/cookedFoodNShit';
import {herbsNShit} from './lib/items/herbs';
import {logsNShit} from './lib/items/logs';
import {oresNShit} from './lib/items/ores';
import {potionsNShit} from './lib/items/potions';
import {rawFoodNShit} from './lib/items/rawFood';
import {seedsNShit} from './lib/items/seeds';
import {craftingTimer} from './lib/timers/crafting';
import {explorationTimer} from './lib/timers/exploring';
import {farmingTimer} from './lib/timers/farming';
import {woodcuttingTimer} from './lib/timers/woodcutting';

const dashboard = document.createElement('div');
const mkList = createMkListFn(dashboard);

mkList(
  explorationTimer,
  craftingTimer,
  woodcuttingTimer,
  farmingTimer
);
mkList(...oresNShit);
mkList(...seedsNShit);
mkList(...bonesNShit);
mkList(...barsNShit);
mkList(...logsNShit);
mkList(...herbsNShit);
mkList(...potionsNShit);
mkList(...rawFoodNShit);
mkList(...cookedFoodNShit);

export function initUI(el: HTMLElement): void {
  insertAfter(dashboard, el);
}

try {
  const script = GM.info.script;
  const {version, name, homepage} = script;

  mkList.root.appendChild(document.createElement('hr'));
  const container = addCssClases('div', 'text-center', 'small');
  container.appendChild(mkSpan(`${name} v${version} by `));

  const a = mkElement('a', 'Alorel');
  a.href = homepage;
  a.target = '_blank';
  container.appendChild(a);

  mkList.root.appendChild(container);
} catch {
  //noop
}

navigate(NavTarget.WOODCUTTING);
navigate(NavTarget.FARMING);
navigate(NavTarget.EXPLORATION);
navigate(NavTarget.MINING);
navigate(NavTarget.COOKING);
navigate(NavTarget.CRAFTING);
navigate(NavTarget.MAIN);
navigate(NavTarget.BREW);
navigate(NavTarget.BREWING);

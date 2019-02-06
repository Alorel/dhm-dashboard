import {GM} from './interfaces/greasemonkey';
import {addCssClases} from './lib/fn/addCssClasses';
import {insertAfter} from './lib/fn/insertAfter';
import {mkElement} from './lib/fn/mkElement';
import {createMkListFn} from './lib/fn/mkList';
import {mkSpan} from './lib/fn/mkSpan';
import {navigate, NavTarget} from './lib/fn/navigate';
import {barCounts} from './lib/items/bars';
import {boneCounts} from './lib/items/bonez';
import {cookedFoodCounts} from './lib/items/cookedFood';
import {exploringGoodies} from './lib/items/exploringGoodies';
import {herbCounts} from './lib/items/herbs';
import {logCounts} from './lib/items/logs';
import {oreCounts} from './lib/items/ores';
import {potionCounts} from './lib/items/potions';
import {rareCounts} from './lib/items/rares';
import {rawFoodCounts} from './lib/items/rawFood';
import {seedCounts} from './lib/items/seeds';
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
mkList(...rareCounts);
mkList(...oreCounts);
mkList(...seedCounts);
mkList(...boneCounts);
mkList(...barCounts);
mkList(...logCounts);
mkList(...herbCounts);
mkList(...potionCounts);
mkList(...rawFoodCounts);
mkList(...cookedFoodCounts);
mkList(...exploringGoodies);

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

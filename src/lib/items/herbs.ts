import {MkListNode} from '../fn/mkList';
import {navigate, NavTarget} from '../fn/navigate';
import {Item} from '../structures/Item';

function navToBrew() {
  navigate(NavTarget.BREW);
}

function navToBrewing(e: Event) {
  e.preventDefault();
  navigate(NavTarget.BREWING);
}

export const herbsNShit: MkListNode<any>[] = [
  'dottedGreenLeaf',
  'greenLeaf',
  'limeLeaf',
  'goldLeaf',
  'crystalLeaf',
  'redMushroom'
].map(h => Item.fromName(h).addOnClick(navToBrew).addOnRightClick(navToBrewing));

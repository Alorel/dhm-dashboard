import {GM, GMResource} from '../../interfaces/greasemonkey';
import {HideableUIItem, isHideableUIItem} from '../../interfaces/HideableUIItem';
import {IconMenuItem} from '../structures/IconMenuItem';
import {addCssClases} from './addCssClasses';
import {addStyle} from './addStyle';

function stdSeparatorFn(): Node {
  return document.createElement('hr');
}

export type MkListNode<T extends Node = Node> = Node | HideableUIItem<T> | IconMenuItem;

function isContainerElement(v: any): v is IconMenuItem {
  return !!v && v instanceof IconMenuItem;
}

export function createMkListFn(container: Element, separatorFn: typeof stdSeparatorFn = stdSeparatorFn) {
  let numListItems = 0;
  const root = container.attachShadow({mode: 'closed'});
  addStyle(root, GM.getResourceText(GMResource.BS_CSS));
  addStyle(root, require('../styles/main-menu.scss'));

  function mkList<T extends Node = Node>(...nodes: MkListNode<T>[]) {
    if (numListItems++) {
      root.appendChild(separatorFn());
    }

    const ul: HTMLUListElement = addCssClases('ul', 'inline');
    for (const node of nodes) {
      try {
        const li = document.createElement('li');

        if (isHideableUIItem(node)) {
          node.shouldHideFromUI().subscribe(shouldHide => {
            li.style.display = shouldHide ? 'none' : null;
          });

          li.appendChild(node.extractDomElement());
        } else if (isContainerElement(node)) {
          li.appendChild(node.container);
        } else {
          li.appendChild(node);
        }

        ul.appendChild(li);
      } catch (e) {
        console.error(node);

        throw e;
      }
    }

    root.appendChild(ul);
  }

  mkList.root = root;

  return mkList;
}

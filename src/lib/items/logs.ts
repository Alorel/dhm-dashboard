import {domClickSelector} from '../fn/clickDOM';
import {MkListNode} from '../fn/mkList';
import {Item} from '../structures/Item';

export const logsNShit: MkListNode<any>[] = [
  'logs',
  'oakLogs',
  'entLogs',
  'willowLogs',
  'mapleLogs',
  'redwoodLogs',
  'pineLogs',
  'kindle',
  'lavaKindle',
  'hauntedLogs'
].map(t => Item.fromName(t).addOnClick(() => {
  domClickSelector(`#dialogue-oven-${t}>tbody>tr[onclick]`);
}));

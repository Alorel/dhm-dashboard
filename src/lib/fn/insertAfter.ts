export function insertAfter(newNode: Node, referenceNode: Node): void {
  (<Node>referenceNode.parentNode).insertBefore(newNode, referenceNode.nextSibling);
}

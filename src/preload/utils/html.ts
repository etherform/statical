export function appendChildSafe(parent: HTMLElement, child: HTMLElement) {
  if (!Array.from(parent.children).find(e => e === child))
    return parent.appendChild(child)
}

export function removeChildSafe(parent: HTMLElement, child: HTMLElement) {
  if (Array.from(parent.children).find(e => e === child))
    return parent.removeChild(child)
}

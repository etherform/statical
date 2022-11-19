export function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    }
    else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState))
          resolve(true)
      })
    }
  })
}

export function appendChildSafe(parent: HTMLElement, child: HTMLElement) {
  if (!Array.from(parent.children).find((e) => e === child))
    return parent.appendChild(child)
}

export function removeChildSafe(parent: HTMLElement, child: HTMLElement) {
  if (Array.from(parent.children).find((e) => e === child))
    return parent.removeChild(child)
}

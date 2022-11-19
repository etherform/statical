export function waitUntil(
  conditionFn: () => Promise<boolean>,
  pollRate: number,
  timeout: number,
): Promise<boolean> {
  let count = 0
  const total = timeout / pollRate
  return new Promise((resolve) => {
    (async function waitUntilTrue() {
      if (count >= total)
        return resolve(false)

      count++

      if (await conditionFn())
        return resolve(true)

      setTimeout(waitUntilTrue, pollRate)

      return false
    }())
  })
}

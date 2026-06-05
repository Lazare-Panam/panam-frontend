export function countBy<T>(data: T[], key: (item: T) => string): Record<string, number> {
  return data.reduce((acc, item) => {
    const v = key(item)
    acc[v] = (acc[v] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)
}
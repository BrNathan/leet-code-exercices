const hashOperation = new Map([
  ["++X", 1],
  ["X++", 1],
  ["X--", -1],
  ["--X", -1],
])

function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((prev, current, index, array) => prev + hashOperation.get(current), 0)
};
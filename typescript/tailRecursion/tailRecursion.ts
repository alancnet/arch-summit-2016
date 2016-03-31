function fib(n: number):number {
  // Doesn't TCO
  function helper(current:number, next:number, i: number):number {
    if (i == n) return current;
    return helper(next, current + next, i + 1);
  }
  return helper(1, 1, 0);
}

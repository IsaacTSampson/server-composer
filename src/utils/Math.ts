export function isPowerOfTwo(n: number) {
  return n > 0 && (n & (n - 1)) === 0;
}

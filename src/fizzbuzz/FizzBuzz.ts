const FIZZ_MESSAGE = "Fizz";
const BUZZ_MESSAGE = "Buzz";

export function fizzBuzz(n: number): string | number {
  const fizz: string = isMultipleOf(3)(n) ? FIZZ_MESSAGE : "";
  const buzz: string = isMultipleOf(5)(n) ? BUZZ_MESSAGE : "";
  const fizzbuzz: string = fizz + buzz;
  return fizzbuzz || n;
}

function isMultipleOf(base: number) {
  return function(n: number): boolean {
    return n % base === 0;
  };
}

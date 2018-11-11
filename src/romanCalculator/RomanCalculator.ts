export type RomanNumber = string;

type Operator = "+";

interface Replacement {
  short: string;
  long: string;
}

const REPLACEMENTS: Replacement[] = [
  {
    short: "CM",
    long: "DCD"
  },
  {
    short: "M",
    long: "DD"
  },
  {
    short: "CD",
    long: "CCCC"
  },
  {
    short: "D",
    long: "CCCCC"
  },
  {
    short: "XC",
    long: "LXL"
  },
  {
    short: "C",
    long: "LL"
  },
  {
    short: "XL",
    long: "XXXX"
  },
  {
    short: "L",
    long: "XXXXX"
  },
  {
    short: "IX",
    long: "VIV"
  },
  {
    short: "X",
    long: "VV"
  },
  {
    short: "IV",
    long: "IIII"
  },
  {
    short: "V",
    long: "IIIII"
  }
];

export function romanCalculator(a: RomanNumber, b: RomanNumber, _: Operator): RomanNumber {
  return replaceByHigherDigits(replaceByLowerDigits(a) + replaceByLowerDigits(b));
}

function replaceByLowerDigits(number: RomanNumber): RomanNumber {
  return REPLACEMENTS.reduce(replaceBySingleLowerDigit, number);
}

function replaceBySingleLowerDigit(number: RomanNumber, { long, short }: Replacement): RomanNumber {
  return number.replace(new RegExp(short, "g"), long);
}

function replaceByHigherDigits(number: RomanNumber): RomanNumber {
  return REPLACEMENTS.slice()
    .reverse()
    .reduce(replaceBySingleHigherDigit, number);
}

function replaceBySingleHigherDigit(number: RomanNumber, { long, short }: Replacement): RomanNumber {
  return number.replace(new RegExp(long, "g"), short);
}

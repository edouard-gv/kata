import { fizzBuzz } from "./FizzBuzz";

describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});

describe("FizzBuzz should return 'Fizz' for multiples of 3", function() {
  it("FizzBuzz(3) should return 'Fizz'", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("FizzBuzz(6) should return 'Fizz'", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
});

describe("FizzBuzz should return 'Buzz' for multiples of 5", function() {
  it("FizzBuzz(5) should return 'Buzz'", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("FizzBuzz(10) should return 'Buzz'", function() {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });
});

describe("FizzBuzz should return 'FizzBuzz' for multiples of 3 and 5", function() {
  it("FizzBuzz(3 * 5) should return 'FizzBuzz' - 3 * 5 is the least common multiple of 3 and 5", function() {
    expect(fizzBuzz(3 * 5)).toEqual("FizzBuzz");
  });

  it("FizzBuzz(3 * 5 * 2) should return 'FizzBuzz' - 3 * 5 * 2 is the second least common multiple of 3 and 5", function() {
    expect(fizzBuzz(3 * 5 * 2)).toEqual("FizzBuzz");
  });
});

describe("Else, FizzBuzz(n) should return n", function() {
  it("FizzBuzz(1) should return 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("FizzBuzz(2) should return 2", function() {
    expect(fizzBuzz(2)).toEqual(2);
  });
});

describe("Verification: edge case 0", function() {
  it("FizzBuzz(0) should return 'FizzBuzz'", function() {
    expect(fizzBuzz(0)).toEqual("FizzBuzz");
  });
});

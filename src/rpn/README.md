# Reverse Polish Notation

Write a calculator able to compute an instruction provided as a string in the [reverse polish notation](https://fr.wikipedia.org/wiki/Notation_polonaise_inverse).

Examples:

- `1 2 + 3 -` is the reverse polish notation for `1 + 2 - 3` and should output `0`
- `1 2 + 2 x` is the reverse polish notation for `(1 + 2) x 2` and should output `6`

Nota:

- For the sake of simplicity, the reverse polish notation for `- (1 + 2)` will be `1 2 + -1 x`, not `1 2 + -`.
- `2 1 2 + x` is another valid, though slightly more complex, reverse polish notation for `(1 + 2) x 2`. Good to know, but should not be further considered within this kata.

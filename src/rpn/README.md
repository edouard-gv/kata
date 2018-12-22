# Reverse Polish Notation

Write a calculator able to compute an instruction provided as a string in the [reverse polish notation](https://fr.wikipedia.org/wiki/Notation_polonaise_inverse).

Examples:

- `1 2 + 3 -` is the reverse polish notation for `1 + 2 - 3` and should output `0`
- `1 2 + 2 *` is the reverse polish notation for `(1 + 2) * 2` and should output `6`
- `2 1 2 + *` is the reverse polish notation for `2 * (1 + 2)` and should output `6`

Nota: for the sake of simplicity, the reverse polish notation for `- (1 + 2)` will be `1 2 + -1 *`, not `1 2 + -`.

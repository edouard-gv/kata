# Roman Calculator

“As a Roman Bookkeeper I want to add Roman numbers because doing it manually is too tedious.” Given the Roman numerals, create two numbers and add them. As we are in Rome there is no such thing as decimals or int, we need to do this with the strings. An example would be “XIV” + “LX” = “LXXIV”

There are some rules to a Roman number:

- The Roman numerals are I, V, X, L, C, D and M:
  - V = I + I + I + I + I
  - X = V + V
  - L = X + X + X + X + X
  - C = L + L
  - D = C + C + C + C + C
  - M = D + D
- There can't be more than 3 following occurrences of I, X or C
- There can't be more than 1 following occurrence of V, L or D
- If a lesser numeral is put before a bigger it means subtraction of the lesser from the bigger:
  - I + I + I + I = IV
  - V + IV = IX
  - X + X + X + X = XL
  - L + XL = XC
  - C + C + C + C = CD
  - D + CD = CM

Examples:

- LXXXIV is 84
- XC is 90
- XCV is 95

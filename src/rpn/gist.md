## RPN Compilator

## Input

`1 2 + 3 *`

## Lexical analysis (lexing)

Definition of a Lexem (TypeScript):

```TypeScript
interface Lexem {
    category: 'LitteralNumber' | 'Operator';
    value?: string;
}
```

Possible values of lexems:

- `LitteralNumber`: any relative natural number (Z), e.g. `-1`, `0`, `6`, `13`
- `Operator`: `+`, `-`, `*`, `/`

The output of the lexical analysis on input `1 2 + 3 *` would be:

```TypeScript
[
    {
        category: 'LitteralNumber',
        value: '1'
    },
    {
        category: 'LitteralNumber',
        value: '2'
    },
    {
        category: 'Operator',
        value: '+'
    },
    {
        category: 'LitteralNumber',
        value: '3'
    },
    {
        category: 'Operator',
        value: '*'
    },
]
```

## Syntaxic analysis (parsing): the structure

Terminal symbols (alphabet):

- `-` (minus)
- `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`
- `+`, `-`, `*`, `/`

Non-terminal symbols (words), defined by their production / derivation rules in [Extended Backus-Naur Form](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form):

```
<Expression> ::= <Number> | <Expression> <Expression> <Operator>
<Number> ::= ['-'], <Digit>, {<Digit>}
<Digit> ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
<Operator> ::= '+' | '-' | '*' | '/'
```

`1` `<Expression>` is the axiom of this grammar.

https://fr.wikipedia.org/wiki/Hi%C3%A9rarchie_de_Chomsky --> Type 2 or Type 3?

Abstract Syntax Tree (AST) corresponding to input `1 2 + 3 *` (position refers to the position of the char in the string):

```
            1 2 + 3 *
Position:   012345678
```

```JSON
{
  "symbol": "Expression",
  "position": {
    "start": 0,
    "end": 8
  },
  "derivates": [
    {
      "symbol": "Expression",
      "position": {
        "start": 0,
        "end": 4
      },
      "derivates": [
        {
          "symbol": "Expression",
          "position": {
            "start": 0,
            "end": 0
          },
          "derivates": [
            {
              "symbol": "Number",
              "position": {
                "start": 0,
                "end": 0
              },
              "derivates": [
                {
                  "symbol": "Digit",
                  "position": {
                    "start": 0,
                    "end": 0
                  },
                  "derivates": ["1"]
                }
              ]
            }
          ]
        },
        {
          "symbol": "Expression",
          "position": {
            "start": 2,
            "end": 2
          },
          "derivates": [
            {
              "symbol": "Number",
              "position": {
                "start": 2,
                "end": 2
              },
              "derivates": [
                {
                  "symbol": "Digit",
                  "position": {
                    "start": 2,
                    "end": 2
                  },
                  "derivates": ["2"]
                }
              ]
            }
          ]
        },
        {
          "symbol": "Operator",
          "position": {
            "start": 4,
            "end": 4
          },
          "derivates": ["+"]
        }
      ]
    },
    {
      "symbol": "Expression",
      "position": {
        "start": 6,
        "end": 6
      },
      "derivates": [
        {
          "symbol": "Number",
          "position": {
            "start": 6,
            "end": 6
          },
          "derivates": [
            {
              "symbol": "Digit",
              "position": {
                "start": 6,
                "end": 6
              },
              "derivates": ["3"]
            }
          ]
        }
      ]
    },
    {
      "symbol": "Operator",
      "position": {
        "start": 8,
        "end": 8
      },
      "derivates": ["*"]
    }
  ]
}
```

## Semantical analysis: the meaning

For this very grammar, the AST output by semantical analysis will be the same as the AST provided as input, because there is no variable, no function invocation etc.

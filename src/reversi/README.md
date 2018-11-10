# Reversi

Reversi is a board game for two players. More information can be found on [Wikipedia](en.wikipedia.org/wiki/Reversi). This Kata is to write a program that takes a current board position together with information about whose turn it is, and returns a list of the legal moves for that player. A move is only legal if it results in at least one of the opponent’s counters being flipped. Example:

Assuming the given board:

```
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . B W . . .
. . . W B . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
```

and that it's black's turn, the legal moves are the following ones:

```
. . . . . . . .
. . . . . . . .
. . . . x . . .
. . . . . x . .
. . x . . . . .
. . . x . . . .
. . . . . . . .
. . . . . . . .
```

# The-Pig-Dice

By Adolatha Uwineza

## Description

The game involves players throwing a dice and scoring as many points as the total shown on the dice as long as the dice doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn. If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the dice to the next player. Play passes from player to player until a winner is determined. The first player to accumulate 100 or more points wins the game.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery

## Website

https://anders3onne.github.io/the-Pig-dice/

## How to install it

- Clone my repository :
  https://github.com/Anders3onne/the-Pig-dice.git

## BDD

|                                    Behavior                                     |              Input              | Output                                    |
| :-----------------------------------------------------------------------------: | :-----------------------------: | :---------------------------------------- |
|                  Player 1 & Player 2 input names, click ready                   | Player 1: Love Player 2: Hewitt | Start the game                            |
|                              Player 1 clicks Roll                               |           Click roll            | Number is generated, Dice is displayed    |
|      If Player rolls any number other than 1, roll is added to round total      |            Roll = 5             | Round Total =5                            |
|            If Player 1 rolls 1, no score is added round for Player 2            |            Roll = 1             | Round Total = 0, Score = 0, Player2 plays |
| If Player1 clicks Hold, round total is added to his score and it's Player2 Turn |           Click Hold            | Round Total = 5, Score = 5, Player2 plays |
| When a player's total score is 100 or more, game is over and winner alert shows |      Player 1 score = 105       | Newton WINS (SweetAlert)                  |

## Known Issues

None at the moment. But if found kindly reach out.

## Support and contact details

For more info or assistance, please contact:

uwinezaandersonne@gmail.com

## License

MIT© Copyright <2019>

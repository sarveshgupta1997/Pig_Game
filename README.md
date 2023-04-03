# Pig_Game
Pig is a simple dice game first described in print by John Scarne in 1945. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1

# About Game: 
In this game, User Interface (UI) contains user/player that can do three things, they are as follows:

There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.

# Roll the dice: 
The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.
# Hold: 
If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.
# Reset: 
All the scores are set to 0 and Player 1 is set as the starting player (current player).
Making of Game: Being a game rendered by the web browser, it is built by the help of HTML, CSS (for the Front-end) and JavaScript (for the Back-end). The main logic of the game lies in the JS file whereas the appearance and the User Interface is rendered by HTML and CSS. 

# Game Flowchart: 
<img src="/images/pig-game-flowchart.png">

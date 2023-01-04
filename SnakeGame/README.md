# Snake Game
Snake game is a web app game where you control the snake and eat food scattered over the canvas to grow and gain points. The game is written in vanilla JavaScript. This is a very primitive version of snake game, and it might contain errors along the way. I decided to not use any CSS framework, just very basic styling to let the functionality stand out. Basically, main functionality of the snake game is that you can use WASD or arrow keys to control the snake. Each food eaten will add a point. However, if the snake collides with its own body or collides with the edges, the game will end. That brings to the try again button where you can try again if you like. The try again button will be disabled when the game starts, but will enable itself back again once the game is over. The user can choose to switch difficulities by clicking on different buttons to select the game mode. The game is set to easy by default, meaning that if the user chooses to set the difficulty to hard, the snake will then move faster. Obviously, this is only available for desktop as WASD and arrow keys are essential into making this game work. This is my very first time making a motion game using javascript, do not expect it to run very well as it may contain numerous amount of errors, but i guess this is good enough as a starter.
![image](https://user-images.githubusercontent.com/39120147/210235789-6b09c43a-2943-4dce-92d7-9c56b9e26d43.png)
<br>
# How to play
1. When the page is loaded, the snake will move. To control the snake's body, use either WASD or arrow keys.
![snakegameexample1edited](https://user-images.githubusercontent.com/39120147/210236309-9ce0b9b2-4c32-4d64-a56e-f19244de21c6.png)
2. When the game is over, go ahead and click on the "try again" button to restart the game.
![image](https://user-images.githubusercontent.com/39120147/210236395-2d1055f4-7d5a-4233-8ca8-588d0a4e628a.png)
3. You may switch between difficulties, which ultimately resets the canvas and starts over all again. The harder the difficulty, the faster the snake's body moves.
![image](https://user-images.githubusercontent.com/39120147/210236494-645d55dc-d6b6-4ffb-a696-8b6890c15994.png)
Score will also update when the user eats food.
<br>

# Conclusion

I've read some documentaries and tutorials on how to make a snake game in JavaScript, and made the game from scratch. I learnt how a game can be run inside canvas HTML elements and getContext in JS is mainly used for drawing objects on a canvas. I have also learnt how games on websites use specific elements and functions to run the game.

# 2022 December Web Projects
2022 December Web Projects is where I have made 5 projects featuring vanilla JavaScript in a week. This started from the 1st of January, to the 7th of January. This is mainly done to display some of the general JavaScript knowledge I have learnt throughout the 2022 december holidays. <br>
In conclusion, I was happy with the work that I have made in a week. Hopefully I will be craving for more learning and ultimately expand my knowledge for web development.<br><br>

Live demo for all the projects is here: https://bennygoh.tk/2022Webprojects/
<br>

# Table of contents
* [To-do List](#To-do-List)
* [Snake Game](#Snake-game)
* [Country Buddy](#Country-Buddy)
* [Score Keeper](#Score-Keeper)
* [Tic tac toe](#Tic-Tac-Toe)

# Description
I've decided to work on a project for each day and share my thoughts with it. For each day I am going to spend my time making a new project that shows the use of JavaScript in projects.

# To-do-List
First day of making a web application, for this day, I've made a To do list is where you can put your daily tasks there. This includes a local storage function, where it essentially stores your tasks on your browser so that It will not get wiped out when you refresh or close the browser. It includes 3 categories where you can rank a task according to how important it is, with urgent being the most important. Currently, this is only suitable for desktop and tablet viewing.
![image](https://user-images.githubusercontent.com/39120147/210168057-1990f6e8-7400-44be-ae73-c537b2e4cfc9.png)
I learnt some of the code from a tutorial and recreated it by scratch. I enjoyed learning how localstorage works and more and more ideas popped up in my head after learning more about it. This does not use any CSS framework for now, as I wanted to reduce how much HTML is being used to style the web app. Overall, this was a fun side project to do. More detailed README about the to do list can be found [here](https://github.com/bennygdev/2022Webprojects/tree/master/ToDoList)
<br>
# Snake-game
Second day of making a web application, but this time it is a game instead of a tool. This is a very primitive version of snake game, and it might contain errors along the way. I decided to not use any CSS framework, just very basic styling to let the functionality stand out. Basically, main functionality of the snake game is that you can use WASD or arrow keys to control the snake. Each food eaten will add a point. However, if the snake collides with its own body or collides with the edges, the game will end. That brings to the try again button where you can try again if you like. The try again button will be disabled when the game starts, but will enable itself back again once the game is over. The user can choose to switch difficulities by clicking on different buttons to select the game mode. The game is set to easy by default, meaning that if the user chooses to set the difficulty to hard, the snake will then move faster. Obviously, this is only available for desktop as WASD and arrow keys are essential into making this game work. This is my very first time making a motion game using javascript, do not expect it to run very well as it may contain numerous amount of errors, but i guess this is good enough as a starter.
![image](https://user-images.githubusercontent.com/39120147/210235017-1eb428e0-f486-41e7-b4c8-4ae9f3f1b838.png)
I've read some documentaries and tutorials on how to make a snake game in JavaScript, and made the game from scratch. I learnt how a game can be run inside canvas HTML elements and getContext in JS is mainly used for drawing objects on a canvas. I have also learnt how games on websites use specific elements and functions to run the game. More detailed README about the snake game can be found [here](https://github.com/bennygdev/2022Webprojects/tree/master/SnakeGame)
<br>
# Country-Buddy
Third day of making a web application, today I've made a country guide where you can search a country by its name and look up information about the country. This uses the REST countries api at https://restcountries.com/ and used it to display the country's information. This is my first time using an API like this and how this REST countries API work is by accessing the object and extracting certain values from an array. I decided to not use any CSS framework for this as I wanted the functionality from the JavaScript to stand out. This is available for desktop, tablet and mobile view (I put in so much code for CSS).
![image](https://user-images.githubusercontent.com/39120147/210375046-872fa07d-ee85-4149-8b5c-81449fea3b1c.png)
I read the API and explored on how to read an array from an object in JavaScript. I then printed the object to the console and read most of the keys and values and managed to extract the values from the object. I learnt how APIs can be used to make complex functionality more easily and ultimately, it saves you alot of time for example having to manually add countries, to adding cooking recipes. It was fun using an API that does wonders so easily and could be handy for future projects. More detailed README about the country buddy can be found [here](https://github.com/bennygdev/2022Webprojects/tree/master/CountryBuddy)
<br>
# Score-Keeper
Fourth and fifth day of making a web application. This took me 2 days due to me having plans that day, but I am pretty proud of this web app being done. This web app is a score keeper where you can keep track of your scores, you can put a score where you can play to, a score multiplier where you can set how many points should be added with a click of a button. It also includes where you can put your team's name and the acitivty's name, this is stored to localstorage so that when the page refreshes, the names and activity values will not be erased. Finally, there is a dark and light theme if you decide that light theme singes your eyeballs way too much. Alot of CSS is written to make the score keeper available for Desktop and Tablet view but however It might not be available for mobile view unless you tilt your device. No CSS framework is used, I used normal CSS to practice my CSS and to let the functionality stand out.
![image](https://user-images.githubusercontent.com/39120147/210730434-e707e52e-51db-4457-8734-1a78b7824ba0.png)
![image](https://user-images.githubusercontent.com/39120147/210730492-dde0fb7d-9214-4277-bd34-17fcae8b8f66.png)
I did some refactoring for the JavaScript code to tidy up and make the code more convenient. It was fun making a web application like this and might be handy if you want to track scores when doing an acitivty. I could have added a local storage function that shows the match history of everything, but that leaves it to another day. More detailed README about the score keeper can be found [here](https://github.com/bennygdev/2022Webprojects/tree/master/Score%20Keeper)
<br>
# Tic-Tac-Toe
Sixth day of making a web application, I've made a tic tac toe game to practice more of my javascript knowledge. Note that this is a primitive version of the tic tac toe game and do not expect it to run perfectly, if there are any errors please do let me know. This game has multiple functions, there is a score tracker wrapper just right below the header, where it tracks what player's turns and the scores for player 1 and 2. Below is the board, where you basically just play tic tac toe. When one of the players win, a green text will show right below the board showing who won. There is a restart button to restart the game, if a player has won before, that player gets to start first next game when the game is restarted. The reset button will reset board and along with the scores. Finally, there is a light and dark theme button at the bottom right. This does not use any CSS framework, and this web app is suitable for all Desktop, Tablet and Mobile viewing.
![image](https://user-images.githubusercontent.com/39120147/211002315-977f9db3-c22e-45b1-957d-e059e5c33057.png)
![image](https://user-images.githubusercontent.com/39120147/211002363-4fc3aa4a-58d4-4672-86fc-dae5fbf302a0.png)
Overall, developing this web application was a refresher to hone my knowledge of javascript, and it was pretty fun making it. More detailed README can be found [here](https://github.com/bennygdev/2022Webprojects/tree/master/Tic%20tac%20toe)
<br>

# Conclusion
Overall, making 5 web applications mainly written in JavaScript all from scratch was no easy task. I had to dig deeper and take time to read the documentations for some of the features needed. I could have added more projects here I have done, but i have decided to take my time developing them as I feel those projects what I liked more about and cooler to make in general. But It was fun making 5 projects in a week and I learned so much from it.
<br>
Live demo of the website showcasing projects i've made is at: https://bennygoh.tk/2022Webprojects/

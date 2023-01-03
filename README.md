# 2022 December Web Projects
This is a work in progress. I wanted to put all my small projects written in JavaScript created over the holidays and put it here. Then I will make a webpage that links to all the small projects. Still a work in progress and hopefully to push before my next school term starts.

# Table of contents
WIP
* [To-do List](#To-do-List)
* [Snake Game](#Snake-game)
* [Country Buddy](#Country-Buddy)

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
Third day of making a web application, today I made a country guide where you can search a country by its name and look up information about the country. This uses the REST countries api at https://restcountries.com/ and used it to display the country's information. This is my first time using an API like this and how this REST countries API work is by accessing the object and extracting certain values from an array. I decided to not use any CSS framework for this as I wanted the functionality from the JavaScript to stand out. This is available for desktop, tablet and mobile view (I put in so much code for CSS).
![image](https://user-images.githubusercontent.com/39120147/210375046-872fa07d-ee85-4149-8b5c-81449fea3b1c.png)
I read the API and explored on how to read an array from an object in JavaScript. I then console log the object and read most of the keys and values and managed to extract the values from the object. I learnt how APIs can be used to make complex functionality more easily and ultimately, it saves you alot of time for example having to manually add countries, to adding cooking recipes. More detailed README about the country buddy can be found [here](https://github.com/bennygdev/2022Webprojects/tree/master/CountryBuddy)

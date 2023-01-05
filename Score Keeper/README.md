# Score Keeper
Score keeper is a web application used to track scores and and with flexible controls and accessibility options. This score keeper is a very simple version of score keepers out there, as this only has basic functions for a score keeper. This took me 2 days due to me having plans that day, but I am pretty proud of this web app being done. This web app is a score keeper where you can keep track of your scores, you can put a score where you can play to, a score multiplier where you can set how many points should be added with a click of a button. It also includes where you can put your team's name and the acitivty's name, this is stored to localstorage so that when the page refreshes, the names and activity values will not be erased. Finally, there is a dark and light theme if you decide that light theme singes your eyeballs way too much. Alot of CSS is written to make the score keeper available for Desktop and Tablet view but however It might not be available for mobile view unless you tilt your device. No CSS framework is used, I used normal CSS to practice my CSS and to let the functionality stand out.
![image](https://user-images.githubusercontent.com/39120147/210732057-b64fffa3-36bd-48e6-9483-58030e4f366f.png)
![image](https://user-images.githubusercontent.com/39120147/210732063-cfffafed-03b6-4974-b048-433a7a36de7e.png)
<br>
# How to use
1. Enter your desired names in the fields below.
![image](https://user-images.githubusercontent.com/39120147/210732363-43a44b37-f691-49f3-be16-5062f31e0b85.png)
2. Enter your acitivty name that you are going to track scores for it.
![image](https://user-images.githubusercontent.com/39120147/210732527-e4996b23-839a-4f36-849b-8d0803c7f9be.png)
3. You can set the score both teams should play to. Below is an example where I entered 8 is the score to play to, when a team reaches score of 8, the score keeper will stop tracking scores afterwards.
![image](https://user-images.githubusercontent.com/39120147/210732817-683cfe41-b41a-4945-924f-f59ee154e3eb.png)
4. The winning team's name will show up if a team won.
![image](https://user-images.githubusercontent.com/39120147/210733030-28711887-4c76-4e96-bd07-c6c3103b2f63.png)
5. You can set the score multiplier to an assigned value and the when updated, the score will increment according to how much is the assigned value. For example I put the score multiplier to 2, and the score keeper will increment by 2 when the scores are updated.
![image](https://user-images.githubusercontent.com/39120147/210733269-fe0bca7c-b8bf-4cf3-a2d6-7e43b8b152f5.png)
6. You can click/tap on the add/minus buttons to add or minus points from a team. Each team has their own minus and add button controls.
![image](https://user-images.githubusercontent.com/39120147/210733637-ade969f9-afb8-46d7-8df7-904a57ea031d.png)
7. Restart the game if the game has ended and if the add and minus buttons are disabled.
![image](https://user-images.githubusercontent.com/39120147/210733456-30b88ff3-7069-4182-a183-388cbcafdf55.png)
8. On the top right, you can change between light and dark mode, if you think either modes are too uncomfortable you can go ahead and click on the light/dark theme button to change themes.
![image](https://user-images.githubusercontent.com/39120147/210733953-74cc7363-1d4b-42e7-add6-943df9b8c0f5.png)
<br>

# Conclusion

I did some refactoring for the JavaScript code to tidy up and make the code more convenient. It was fun making a web application like this and might be handy if you want to track scores when doing an acitivty. I could have added a local storage function that shows the match history of everything, but that leaves it to another day.

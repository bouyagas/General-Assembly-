#Kanye's New Visualizer#
##A JQuery Adventure##

![](https://i.giphy.com/CFZ37fupHxSrm.gif)

"Yo mang, good to see you again", a giddy Kanye says, his zebra fur joggers glistening with ruby rhinestones.  "Thanks so much for helping me with my code on Monday.  Look, I got a new project for you".  He goes on to explain his new project.  Kanye is trying to elevate his new album to the next level with a website that his listeners can interact with while the tracks play.  It's really weird, but he swears "it's gonna be the next Monet, but for music". 


###The Rules###

* Use the provided html, css, and JS pages.  You can use the html and css pages to reference the properties of each element, but don't change anything in these files.  __All answers should be done in the JS file__.
* You're hooked up with JQuery.  Use it!
* All functions should log a message to the console stating what the function did.
* Feel free to log anything else that is helpful in solving the problems!


###Reference###
* [JQuery Event Listeners](https://api.jquery.com/category/events/mouse-events/)   << HELPFUL


###Kanye's Specs###


1.  When you hover over box 1, box 2's height is set to 200px.
2.  Hovering over box 2 makes box 1's height 20% smaller (in other words, it's new height is 80% of what it was).
3.  Clicking on box 1 makes its _own_ height 20% bigger.
4.  Make a super powerful click on box 1!  
  * The action of clicking _down_ on box 1 makes box 1 turn 'navy' and box 2 turn 'maroon'. 
  * The action of _releasing_ that __same click__ makes box 1's corners round.
5. Modify the hover function from question 2 such that every 5th hover will cause the height of box 1 to double! For example:
  * 1st time the mouse goes over, the box gets 20% shorter. 
  * 2nd time the mouse goes over, it shrinks another 20%. 
  * 3th and 4th time, shrinks another 20% each.
  * 5th time, the height doubles.
6. Add a new event listener to box 2.  If the user double clicks box 2 three times, the box consumes the entire screen.  Keep in mind that you have to pause between each double click or the browser thinks you are just single clicking a bunch of times.

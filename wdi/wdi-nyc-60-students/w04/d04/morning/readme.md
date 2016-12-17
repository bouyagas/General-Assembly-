# Callback to Mars!

![Mars Baby](https://i.giphy.com/SXUazoROA0l1K.gif)

### Topics

- prompt()
- setTimeout()
- setInterval()
- jQuery DOM manipulation

### Part 1 - Buttons, jQuery, and setTimeout
Navigate into the `part1` folder and open `starter.html` in a browser. Notice three buttons: "Name button!", "Count button!", and "Scroll button!". We're going to be creating `event listeners` for each button that will perform various tasks. Write your solutions in `script.js`.

##### Name button!
When `Name button!` is clicked, prompt the user for an input with the message "Hey what does this button say?". When the user enters the input it should change the text on the button to the user's input. If you need a refresher on what `prompt` is and how to use it, check out this [article](http://www.w3schools.com/jsref/met_win_prompt.asp).

##### Count button!
When `Count button!` is clicked, prompt the user for an input (a number) with the message "Enter the number of seconds to wait before I alert 'DONE!'". Then write a function that waits that many seconds before alerting 'DONE!'.

	Hint: prompt() returns a string
	Make sure the input is converted to a number

##### Scroll button!
When `Scroll button!` is clicked, prompt the user for an input (a number) with the message "How many pixels should I scroll down?". Make sure the input is a number and the function scrolls that many pixels down.

### Part 2 - Mission to Mars

SpaceX founder Elon Musk has ambitious plans to transport people to Mars and even build a city on the Red Planet. Looks like Mars is the new, new frontier and if WDI is going to beat Elon Musk there we better start building our rocket ship now!

##### Relevant Files
Work in the `part2` folder
- `mars.html`
- `css/style.css`
- `js/scroll.js`
- `js/launch.js`

##### MISSION:

When `mars.html` is opened in a browser, it should automatically scroll all the way down to the bottom of the page.
When the `GO!` button is clicked, the user should be prompted for three questions.
1. "This is mission control: Please report the current temperature in fahrenheit."
2. "Please report the current fuel percentage."
3. "Please report the password!"

Your script file should then check if `current temperature` is less than or equal to `200`, the `fuel percentage` greater than `60`, and the password entered is `"fizzbuzz"`.

If all three conditions are met, `alert` Houston that "The rocket ship is ready to launch! Start the countdown!!!" and start the countdown. The countdown should change the text inside `<div id='count'>` to reflect the an actual countdown. Once the count reaches 0, scroll the page to the top so the rocket can reach mars.

##### SETUP:

Provide your solution in the `launch.js` file. `mars.html` and `style.css` are provided for you and all required JavaScript files are already linked, including `jQuery`. In order to make our rocket take off, you will be creating two functions.

```javascript
function buttonClickHandler() {
	// Attach a click event handler to the GO! button with id #
	// Prompt the user three times for current tempature in F, current fuel percentage, and the password
	// If temp is less than or equal to 200, the fuel is greater than 60, and the password is 'fizzbuzz', alert the User of an iminent launch and initiate countdown()
}
function countdown() {
	// Use setInterval or setTimeout to create a countdown that starts at 10
	// Update the div#launch to reflect the current count
	// When the countdown reaches 0, use the 'scrollTo' function to launch the rocket
}
```

##### Hints:

When the DOM is loaded, scroll to the bottom of the page with
```javascript
window.scrollBy(0, 20000);
```

The function `scrollTo` is provided for you in `scroll.js`. Use it to scroll up to the top of the page when the countdown reaches 0.

```javascript
scrollTo($('body'), 0, 10000);
```

#### Finished early? Bonus!

Without looking at `scroll.js`, try commenting out the link to `scroll.js` in `mars.html` and writing your own `scrollTo` function in `launch.js` that scrolls the Rocket Ship to the top of the page.

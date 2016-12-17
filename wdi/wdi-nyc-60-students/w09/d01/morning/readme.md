# More Clocks!!!!

![](https://i.giphy.com/l0MYOUI5XfRk4LLWM.gif)

Today you are going to build a clock with working hour, minute, and second hands!

This problem is TOUGH! Start by planning! Draw a clock. Break down the problem. What are the moving pieces? What math is involved? Work with a friend!

### Step 1
- Check out the starter code that's been provided in `index.html` and `css/styles.css`. You do not need to change anything here, but get familiar with the codebase.
- In `clock.js`, define 3 variables and grab the associated **element** from the **DOM** (feel free to use **vanilla JS** or **jQuery**):
- `minuteHand`
- `secondHand`
- `hourHand`

### Step 2: Second Hand
- Using `setInterval` and jQuery/vanilla JS, make the second hand make a full rotation in 60 seconds.
- **HINT:** Try manipulating the CSS attribute `transform: rotate`.
- http://www.w3schools.com/cssref/css3_pr_transform.asp

### Step 3: Minute Hand
- Make the minute hand make a full rotation in 1 hour
- You can decrease the length of each `setInterval` time if you want to see your clock move more quickly.

### Step 4: Hour Hand
- Make the hour hand make a full rotation in 12 hours
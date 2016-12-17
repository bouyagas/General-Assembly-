# Hamburger button!

![](https://i.giphy.com/xTiTnwj1LUAw0RAfiU.gif)

Today we are going to practice making a hamburger button and a vertical navigation bar.

### Getting started

You are provided with some starter code: `index.html`, `script.js`, and `style.css`. There are comments throughout giving you guidance about what to do.

### Make yours look like mine

If you get your site to look like mine and there is still time left, there are two bonuses that will make your site look 37 times as good:

1. [Using CSS3 transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions), make the nav bar slide out smoothly, rather than it lunging out aggressively the way it does now. Add transition time function to the `#content-wrapper {}` section of your CSS file.

2. [Using the transform property of CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), animate the hamburger button to look like an 'x' once it's been clicked. You should:

- add the transition timing to the `#hamburger-button > span {}` section
- create new CSS selector sections that look a little like: `#hamburger-button.open /* child selector here */ {}` to house the transformations
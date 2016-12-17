
#DOM
> Is the Document Object Model.

- Is is the interface between the HTML and JavaScript.
- It provides a structured representation of the document as a tree.
- Each element in the structure of the HTML, is represented as a Node in the document object. (ElementNode or TextNode)
- Nodes are objects. They possess properties and methods.

# Updating the style
- `node.style.backgroundColor = 'red'`
- `node.style.fontSize = '2em'`

# traversing
```js
document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.fontSize = '29px';
```


#Setting & getting attributes
- class:
`node.setAttribute('class', 'bug')`
`node.getAttribute('class')`
- id:
`node.setAttribute('id', 'hero')`
`node.getAttribute('id')`
- value:
`inputNode.setAttribute('value', '1000')`
`node.getAttribute('value')`

#DOM SELECTING AND MODIFYING

- Other ways **Try these in a website, the onion?**
`getElementsByTagName`
`getElementById`
`getElementsByName`
`getElementsByClassName`
`querySelector`
`querySelectorAll`

- innerHTML: `document.body.innerHTML`
  - it could be a string: `Like when you smell pizza, but you are not allowed to have it`
  - or html: `<h1>Be bold. Just. Do. It.</h1>`


## CREATE AND APPEND
- ElementNode: `document.createElement(tag)`
```js
var mainDiv = document.createElement('div');
mainDiv.style.backgroundColor = 'black';
mainDiv.style.fontSize = '2em';
mainDiv.style.color = 'white';
console.log(mainDiv);
```

- TextNode: `document.createTextNode()`
```js
var title = document.createTextNode('Pinto Beans Soup');
console.log(title);
```

- appendChild: `parentElem.appendChild(elem)`
```js
mainDiv.appendChild(title);
```

- insertBefore: `parentElem.insertBefore(newNode, referenceNode)`
```js
var h1 = document.createElement('h1');
h1.innerHTML = 'Hello!';
mainDiv.insertBefore(h1, title);
```
- CODE https://jsfiddle.net/rapala61/f938qcgg/1/



# REMOVING NODES
- removeChild: `parentElem.removeChild(elem)`

- replaceChild: `parentElem.replaceChild(newNode, nodeToBeRemoved)`


# activity _15m_
- Go to `https://generalassemb.ly/`.
- Perform the following tasks:
  - Select the footer and change its background color to pink.
  - Select the first navigational link in the header and change its text to the name of your **high school**.
  - through the console, create a new `h1` element. Modify its contents to display your **favorite movie title**. Append the new `h1` to the header section.
  - set the body of the page to have a font size of 30px
  - get the amount of children contained in the header
  - replace the GA logo with a textNode with the destination of your **last vacation as the content**.

# Event listeners

## the load event   

    - W3's megalist of HTML DOM Node Properties & Methods
      - http://www.w3schools.com/jsref/dom_obj_all.asp
    - MDN's even longer megalist of standard Javascript events
      - https://developer.mozilla.org/en-US/docs/Web/Events

    - THE load event and how the code is added to the page.
    ```js
    window.onload = function() {
      // code to run
    };

    window.addEventListener('load', function() {
        // code to run
    });

    // IE < 9
    window.attachEvent('onload', function() {
        // code to run
    });
    ```
    - give example of how it is necessary.
    - USE _events/index.html_



# Take 5 minutes to play with the following commands, create your own!
  ```js

    // 1
    document.querySelector('body').addEventListener('click', function() {
      document.querySelector('body').style.transform = "rotateZ(" +
        (Math.floor(Math.random() * 360)+1) + "deg)";
    });

    // 2
    document.querySelector('body').addEventListener('click', function() {
      p = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2014/10/womp-womp.mp3?_=1');
      p.play();
    });
  ```

# Examples of event listeners:
- Use JSFiddle to create a box that changes background color when i click it.
https://jsfiddle.net/rapala61/5eycmg13/1/
- Add event listener to squares
https://jsfiddle.net/rapala61/f938qcgg/2/

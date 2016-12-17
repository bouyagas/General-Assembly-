# Flexbox lesson


### Lesson Objectives:
- Explain the concept of **responsive design**
- Explain how **flexbox** is a module, not simply a single property
- Name the two main HTML components when building a flexbox
- Use a few basic flexbox properties


---


### What is **flexbox** & when should I use it?
- A collection of CSS properties, not a single property
- Use cases:
  - Elements need to be evenly spaced inside a container, but you don't know how big the container or the elements inside will be, or how many elements you'll have.
  - Center an element horizontally **and** vertically. Very hard to do in plain CSS.


### Let's whiteboard out some useful examples
- Single child centered vert. and horiz.
- Three children centered vert., then centered horiz., then aligned in a column all the way to the left inside the parent.
- A 3x3 grid of 9 evenly spaced children.



---


### Two main components of a flexbox: parent and children elements
Parent element:
- Only one parent element
- Known as the `flex container`

Children elements:
- Can be one or more child elements
- Known as `flex items`


Flexbox is a **collection** of CSS properties. Some properties apply only to the parent and some to the children. There are **many, many** properties. Let's take a look at the most important ones.


### The most important properties go on the parent container
You can have a fully functioning flexbox by putting flexbox properties only on the parent and none on the children. Let's take a look.


```css
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```


**display**:
- This is the most important of all. It signifies that the parent container is now a flexbox and all of its children will act accordingly.


**flex-direction**:
- This establishes the **main axis** that your child elements will follow. It will either be row or column.


**justify-content**:
- This specifies how child elements are laid out along the **main** axis, which is either horizontal or vertical, depending on what you chose in the previous property.


**align-items**:
- This specifies how child elements are laid out along the **cross** axis. You can think of this as the "justify-content" for the cross axis.


---


**Exercise**: Create blank html and css files. Create a flexbox that is 400px x 400px with a single child that is centered horizontally and vertically.

Then, when you're done, add 4 more children. Center them horizontally first, then vertically.  

Use this lesson and this [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) article for guidance.


---


### Advanced flexbox properties


```css
/* parent: */
.flex-container {
  flex-wrap: wrap;
}

/* children: */
.flex-item {
  flex-basis: 20%;
  align-self: flex-end;
}
```


**flex-wrap**: Specifies how children should "wrap" when there are too many to fit on one line. By default, all children squeeze to fit on one line, no matter how many there are.  


**flex-basis**: Specifies the default size of the children. I like to use percentages. See what happens with 100%, 30%, 10%, etc.


**align-self**: Pulls one child out of the flow and overrides what was defined in `align-items` on the parent. For instance, if all children are set to `flex-start` on the cross axis, you can choose a single child to be `align-self: flex-end`.


---


**Exercise**: flexbox froggy. Focus on which properties go on the parent vs. children.


---


### Other properties for future research:
Parent:
- flex-flow
- align-content

Children:
- order
- flex-grow
- flex-shrink
- flex


---


### Resources
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- http://flexboxfroggy.com/
- http://flexboxgrid.com/
- https://premium.wpmudev.org/blog/css-flexbox/
```

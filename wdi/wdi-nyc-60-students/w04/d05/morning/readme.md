	# Euler? Euler?

![Ben Stein](https://allthingsd.com/files/2012/04/bueller.jpg)

As we've discussed before, a lot of job interviews will include "Code Challenges" to test your ability to think like a programmer. A lot of these are mathematical and challenge you to think computationally to solve a theorem. [Project Eueler](http://projecteuler.net) is an online repository of computer science based math problems, and many code challenges will resemble these.


## Solve the Following:

Using JavaScript...

### Factorials

Not actually from Project Euler, but to get you in the math mindset. A factorial takes a number and then multiplies it by every number between itself and 1. For example:

```math
5! = 5 * 4 * 3 * 2 *1 = 120

7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 =
```

Write a method ```factorial``` such that you can give it any number and it will give you the factorial. For example:

```JavaScript
factorial 5
# logs 120
```


### Project Euler #1 Multiples of 3 and 5

From Project Euler:

```text
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
```

You should write a method that takes a number as an input and returns the sum of all multiples of 3 and 5 below that number. For example:


```JavaScript
multiples 10
# logs 23
```

## BONUS

### Project Euler #6 Sum Square Difference


The sum of the squares of the first ten natural numbers is,
```
1^2 + 2^2 + ... + 10^2 = 385
```
The square of the sum of the first ten natural numbers is,
```
(1 + 2 + ... + 10)^2 = 3025
```
Hence the difference between the square of the sums of the first ten natural numbers and the sum of the squares is
```
 3025 − 385 = 2640.
```
Find the difference between the square of the sums of the first one hundred natural numbers and the sum of the squares.

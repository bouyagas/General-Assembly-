console.log('starter.js connected');

// Part 1 - Arenagrams
// const areAnagrams = (wordOne, wordTwo) => {

// };

// const areAnagrams = (wordOne, wordTwo) => {
//   let one = wordOne.split('').sort().join('');
//   let two = wordTwo.split('').sort().join('');
//   if (one === two) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };
const areAnagrams = (wordOne, wordTwo) => {

    if (wordOne.length !== wordTwo.length) {
        return false;
    }

    var sortStr1 = wordOne.split('').sort().join('');
    var sortStr2 = wordTwo.split('').sort().join('');

    return (sortStr1 === sortStr2);
};


console.log(areAnagrams('team', 'meat'));
console.log(areAnagrams('mare', 'rare'));
console.log(areAnagrams('reserve', 'reverse'));
console.log(areAnagrams('ripples', 'slipper'));




// Part 1 - AreAnagrams ====================
const areAnagrams = (wordOne, wordTwo) => {
  if (wordOne.length != wordTwo.length) {
    return false;
  } else {
    wordOne = wordOne.split('');
    wordTwo = wordTwo.split('');
    for (let i = wordOne.length - 1; i >= 0; i--) {
      if (wordTwo.indexOf(wordOne[i]) > -1) {
        wordTwo.splice(wordTwo.indexOf(wordOne[i]),1);
        wordOne.pop();
      } else {
        return false;
      }
    }
    return true;
  }
};

const areAnagramsRegExp = (wordOne, wordTwo) => {
  if (wordOne.length != wordTwo.length) {
    return false;
  } else {
    for (let i = wordOne.length - 1; i >= 0; i--) {
      let current = new RegExp(wordOne[i]);
      if (wordTwo.indexOf(wordOne[i]) > -1) {
        wordTwo = wordTwo.replace(current, '');
        wordOne = wordOne.substr(0, wordOne.length - 1);
      } else {
        return false;
      }
    }
    return true;
  }
};


// Part 2 - Squeeze ====================
const squeeze = (word) => {
  let wordArray = word.split(''),
      counter = 0,
      current;
  for (let i = wordArray.length - 1; i >= 0; i--) {
    if (current != wordArray[i]) {
      if (counter > 0) {
        wordArray.splice(i + 1, counter);
      }
      current = wordArray[i];
      counter = 0;
    } else {
      counter++;
    }
  }
  return wordArray.join('');
};


// Part 3 - ReplaceChar ====================

// Manual - Split into array
const replaceChar = (word, char, replacementChar) => {
  let wordArray = word.split('');
  wordArray.forEach((letter, i) => {
    if (letter === char) {
      wordArray[i] = replacementChar;
    }
  });
  return wordArray.join('');
};

// This doesn't work because JavaScript Strings are immutable
const replaceChar2 = (word, char, replacementChar) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      word[i] = replacementChar;
    }
  }
  return word;
};

// RegExp
const replaceChar3 = (word, char, replacementChar) => {
  let R = new RegExp(char, 'g');
  return word.replace(R, replacementChar);
};


// Part 4 - StripRight ====================

// Manual, looping method
const stripRight = word => {
  while (word[word.length - 1] === ' ') {
    word = word.substr(0, word.length - 1);
  }
  return word;
};

// Using built-in String method, trim()
const stripRight2 = word => word.trim();

// Using RegExp, I'm pretty sure trim() is just an alias of this RegExp
const stripRight3 = word => word.replace(/\s+$/g, '');


// Part 5 - Strip ====================

// Manual, double loops
const strip = word => {
  while (word[0] === ' ') {
    word = word.substr(1, word.length);
  }
  while (word[word.length - 1] === ' ') {
    word = word.substr(0, word.length - 1);
  }
  return word;
}

// RegExp
const strip2 = word => word.replace(/^\s+|\s+$/g,'');
=======
 let letters = ""
 if (wordOne.length == wordTwo.length) {
   for(let i = 0; i<wordOne.length; i++){

     if (wordTwo.includes(wordOne[i])) {
       letters+=wordOne[i]
     }
     else {
       return console.log('not anagrams')
     }

   }
   if (letters.length==wordTwo.length){
       return console.log('they are anagrams!')
     }
 }
 else {
   return console.log('not anagrams')
 }
};


areAnagrams('team', 'meat');


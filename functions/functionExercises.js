
//makeline(size)

function makeLine(size, char = '#') {
    let line='';
    for (let i=0; i < size ; i++) {
        line += char;
    }
    return line;
}
console.log("The output of function makeline is:")
console.log(makeLine(5));
console.log("The output of function makeline by passing a character parameter is:")
console.log(makeLine(5, '*'));




//makeSquare(size)

function makeSquare(size, char = '#') {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size, char) + '\n';
    }
    return square.slice(0,-1);
}

console.log("The output of function makesquare is:")
console.log(makeSquare(5));
console.log("The output of function makesquare by passing a character is:")
console.log(makeSquare(5, '*'));




//makeRectangle(width, height)

function makeRectangle(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width, char) + '\n');
    }
    return rectangle.slice(0,-1); 
  }
  console.log("The output of function makeRectangle is:")
  console.log(makeRectangle(5, 3));
  console.log("The output of function makeRectangle by passing a character is:")
  console.log(makeRectangle(5, 3, '*'));


  //makeDownwardStairs(height)

  function makeDownwardStairs(height, char = '#') {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1, char) + '\n');
    }
    return stairs.slice(0, -1);
  }
  console.log("The output of function makeDownwarsStairs is:")
  console.log(makeDownwardStairs(5));
  console.log("The output of function makeDownwarsStairs by passing a character is:")
  console.log(makeDownwardStairs(5, '*'));

  
  //makeSpaceLine(numSpaces, numChars)

function makeSpaceLine(numSpaces, numChars, char = '#') {
    let line = '';
    line = ' '.repeat(numSpaces) + char.repeat(numChars) + ' '.repeat(numSpaces);
    return line;
}
console.log("The output of function makeSpaceLine is:")
console.log(makeSpaceLine(3, 5));
console.log("The output of function makeSpaceLine by passing a character is:")
console.log(makeSpaceLine(3, 5, '*'));


//makeIsoscelesTriangle(height)

function makeIsoscelesTriangle(height, char = '#') {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n');
    }
    return triangle.slice(0, -1);
}
console.log("The output of function makeIsoscelesTriangle is:")
console.log(makeIsoscelesTriangle(5));
console.log("The output of function makeIsoscelesTriangle by passing a character is:")
console.log(makeIsoscelesTriangle(5, '*'));

 
  //makeDiamond(height)

  

function makeDiamond(height, char = '#') {
    let diamond = '';
    for (let i = 0; i < height; i++) {
      diamond += (makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n');
    }
    
    for (let i = height; i > 0; i--) {
        diamond += (makeSpaceLine(height - i, 2*i - 1, char) + '\n');
    }
    
    return diamond.slice(0, -1);
}

console.log("The output for function makeDiamond is:");
console.log(makeDiamond(5));
console.log("The output for function makeDiamond by passing a character is:");
console.log(makeDiamond(5, '*'));

//make triangle and reverse


function makeTriangle(height, char = '#') {
    let triangle = '';
    let reversed = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n');
    }

    for (let i = 0; i < height; i++) {
        reversed = triangle[i] + reversed;
    }

    return triangle.slice(0, -1);
}
console.log("The output of function makeTriangle is:")
console.log(makeTriangle(5));
console.log("The output of function makeTriangle by passing a character is:")
console.log(makeTriangle(5, '*'));
// ASSESSMENT 3: Coding Practical Questions

// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// function will take in a number 10 times or takes in a single number and keeps reiterating it?
// each number will be added to the last
// will return an mapped array
// 0 + 1 = 1, 1+1 = 2

// function will take in a num
const sequence = (nums) => {
  // let array = array of 1, 1
  let fibArray = [1, 1]
  //   loop starting at 1 and stops just before whatever nums -1 and reiterates by 1 every time
  for (let i = 1; i < nums - 1; i++) {
    // arryay is pushed out as two arrays added togther
    // 1        +       1
    fibArray.push(fibArray[i] + fibArray[i - 1])
  }
  return fibArray
}
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// console.log(sequence(fibArray))
console.log(sequence(10))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// function will take in array and .filter() the numbers least to greatest

const negToPositive = (array) => {
  let filteredArray = array.filter((value) => {
    return typeof value === "number" && value % 2 !== 0
  })
  return filteredArray.sort(function (a, b) {
    return a - b
  })
}
console.log(negToPositive(fullArr1))
console.log(negToPositive(fullArr2))
// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// takes in a string
// create a function that accepts a string as an argument
const mLettersOnly = (str) => {
  // create variable that holds the string argument converted to an arra
  let strArray = str.split("")
  // create variable that holds the middle
  let middle = strArray[Math.floor(strArray.length / 2)]

  // if string has an even number of characters
  if (strArray.length % 2 === 0) {
    // create variable to hold the index of the first of the middle two numbers
    let fTwoMiddle = strArray.length / 2 - 1
    // fTwoMiddle = "o"
    // return two middle letters
    return strArray[fTwoMiddle] + middle
    // "o" + "c"
  } else {
    // if string has an odd number of characters return middle letter only
    return middle
  }
}
console.log(mLettersOnly(middleLetters1))
console.log(mLettersOnly(middleLetters2))

//
// if even number letter it will make it an odd number of indexes
// return middle two indexed letters
// if odd number of letter it will make it an even number of indexes
// return one middle indexed letter

// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)

//class holds the data and behavior
class Sphere {
  //constuctor holds radius as an argument
  constructor(radius) {
    this.radius = radius
  }
  // calculator does the math 4πr^2 (four * pi * radi squared)
  areaCalc() {
    return 4 * 3.14159 * (this.radius * this.radius)
  }
}
//create 3 variables of sphere
const sphere1 = new Sphere(3) // output is 113.09724
const sphere2 = new Sphere(10) // output is 1256636
const sphere3 = new Sphere(18) // output is 4071.5006399999997

console.log(sphere1.areaCalc())
console.log(sphere2.areaCalc())
console.log(sphere3.areaCalc())
// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// create function that takes array as an argument
const accumArray = (array) => {
  // create a variable to hold the result of the addition
  let sum = 0
  // loop through array and add result to new value
  let mappedArray = array.map((value) => {
    return (sum = sum + value)
  })
  // return the array of the accumilated sum
  return mappedArray
}
console.log(accumArray(numbersToAdd1))
console.log(accumArray(numbersToAdd2))
console.log(accumArray(numbersToAdd3))

// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"
  const div3 = (num1, num2, num3) => {
    if (num1 % 3 === 0){
      return "15 is divisble by three"
    } else {
      return "15 is not divisble by three"
    }
    if (num2 % 3 === 0){
      return "0 is divisble by three"
    } else {
      return "0is not divisble by three"
    }
    if (num3 % 3 === 0){
      return "-7 is divisble by three"
    } else {
      return "-7 is not divisble by three"
    }

  }
console.log(div3(num1));



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

 const caps = (randomNouns) => {
   for randomNouns (let i = 0, i < newArr.length, i++){
     let newArr = [newArr].charAt(0).toUpperCase()


 }
 return newArr
console.log(newArr)




// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const numbers = (array) => {
  let newArr = arra

}





// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVow =("") {
var vowTestArr =  vowelTester1.split
  for newArr (let i = 0; i < vowelTester1.length, i++){
    char c = vowelTester1.charAt(i)
    if (isVowel(c))
      return vowelTester1.indexOf(c)
  }

}
console.log(firstVow(vowelTester1))
// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const toonArr = (toonimals){

}



// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

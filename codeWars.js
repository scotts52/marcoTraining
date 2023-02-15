
// /*Abbreviate a Two Word Name*/

// let name = ('scott stevenson')

// function abbrevName(name){
//     let [first, last] = name.split(' ');
//     return(first[0].toUpperCase() + '.' + last[0].toUpperCase());
// }

// /*Is n divisible by x and y?*/

// function isDivisible(n, x, y) {
//     let divisibleSum= ((n/x) + (n/y));
//     if (Number.isInteger(divisibleSum)){
//     return true;
//     }
//     return false;
// }

// or

// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y ===0;
// // }

// /*Convert a String to a Number!*/

// const stringToNumber = function(str){
//     return parseInt(str);
//   }

// /*Convert number to reversed array of digits*/

// function digitize(n) {
//     let myFunc = num=> Number(num);
//     var intArr = Array.from(String(n), myFunc).reverse();
//   return (intArr);
// }

// /*Beginner - Lost Without a Map*/

// function maps(x){
//     return x.map(number => number * 2)
// }

// /*you're a square!*/

// var isSquare = function(n){
//     if(n >= 0 && Math.sqrt(n) % 1 === 0){
//         return true
//     }
//     else return false; 
//   }

// /*Jaden Casing Strings*/

// String.prototype.toJadenCase = function () {
//     return this
//     .split(' ')
//     .map(word >= word[0].toUpperCase() + word.slice(1))
//     .join(' ')
//   };

// /* multiples of 3 or 5*/

// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }

// /* Even or Odd*/ 

// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
//   }

// /* Vowel Count */

// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++;
//         }
//       }
//     }
    
//     return vowelsCount;
//   }

// /* Disemvowel Trolls */

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

// /* Digit*Digit */

// function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }

// /* Stop gninnipS My sdroW! */

// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

// /* multiply*/

// multiply = function (a, b) {
//     return a * b;
//   }

// /* You're a square*/

// var isSquare = function(n){
//     return Number.isInteger(Math.sqrt(n));
//   }

// /* Sum of positive*/

// function positiveSum(arr) {
//     var total = 0;    
//     for (i = 0; i < arr.length; i++) {    
//       if (arr[i] > 0) {                   
//         total += arr[i];                  
//       }
//     }
//     return total;                         
//   }

// /* return Negative */

// function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }

// /* Reversed Strings */

// function solution(str){
//     return str.split('').reverse().join('');  
//   }

// /* Convert boolean values to strings 'Yes' or 'No' */

// function boolToWord( bool ){
//     if (bool) {
//       return 'Yes';
//     } else {
//       return 'No';
//     }
//   }

// /*convert number to a String */

// function numberToString(num) {
//     return num.toString();
//   }

// /* Opposite Number */

// function opposite(number) {
//     return(-number);
//   }

// /* Remove First and Last Character */

// function removeChar(str) {
//     return str.slice(1, -1);
//   }

// /* String Repeat */

// function repeatStr (n, s) {
//     var str="";
//     for(var i=0; i < n; i++)
//       str+=s;
//       return str;
//     }

// /* Square(n) Sum*/

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

// /* Grasshopper - Summation*/

// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }
    
//     return result;
//   }

// /* Remove String spaces */

// function noSpace(x){return x.split(' ').join('')}

// /* counting Sheep */

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }

// /* Keep Hydrated */

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }

// /* Century FromYear */

// const century = year => Math.ceil(year/100)

// /* Basic Mathematical Operations */

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

// /* Abbreviate a Two Word Name */

// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }

// /* Is n divisible by x and y? */

// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0
//   }

// /* Convert a String to a Number! */

// var stringToNumber = function(str){
//     return parseInt(str);
//   }

// /* Convert number to reversed array of digits*/

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }

// /* Beginner - Lost Without a Map */

//   function maps(x){
//     return x.map(n => n * 2);
//   }

// /* Returning Strings*/

// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
//   }

// checking for a commit


/* The Hashtag Generator */
const str = "code" + " ".repeat(140) + "wars"

function generateHashtag (str) {
    let trimStr = str.trim()
    if (!trimStr) return false;
    let capStr = trimStr.split(' ')
   
    for (let i = 0; i < capStr.length; i++) {
        if (capStr[i] !== ' ' || capStr[i] !== '')  
        capStr[i] = capStr[i][0].toUpperCase() + capStr[i].substr(1);
    }
    console.log(capStr);

    let hashWord =capStr.join('')

    console.log(hashWord);

    if (hashWord.length > 139) {
    return false;
    }
    else return ('#' + hashWord);
}

console.log(generateHashtag(str));
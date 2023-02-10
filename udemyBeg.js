// // let a = 'red';
// // let b = 'blue';

// // let c = a;
// // a = b;
// // b = c;

// // // If Else Statement
// // let hour = 10

// // if (hour >= 6 && hour < 12)
// // console.log('Good Morning');
// // else if (hour >= 12 && hour < 18)
// // console.log('Good Afternoon');
// // else 
// // console.log('Good Evening');

// // // Let Switch Break

// // let role = 'guest';

// // switch (role) {
// //     case 'guest':
// //         console.log('Guest User');
// //         break;

// //     case 'moderator':
// //         console.log('Moderator User');
// //         break;
// //     default:
// //         console.log('Unkown User');
// // }

// // if (role === 'guest') console.log('Guest');
// // else if (role === 'moderator') console.log('Moderator');
// // else console.log('Unkown User');


// // // Loops

// // for (let i = 0; i <= 5; i++){
// //     console.log('Hello World');
// // }
// //     if (i % 2 !== 0) console.log(i);

// // // do-while

// // let i = 0;
// // do{
// //     iif (i % 2 !== 0) console.log(i);
// //     i++;
// // } while (condition) 

// // // for in loop

// // const person = {
// //     name: 'Mosh',
// //     age: 30
// // };

// // for (let key in person) 
// //     console.log(key, person[key]);

// //     const colors = ['red', 'white', 'blue'];


// //     let i =0;
// //     while (i <= 10) {
// //         if (i === 5) break;
// //         if (i % 2 === 0) {
// //             i++;
// //             continue;
// //         }

// //         console.log(i);
// //         i++;
// //     }

// //     // Max of 2 numbers

// //     let number = max(3,3);
// //     console.log(number);

// //     function name(a,b) {
// //         return (a > b) ? a : b;
// //     }

// // // FizzBuzz Exercise

// // const output = fizzBuzz(false);
// // console.log(output);

// // function fizzBuzz(input) {
// //     if (input % 3 === 0)
// //     return 'Fizz';

// //     if (input % 5 === 0)
// //     return 'Buzz';

// //     if ((input % 3 === 0) && input % 5 === 0)
// //     return 'FizzBuzz';
    
// //     return input;
// // }


// // //Demerit Points

// // // Speed Limit = 70
// // // 5 -> 1 Point
// // // Math.floor (1.3)
// // // 12 points -> suspended

// // checkSpeed(180);

// // function checkSpeed(speed) {
// //     let demeritPoints = Math.floor(speed)
// //     if (demeritPoints > 75) {
// //         return '0 points';
// //     }
// //     else if (demeritPoints >= 75 && demeritPoints <= 79) {
// //         return '1 points';
// //     }
// //     else if (demeritPoints >= 80 && demeritPoints <= 84) {
// //         return '2 points';
// //     }
// //     else if (demeritPoints >= 85 && demeritPoints <= 89) {
// //         return '3 points';
// //     }
// //     else if (demeritPoints >= 90 && demeritPoints <= 94) {
// //         return '4 points';
// //     }
// //     else if (demeritPoints >= 100 && demeritPoints <= 104) {
// //         return '5 points';
// //     }
// //     else if (demeritPoints >= 105 && demeritPoints <= 109) {
// //         return '6 points';
// //     }
// //     else if (demeritPoints >= 110 && demeritPoints <= 114) {
// //         return '7 points';
// //     }
// //     else if (demeritPoints >= 115 && demeritPoints <= 119) {
// //         return '8 points';
// //     }
// //     else if (demeritPoints >= 120 && demeritPoints <= 124) {
// //         return '9 points';
// //     }
// //     else if (demeritPoints >= 125 && demeritPoints <= 129) {
// //         return '10 points';
// //     }
// //     else if (demeritPoints >= 130 && demeritPoints <= 134) {
// //         return '11 points';
// //     }
// //     else (demeritPoints >= 135) 
// //         return '12 points (susoended)';
    
// // }

// // //Demerit Points

// // // Speed Limit = 70
// // // 5 -> 1 Point
// // // Math.floor (1.3)
// // // 12 points -> suspended

// // function checkSpeed(speed) {
// //     const speedLimit = 70;
// //     const kmPerPoint = 5;

// //     if (speed < speedLimit)
// //     console.log('Ok');
// //     else {
// //         const points = Math.floor((speed - speedLimit) / kmPerPoint);
// //         if (points >= 12)
// //         console.log('license suspended');
// //         else
// //         console.log('Points', points);
// //     }
// // }

// // //  Even and odd
// // showNumbers(10)

// // function showNumbers(limit) {
// //     if (number % 2 ===0)
// //       return "Even"
  
// //   else
// //     return "Odd"
// //   }

// // // Exercise- String Properties 
// // const movie = {
// //     title: 'a',
// //     releaseYear: 2018,
// //     rating: 4.5,
// //     director: 'b'
// // };

// // showProperties(movie);

// // function showProperties(obj) {
// //     for (let key in obj) {
// //         if (typeof obj[key] === 'string')
// //         console.log(key, obj[key]);
// //     }
// // }

// // // Exercise- Sum of Multiples 3 and 5

// // console.log(sum(10));

// // function sum(limit) {
// //     let sum = 0;

// //     for (let i = 0; i <= limit; i++) 
// //         if (i % 3 === 0 || i % 5 === 0)
// //             sum += i;

// //     return sum;
// // }

// // // Exercise- Grade 

// // function calculateGrade(marks) {
// //     const average = calculaeAverage(marks);
// //     if (average < 60) return 'F';
// //     if (average < 70) return 'D';
// //     if (average < 80) return 'C';
// //     if (average < 90) return 'B';
// //     return 'A'
// //     }

// // function calculateAverage(array) {
// //     let sum = 0;
// //     for (let value of array)
// //     sum += value;
// //     return sum / array.length
// //     }

// // //Exercise- Stars

// // showStars(10);

// // function showStars(rows) {
// //     for (let row = 1; row <= rows; row++) {
// //         let starPattern = '';
// //         for (let i = 0; i < row; i++)
// //             starPattern += '*';
// //         console.log(starPattern);
// //     }
// // }

// // // Factory Function

// // function createCircle(radius) {
// //     return {
// //         radius,
// //         draw() {
// //             console.log('draw');
// //         }
// //     };
// // }

// // const circle1 = createCircle(1);
// // console.log(circle1);

// // const circle2 = createCircle(2);
// // console.log(circle2);

// // // Constructor Function
// // // Pascal Notaion: OnetwoThreeFour

// // function Circle(radius) {
// //     this.radius = radius;
// //     this.draw = function () {
// //         console.log('draw');
// //     }
// // }

// // const circle = new Circle(1);

// // // Dynamic Nature of Objects

// // const circle = {
// //     radius: 1
// // };

// // circle.colour = 'yeallow';
// // circle.draw = function() {}

// // delete circle.colour;
// // delete circle.draw;

// // console.log(circle);

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }

// // new String(); // '', "", ''
// // new Boolean(); // true, false
// // new Number(); // 1, 2, 3, ...

// // // Functions are Objects

// // function Circle(radius) {
// //     this.radius = radius;
// //     this.draw = function() {
// //         console.log('draw');
// //     }
// // }

// // Circle.call({}, 1);
// // circle.apply({}, [1, 2, 3]);

// // const another = new Circle(1);

// // // Value vs. Reference Types

// // let x = { value: 10};
// // let y = x;

// // x.value = 20;

// // //**Primitives are copied by their value */
// // //**Objects are copied by their reference */

// // let number = 10;

// // function increase(number) {
// //     number++;
// // }

// // increase(number);
// // console.log(number);

// // // Enumerating Properties of an Object

// // const circle = {
// //     radius: 1,
// //     draw() {
// //         console.log('draw');
// //     }
// // };

// // for (let key in circle)
// //     console.log(key, circle[key]);

// // for (let key of Object.keys(circle))
// //     console.log(key);

// // for (let entry of Object.entries(circle))
// //     console.log(entry);

// // if('radius' in circle) console.log('yes');

// // // Date

// // const now= new Date();
// // const date1 = new Date('May 11 2018 09:00');
// // const date2 = new Date(2018, 4,  11, 9);

// // now.setFullYear(2017);

// // // exercise address object

// // function newAddress {
// //     this.street = street
// //     city: city;
// // }

// // // Removing Elements

// // const numbers = [1, 2, 3, 4];

// // //END
// // const last = numbers.pop();

// // //BEGINNING
// // const first = numbers.shift();

// // //MIDDLE
// // numbers.splice(2,2);
// // console.log(numbers);

// // //EMPTY ARRAY
// // numbers.lenght= 0; //sloution 1
// // numbers.splice(0, numbers.length); //soloution 2

// // // combining Arrays

// // const nfirst = [1, 2, 3];
// // const nsecond = [4, 5, 6];

// // const combined = nfirst.concat(nsecond);

// // const slice = combined.slice();

// // joining Arrays

// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.joined('-');
// console.log(combined);

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript' },
// ];

// courses.sort(function(a, b) {
//     // a < b => -1
//     //a> b => 1
//     // a === b => 0
// const nameA = a.name.toLowerCase();
// const nameB = b.name.toLowerCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0
// });
// console.log(courses);

// Testing the Elements of an Array

/*
const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

*/

// Mapping an array

/*
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '<ul>';

console.log(html);
*/
/*
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
    const obj = { value: n};
    return obj;
})

console.log(items);
*/

/* chaining methods */

// const numbers = [1, -1, 2, 3];

// const items = numbers
// .filter(n => n >= 0)
// .map(n => ({ value: n }))
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);

// console.log(items);

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum);

// const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

/* Function Declaration vs Expressions*/
// function Declaration
// hoisting is the process of moving declarations to the top of the file
// function walk() {
//     console.log(walk);
// }

// // function Expression
// let run = function() {
//     console.log('run');
// };
// let move = run;
// run();
// move();

// function sum() {
//     let total= 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

// function sum(...args) {
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

/* the rest operator */
// function sum(discount,...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

/* Default Parameters */

// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));

// /* Getters and Setters*/ 
// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'John smith';

// console.log(person);

/* try and Catch*/
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name');
            
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
person.fullName = ' ';
}
catch (e) {
    alert(e);
}
console.log(person);
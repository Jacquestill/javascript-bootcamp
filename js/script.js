// 'use strict';
//

// ---------- Strings ----------
// const message = 'Hello';
// const myName = 'Jacques';
//
// // alert(`${message} there, ${myName}`);
// console.log(`${message} there, ${myName}`);
//
// console.log(myName.length);
//
// const tweet = prompt('Write you tweet here.');
// const slicedTweet = tweet.slice(0,140);
//
// console.log(`You have written ${slicedTweet.length} characters, you have ${140 - slicedTweet.length} left.`);
// console.log(slicedTweet);


// --------- Challenge: Hello, Jacques ----------

// const name = prompt('What is you name?').toLowerCase();
// const correctName = name.slice(0,1).toUpperCase() + name.slice(1,7);
// alert(`Hello, ${correctName}`);

// ---------- Dog Age to Human Age Formula ----------

// const humanAge = function(dogAge) {
//   return (dogAge - 2) * 4 + 21;
// }
// const humanAge = (dogAge) => (dogAge - 2) * 4 + 21;
// console.log(humanAge(27));

// ---------- Functions ----------

// function getMilk(money, cost) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//
//   console.log('Buy ' + calcBottles(money, cost) + ' bottles of milk');
//
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//
//   return calcChange(money, cost);
// }
//
// function calcBottles (startingMoney, costPerBottle) {
//   const numberOfBottles = Math.trunc(startingMoney/ costPerBottle);
//   return numberOfBottles;
// }
//
// function calcChange(startingMoney, costPerBottle) {
//   const change = startingMoney % costPerBottle;
//   return change;
// }
//
// console.log(`Hello master, here is your $${getMilk(10, 3)} change!`);

// ---------- BMI Challenge ----------

// function bmiCalculator(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   return Math.round(bmi);
// }
//
// const bmiAngela = bmiCalculator(65, 1.8);
// const bmiJacques = bmiCalculator(84, 1.78);
// const bmiChereline = bmiCalculator(52, 1.63);
// console.log(bmiAngela, bmiJacques, bmiChereline);

// ---------- Random Dice Roll ----------

// const dice = function() {
//   const n = Math.floor(Math.random()*6 + 1);
//   return console.log(n);
// }
// dice();
//
// function dice2() {
//   const n = Math.floor(Math.random()*6+1);
//   return console.log(n);
// }
//
// dice2();

// ---------- Love Calculator Challenge ----------

// const name1 = prompt('Name of the boy.');
// const name2 = prompt('Name of the girl.');

// const percentage = Math.floor(Math.random()*100 + 1);
//
// if(percentage > 70) {
//   alert(`Your love score is ${percentage}%, your love for each other is like Kayne loves Kayne!`)
// }
// if(percentage > 30 && percentage <= 70) {
//   alert(`Your love score is ${percentage}%`)
// }
// if(percentage <= 30) {
//   alert(`Run AWAY!!!`);
// }

// ---------- Leap Year Challenge ----------

// function isLeap(year) {
//
//   const res4 = (year / 4) % 1;
//   const res100 = (year / 100) % 1;
//   const res400 = (year / 400) % 1;
//
//   if (res400 === 0) {
//     return 'Leap year.';
//   }
//   if(res4 === 0 && res100 !== 0) {
//     return 'Leap year.';
//   } else {
//       return 'Not leap year.'
//   }
// }
//
// console.log(isLeap(1948));

// ---------- Arrays ----------

// const guestList = ['Jacques', 'Chereline', 'Kayle', 'Nadiya', 'Sean', 'Anchen'];
//
// console.log(guestList);
// console.log(guestList.length);
// console.log(guestList[1]);

// ---------- Guest List Challenge ----------

// const guestList = ['jacques', 'chereline', 'kayle', 'nadiya', 'sean', 'anchen'];
// const guestName = prompt(`What's your name?`).toLowerCase();
//
// if(guestList.includes(guestName)) {
//   alert('Welocome to the PARTY!!!');
// } else {
//   alert('Sorry, you can not enter :(');
// }

// ---------- Fizz Buzz Challenge ----------

// const output = [];
//
// for (let sum = 1; sum <= 100; sum++) {
//   if (sum % 3 === 0 && sum % 5 === 0) {
//     output.push('FUZZ BUZZ');
//   } else if (sum % 3 === 0) {
//     output.push('FIZZ');
//   } else if (sum % 5 === 0) {
//     output.push('BUZZ');
//   } else {
//     output.push(sum);
//   }
// }
// console.log(output);

// ---------- Buying Lunch Challenge ----------

// const names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];
//
// function whosPaying(names) {
//
//   const numPerson = Math.floor(Math.random() * names.length);
//   const buyPerson = names[numPerson];
//   return `${buyPerson} is going to buy lunch today!`;
//
// }
//
// console.log(whosPaying(names));

// ---------- Bottles of Beer Challenge ----------

// for(let i = 1; i < 100; i++) {
//   console.log(`${100-i} bottles of beer on the wall, ${100-i} bottles of beer. Take one down and pass it around, ${99-i} bottles of beer on the wall.`);
// }
//
// console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);


// ---------- Fibonacci Challenge ----------

// function fibonacciGenerator(n) {
//   // 0,1,1,2,3,5,8,13,21,34,55,89,144...
//   let fibonc = [];
//   let firstNum = 0;
//   let secondNum = 1;
//   let total;
//
//   if (n > 0) fibonc.push(firstNum);
//   if (n > 1) fibonc.push(secondNum);
//
//   for (let i = 2; i < n; i++) {
//     total = firstNum + secondNum;
//
//     fibonc.push(total);
//     firstNum = secondNum;
//     secondNum = total;
//   }
//   return fibonc;
// }
// console.log(fibonacciGenerator(13));


// var result = 2 + 2; 

// var resultText = `Rezultati na 2+2=${result}`;

// console.log(resultText);

// var userInput = prompt('Vlera 1 me mbledhe');
// var userInput2 = prompt('Vlera 2 1 me mbledhe');
// var userResult = userInput * 1 + userInput2 * 1;

// console.log('Vlera qe e ka shkrujte user:' + userResult );


// let usersName = prompt('Your name?');
// alert(`Your name is: ${usersName}`);
// console.log(`Your name is: ${usersName}`);

// const currentYear = 2025
// let yob = prompt('Enter you year of birth')
// let age = currentYear - yob

// alert(`Your age is:${age}`)

/*
DONE - Request a user's name and display the response "Hello, [name]".
DONE - Request a user's year of birth, count his age, and display the result. Store the current year as a constant. 
DONE Request a length of a side of a square from a user and display the perimeter of the square. 
DONE = Request a radius of a circle and display the area of such a circle. 
DONE Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 
DONE - Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
DONE - A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 
A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 
The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
*/

// 


// let a = prompt('Enter side A length');
// let area = a * a;
// console.log("Area is:" + area);
// alert('Area is:' + area);

// const PI = 3.14;
// let radius = prompt('Enter radius');
// let area = PI * (radius * radius);

// console.log('Area is:' + area);

// let distance = prompt('Enter distance KM');
// let time = prompt('Enter the time to cover distance HR:')
// let speed = distance / tiDme;
// console.log('Speed is:' + speed + 'KM/H');

// const EX_RATE = 0.86;
// let currencyUSD = prompt('Enter value i dollars:');
// let currencyEur = currencyUSD * EX_RATE;
// console.log('Value in EUR:' + currencyEur);

// const SIZE_TO_COUNT = 820;
// let valueInGB = prompt('Enter the value in GB to find out how many 820MB files can be stored on this flash drive');
// let valueInMb = valueInGB * 1024;
// let numberOfFiles = valueInMb / SIZE_TO_COUNT + ' Number of files';

// console.log(numberOfFiles);

// let wallet,priceOfChocolate,nrOfBars,change;
// priceOfChocolate = 2;

// wallet = prompt('How much mon€y do you hav€') * 1;

// nrOfBars = (wallet - (wallet % priceOfChocolate) ) / priceOfChocolate;

// change = wallet % priceOfChocolate;

// console.log(`Number of bars: ${nrOfBars} and change: ${change}`);


// The students solve problems together with the teacher. Please mention that similar problems will be in the home assignment!
// Request a number from a user, square it and display on the screen.
// Request two numbers from a user and display their arithmetic mean. 
// Request a side length of a square from a user and display the content of that square. 
// Execute a km to mile converter. 1 km = 0,621371 miles. State this as a constant in the code.
// Execute a calculator. A user types in two numbers and the program puts out the results of + - * / actions with those numbers.
// A user types in the values of a and b for a * x + b = 0 formula and the program counts the x value.
// An employee's monthly paycheck is $250 + 10% from sales. Request the sum of all monthly sales and count the salary. 

// let a,b;

// a = prompt('Enter first number') * 1;
// b = prompt('Enter second number') * 1;
// console.log(`AVG Mean: ${(a+b) / 2 }`);
// let firstValue, secondValue;

// firstValue = prompt('enter first number') * 1;
// secondValue = prompt('enter second value') * 1;

// console.log(`${firstValue} + ${secondValue} = ${firstValue + secondValue}` );
// console.log(`${firstValue} - ${secondValue} = ${firstValue - secondValue}` );
// console.log(`${firstValue} * ${secondValue} = ${firstValue * secondValue}` );
// console.log(`${firstValue} / ${secondValue} = ${firstValue / secondValue}` );


// const SALARY = 250;
// let sales = prompt('Total sales for current month:') * 1;
// let bonus = sales * 0.1;
// let totalSalary = SALARY + bonus;

// console.log(`Rroga e 13 ${ totalSalary }`);

//----------------------

// let a = 100;
// let b = 12.345;
// let c = 100 / 0;
// let d = Infinity;
// let e = 'string' / 100;
// let f = NaN;

// let bigInteger = 9007199254740991n;
// let anotherBigInteger = ((bigInteger * 3n + 123n - 2n) % 10n ** 2n) / 4n;

// console.log(anotherBigInteger);


// let str = 'Hello';
// let str2 = "World";
// let phrase = str + str2;
// // embed a variable
// // embed an expression
// let result = `the result is ${1 + 2}`;

// let isOnline = true;
// let nameFieldChecked = false;
// let notEmpty = !Boolean(5);



// console.log(isOnline);
// console.log(nameFieldChecked);
// console.log(notEmpty);


// let age = null;
// let name;

// console.log(age);
// console.log(name);


// let id = Symbol();

// let id1 = Symbol('id');
// let id2 = Symbol('id');

// id = Symbol('idd')

// console.log(id1 === id2);


// console.log(typeof 0);
// console.log(typeof 123456789n);
// console.log(typeof('string'));
// console.log(typeof false);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol());

// // Comparison Operator  / = = , = = =, > , > =, < , < =,
// console.log(10 > 10);

// // Logical Operators / || , && !
// console.log(10 == (20 || 30) );
// console.log(10 == (10 || 30) );

// ------

// DONE - Request a three-digit number from a user and check whether it has identical digits in it.
// Done - Request a five-unit number from a user and check whether it is a palindrome.
// DONE - Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 
// DONE - Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.


// let threeNrDigit = prompt('Type a three digit number:') * 1;

// let firstVal = ( threeNrDigit - (threeNrDigit %  100) ) / 100;
// let secondVal = ( (threeNrDigit % 100) - (threeNrDigit %  10) ) / 10;
// let thirdVal = threeNrDigit % 10;


// console.log('firstVal', firstVal);
// console.log('secondVal', secondVal);
// console.log('thirdVal', thirdVal);


// console.log((firstVal == secondVal) && (secondVal == thirdVal) && (firstVal == thirdVal) );



// PALINDROME

// let isPalindromeNumber = prompt('Enter a five digit number:') * 1;

// let firstVal = ( isPalindromeNumber - (isPalindromeNumber %  10000) ) / 10000;
// let secondVal = ( (isPalindromeNumber % 10000) - (isPalindromeNumber %  1000) ) / 1000;
// let thirdVal = ( (isPalindromeNumber % 1000) - (isPalindromeNumber %  100) ) / 100;
// let fourthVal = ( (isPalindromeNumber % 100) - (isPalindromeNumber %  10) ) / 10;
// let fifthVal = isPalindromeNumber % 10;

// console.log(firstVal);
// console.log(secondVal);
// console.log(thirdVal);
// console.log(fourthVal);
// console.log(fifthVal);


// let isPalindrome = (firstVal == fifthVal) && (secondVal == fourthVal);
// console.log(isPalindrome);

// let value = prompt('Enter Currency Amount:') * 1;
// let currentCurrency = prompt('Enter the desired currency to convert your value(EUR / SEK / AUD):');

// const USD_TO_EUR = 0.86;
// const USD_TO_SEK = 9.53;
// const USD_TO_AUD = 1.54;

// let convertedEur = value * USD_TO_EUR;
// let convertedKroner = value * USD_TO_SEK;
// let convertedDollars = value * USD_TO_AUD;

// let convertedValue = (currentCurrency == 'EUR' && convertedEur) || 
//                     (currentCurrency == 'SEK' && convertedKroner) || 
//                     (currentCurrency == 'AUD' && convertedDollars);


// console.log(convertedValue);


// let r = prompt('Enter Radius') * 1;
// let a = prompt('Enter Site length') * 1;

// let doesItFit = r <= a  / 2  

// console.log(doesItFit);


// Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.
let userDateDD = prompt('Enter a date dd:mm:yy DD' ) * 1;
let userDateMM = prompt('Enter a date dd:mm:yy MM') * 1;
let userDateYY = prompt('Enter a date dd:mm:yy YY') * 1;
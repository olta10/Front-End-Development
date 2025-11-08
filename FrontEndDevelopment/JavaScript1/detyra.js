// DETYRA 1: Kontrolli nese nje numer tre-shifror ka shifra identike
let threeNrDigit = prompt('Type a three digit number:') * 1;

let firstVal = Math.floor(threeNrDigit / 100);
let secondVal = Math.floor((threeNrDigit % 100) / 10);
let thirdVal = threeNrDigit % 10;

let identicalDigits = (firstVal === secondVal) && (secondVal === thirdVal);

console.log(`Shifrat janë identike? ${identicalDigits}`);

console.log("-------------------------------------------------------------------")

// DETYRA 2: Kontrolli nese nje numer pese-shifror eshte palindrome
let isPalindromeNumber = prompt('Enter a five digit number:') * 1;

let first = Math.floor(isPalindromeNumber / 10000);
let second = Math.floor((isPalindromeNumber % 10000) / 1000);
let fourth = Math.floor((isPalindromeNumber % 100) / 10);
let fifth = isPalindromeNumber % 10;

let isPalindrome = (first === fifth) && (second === fourth);

console.log(`Është palindrome? ${isPalindrome}`);

console.log("-------------------------------------------------------------------")

// DETYRA 3: Konvertues valutor
let value = prompt('Enter Currency Amount in USD:') * 1;
let currentCurrency = prompt('Enter the desired currency to convert (EUR / SEK / AUD):');

const USD_TO_EUR = 0.86;
const USD_TO_SEK = 9.53;
const USD_TO_AUD = 1.54;

let convertedValue = (currentCurrency === 'EUR' && value * USD_TO_EUR) ||
                     (currentCurrency === 'SEK' && value * USD_TO_SEK) ||
                     (currentCurrency === 'AUD' && value * USD_TO_AUD);

console.log(`Converted Value: ${convertedValue}`);

console.log("-------------------------------------------------------------------")

// DETYRA 4a: Kontrolli nese nje rreth futet ne nje katror
let r = prompt('Enter radius of circle:') * 1;
let a = prompt('Enter side length of square:') * 1;

let doesItFit = r <= a / 2;
console.log(`A futet rrethi në katror? ${doesItFit}`);

// DETYRA 4b: Data e neserme
let userDateDD = prompt('Enter day (DD):') * 1;
let userDateMM = prompt('Enter month (MM):') * 1;
let userDateYY = prompt('Enter year (YYYY):') * 1;

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInMonth(month, year) {
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
        default:
            return 0;
    }
}

userDateDD += 1;
if (userDateDD > daysInMonth(userDateMM, userDateYY)) {
    userDateDD = 1;
    userDateMM += 1;
    if (userDateMM > 12) {
        userDateMM = 1;
        userDateYY += 1;
    }
}

console.log(`Next date is: ${userDateDD}:${userDateMM}:${userDateYY}`);

console.log("-------------------------------------------------------------------")


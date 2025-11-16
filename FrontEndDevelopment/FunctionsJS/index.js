    // let n = 0;

    // while (n <= 3){
    //     n++
    // }
    // console.log(n)

// Display something to the console as many times as a user stated.

    // let numberToDisplay = prompt('Enter the number of repetitions') * 1;
    // let numberToCompare = 0;
    // let textToDisplay = 'Hello from the while loop';

    // while(numberToDisplay > 0){
    //     console.log('numberToDisplay:');
    //     numberToDisplay--;
    // }


// Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.
  
    // let baseNumber = parseInt(prompt('Enter a number'))
    // let exp = parseInt(prompt('Enter exp: '))
    // let result = 1;

    // while (exp > 1){
    //     result = result * baseNumber;

    //     exp--;
    // }   
    // console.log('number is : ', result)

// Request 2 numbers and find all the common divisors.

    // let numberA = parseInt(prompt('Enter number A:'))
    // let numberB = parseInt(prompt('Enter number B:'))
    // let divident = 1

    // while ((divident <= numberA) && (divident <= numberB)){
    //     if((numberA % divident == 0) && (numberB % divident == 0)){
    //         console.log('numberA divident:' , divident);
    //         console.log('numberB divident:' , divident);
    //     }
    //     divident++;
    // }

// Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24.
    // let number = parseInt(prompt("Enter a number:"));
    // let iterator = 1;
    // let fact = 1;

    // while (iterator <= number) {
    //     fact = fact * iterator;
    //     iterator++;
    // }

    // console.log(`Your factorial for ${number} = ${fact}`);


// Suggest a user solve 2 + 2 * 2 until he/she does it right. 
    // let answer;
    // do {
    //     answer = parseInt(prompt('solve 2 + 2 * 2'));
    //     if (answer != 6) {
    //         console.log('inside if');
    //         console.log('wrong answer, try again');
    //     } else {
    //         console.log('inside else');
    //         console.log('correct answer');
    //     }
    // } while (answer != 6);
    // console.log('outside if');

// Store 1000 as a variable. Divide this variable by 2 while it is greater than 50. Display this number and how many divisions it took. 
    // let baseNumber = 1000;
    // let divident = 50;
    // let steps = 0

    // do{
    //     baseNumber = baseNumber / 2;
    //     steps++;
    // }while(baseNumber > 50){
    //     console.log('Steps', steps);
    //     console.log('BaseNumber', baseNumber)
    // }

// Tasks on FOR.
    // let str = "";

    // for (let i=0; i<=9; i++){
    //     str += i;
    //     console.log(str)
    // }

// Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..." to the page. If a user types a negative number in, alert an error.
    // let number = parseInt(prompt('enter a non-negative number:'));

    // if(number < 0 || isNaN(number)){
    //     alert('Error , try again ');
    // }else{
    //     let result ="";
    //     for(let i =1; i <=number; i++){
    //         result += `${i} sheep...`;
    //     }
    //     document.write(result);
    // }

// Request a number from a user. Display all the numbers from 1 to 100 which are divisible by a given number.
    // let number = parseInt(prompt('enter a number'));
    // if (isNaN(number) || number === 0) {
    //     alert("Please enter a valid number (not zero).");
    // } else {
    //     for (let i = 1; i <= 100; i++) {
    //         if (i % number === 0) {
    //             console.log(i);
    //         }
    //     }
    // }

// Put out every 4th element of a given range. A user states the min and max value in the range.
let max = parseInt(prompt('enter the max number'));
let min = parseInt(prompt('enter the min number'))

if(isNaN(Number))

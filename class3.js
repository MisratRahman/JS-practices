//A)  Write a code that takes two numbers, the first and last numbers of a series, as input from the user. The program should then calculate and display the sum of all the numbers in that series. For example:

// If the user inputs 3 and 8, the program should calculate and print the sum: 3 + 4 + 5 + 6 + 7 + 8.

// If the user inputs 1 and 10, the program should calculate and print the sum: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
var prompt= require('prompt-sync')()
var num1=Number(prompt("enter 1st number: "))
var num2=Number(prompt("enter last number: "))
var sum=0
for(num1;num1<=num2;num1++){ sum=sum+num1}
console.log("The sum is", sum)
 
//B)  Write a code to calculate and display the sum of all even numbers between 1 and 500.
var i=2
var sum=0
for(;i<=500; i= i + 2){sum=i+sum 
console.log(i)
console.log("the sum is",sum)}
 
// C) Write a code to calculate and display the sum of all odd numbers between 1 and 500.
var i=1
var sum=0
for(;i<=500; i= i + 2){sum=i+sum 
console.log(i)
console.log("the sum is",sum)}
 
// D) Suppose we have a series: 3+8+13+........  

// - Find the 100th term of this series. The code will display the value of the 100th term of this series. You can use the formula: nth_term = a + (n-1) d 

// - Display the sum of the series up to the 100th term. 

var num1=3
var sum=0
for(;num1<=498;num1=num1+5){sum= sum + num1}
console.log("the sum is",sum)
var lastnum= 100
var difference= 5
var num100= num1+ (lastnum-1)*difference
console.log("100th term of the series is", num100)
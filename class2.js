var prompt= require('prompt-sync')()
//A) Write code: Suppose you have a login system where you can log in by using only any of three names.

// 1) Determine three names inside your code.
// 2) Write a code that takes the user input.
// 3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome! “.
var name= prompt("enter your name: ")
if(name=="Misrat"){ console.log("Welcome")}
else if(name=="Mahir"){ console.log("Welcome")}
else if(name=="Marzia"){ console.log("welcome")}
else{console.log("sorry.We dont find you in the system")}
 
// B) Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.

var num=Number(prompt("enter year: "))
if(num%4==0){console.log("Its a leap year")}
else{console.log("Its not leap year")}
 
// C) Create a simple shopping cart program. The program should:

// 1) Prompt the user to enter the price of three items one by one.

// 2) Apply a discount based on the total cost:

// 3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)

// 4) Display the final cost after applying the discount.

var A= Number(prompt("product1: "))
var B= Number(prompt("product2: "))
var C= Number(prompt("product3: "))
var d= (A+B+C)
console.log(d)
if(100>d>50){console.log(Number((d-(d*0.1))))}
else if(d>100){console.log(Number((d-(d*0.2))))}
 
// D) Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:

// 1) Prompt the user to enter the scores for three subjects: Math, English, and Science.

// 2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.

// 3) Display the final average score.

// 4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:

// A:  > 60 

// F: <60
var A= Number(prompt("Math: "))
var B= Number(prompt("English: "))
var C= Number(prompt("Bengali: "))
var d= (A+B+C)/3
console.log(d)
if(d>60){console.log("your grade is_A")}
else if(d<60){console.log("your grade is F")}
  



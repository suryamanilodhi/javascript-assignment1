
// Question 1:
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '

var result=str1+" "+ str2.trim()+" "+str3.trim(); 
document.write(result);


//  Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var ch=prompt("enter   character");
if(ch>="A" && ch<="Z"||(ch>="a"&& ch<="z")){
   var ans1= (ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"||ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U");

    switch(ans1){
    case true:
        document.write("alphabet is vowel"+"<Br>");
        break;
    case false:
        document.write("aplpabet is consonant");
        break;

}

}
else{
    document.write("this is not  is not alphabet")
}

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations 

var number1=10;
var number2=20;
var operator="+";

switch(operator){
    case "+":
        console.log(number1+number2);
        break;
    
    case "-":
        console.log(number1-number2);
        break;
    
    case "*":
        console.log(number1*number2);
        break;

    case "/":
        console.log(number1/number2);
        break;
    
}








// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.
var side1=Number(prompt("enter first side of triangle"));
var side2=Number(prompt("enter second side of triangle"));
var side3=Number(prompt("enter third side of triangle"));
if(side1==side2==side3){
 document.write("triangle is equlateral"+"<Br>");
}
else if(side1==side2||side2==side3||side3==side1){
document.write("triangle is isoscles"+"<br>");
}
else{
    document.write("triangle is scalene triangle"+"<br>")
}


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25

// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var unit=300;
var bill_charge;

if(unit<=50){
    bill_charge=unit*0.50;
}
else if(unit<=150){
    bill_charge=(50*0.5)+(unit-50)*0.75;
}
else if(unit<=250){
    bill_charge=(50*0.50)+(100*0.75)+(unit-150)*1.20;
}
else if(unit>250){
    bill_charge=(50*0.50)+(100*0.75)+(100*1.20)+(unit-250)*1.5;
    bill_charge=bill_charge+bill_charge*0.2;
}
console.log(bill_charge);


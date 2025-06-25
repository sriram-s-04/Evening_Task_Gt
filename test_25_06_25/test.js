// // 1.GST Calculation for Hotel Bill
// let hotelBill = 4000;
// function calculateGST(billAmount) {
//     if(billAmount < 1000) {
//         let gstRate = 0;
//         let gstAmount = billAmount * gstRate;
//         let totalBill = billAmount + gstAmount;
//         return totalBill;

//     }
//     else if(billAmount > 1001 && billAmount < 7500) {
//         let gstRate = 0.12;
//         let gstAmount = billAmount * gstRate;
//         let totalBill = billAmount + gstAmount;
//         return totalBill;
//     }
//     else{
//         let gstRate = 0.18;
//         let gstAmount = billAmount * gstRate;
//         let totalBill = billAmount + gstAmount;
//         return totalBill;
//     }
// }
// let totalBill = calculateGST(hotelBill);
// console.log("Total Bill Amount with GST: " + totalBill);

// //2. Fibonacci Series in function
// let a = 0,b = 1,c = [];
// let n = 10;

// function generateFibonacciSeries(n) {
//     let a = 0, b = 1, c = [];
//     for (let i = 0; i < n - 2; i++) {
//         c[i] = a + b;
//         temp = b;
//         b = c[i];
//         a = temp;
//     }
//     return c;
// }

// console.log("0,1," + generateFibonacciSeries(n));

// // 3️.Grading System
// let marks = 85;
// let mark2 = 54;
// function calculateGrade(marks) {
//     if (marks >= 90 && marks <= 100) {
//         return "A";
//     } 
//     else if (marks >= 80 && marks <=89) {
//         return "B";
//     } 
//     else if (marks >= 70 && marks <=79) {
//         return "C";
//     } 
//     else if (marks >= 60 && marks <=69) {
//         return "D";
//     } 
//     else {
//         return "F";
//     }
// }
// let grade = calculateGrade(marks);
// let grade2 = calculateGrade(mark2);
// console.log("Grade: " + grade);
// console.log("Grade: " + grade2);


// // 4️.Factor Finder using function
// function findFactors(num) {
//     let factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//     console.log("Factors of " + num + ": " + factors.join(', '));
// }

// // 5️.Leap Year Checker using function
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// for (let i = 2000; i <= 2050; i++) {
//     if (isLeapYear(i)) {
//         console.log(i + " is a leap year.");
//     } else {
//         console.log(i + " is not a leap year.");
 
//     }
// }

// 6️.Simple Interest Calculator 
// let inv = 5000;
// let rate = 5;
// let time = 3;
// function CSI(principal, rate, time) {
//     let interest = (principal * rate * time) / 100;
//     return interest;
// }
// let interest = CSI(inv, rate, time);
// console.log("Simple Interest: " + interest);

// // 7️.Surface Area of a Cylinder 
// let radius = 5;
// let height = 10;
// function Surface(radius, height) {
//     let surfaceArea = 2 * Math.PI * radius * (radius + height);
//     return surfaceArea;
// }
// let surfaceArea = Surface(radius, height);
// console.log("Surface Area of Cylinder: " + surfaceArea);

// // 8️.Temperature Converter 
// let C = 25,F;
// function C_F(C) {
//     let F = (C * 9/5) + 32;
//     return F;
// }
//     F = C_F(C);
// console.log("Temperature in Fahrenheit: " + F);

// // 9️.Discount Calculation 
// let SP = 50000;
// function discount(SP) {
//     let discountRate = 5/100;
//     let discountAmount = SP * discountRate;
//     let finalPrice = SP - discountAmount;
//     console.log("Final Price after Discount: " + finalPrice);  
// }
// discount(SP);

// // 🔟 Electricity Bill Calculator 
// let priya_units = 250;
// let ravi_units = 320;
// function calculateElectricityBill(units) {
//     let billAmount = 0;
//     if(units <= 100) {
//         billAmount = units * 1.5;
//     } 
//     else if(units >= 101 && units <= 200) {
//         billAmount = 5*units;
//     } 
//     else if(units >= 201 && units <= 300) {
//         billAmount = units * 7;
//     }
//     else{
//         billAmount = units * 10;
//     }
//     return billAmount;
// }
// let priya_bill = calculateElectricityBill(priya_units);
// let ravi_bill = calculateElectricityBill(ravi_units);
// console.log("Priya's Electricity Bill:"+priya_bill);
// console.log("Ravi's Electricity Bill:"+ravi_bill);
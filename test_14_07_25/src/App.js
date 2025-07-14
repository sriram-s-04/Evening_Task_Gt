import logo from './logo.svg';
import './App.css';

import React, { use, useState } from 'react';

function App() {
  // 1️.GST Calculation for Hotel Bill
  const [hotelBill, sethotelBill] = useState();

  function calculateGST(billAmount) {
    if (billAmount < 1000) {
      let gstRate = 0;
      let gstAmount = billAmount * gstRate;
      let totalBill = billAmount + gstAmount;
      return totalBill;
    } else if (billAmount > 1001 && billAmount < 7500) {
      let gstRate = 0.12;
      let gstAmount = billAmount * gstRate;
      let totalBill = billAmount + gstAmount;
      return totalBill;
    } else {
      let gstRate = 0.18;
      let gstAmount = billAmount * gstRate;
      let totalBill = billAmount + gstAmount;
      return totalBill;
    }
  }

  let totalBill = calculateGST(hotelBill);
  console.log("Total Bill Amount with GST: " + totalBill);



let [frange, setfrange] = useState(0);
let a = 0, b = 1, c = [], temp = 0;
for (let i = 0; i < frange - 2; i++) {
  c[i] = a + b;
  temp = b;
  b = c[i];
  a = temp;
}
a = 0;
b = 1;
c = [a, b, ...c];
let fibonacciSeries = c.join(',');

// 3️.Grading System
let [marks, setMarks] = useState(0);

function calculateGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A";
    } 
    else if (marks >= 80 && marks <=89) {
        return "B";
    } 
    else if (marks >= 70 && marks <=79) {
        return "C";
    } 
    else if (marks >= 60 && marks <=69) {
        return "D";
    } 
    else {
        return "F";
    }
}
let grade = calculateGrade(marks);

console.log("Grade: " + grade);
// 4️.Factor Finder
let [factors, setFactors] = useState(0);
function findFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
    // console.log("Factors of " + i + ": " + factors.join(', '));

// 5️.Leap Year Checker 

  let [leapYear, setLeapYear] = useState(0);
  function isLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a leap year.`;
    }
    else {
      return `${year} is not a leap year.`;
    }
 
    }

    // // 6️.Simple Interest Calculator 
let [inv, setInv] = useState();
let [rate, setRate] = useState();
let [time, setTime] = useState();
function CSI(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}
 CSI(inv, rate, time);
// console.log("Simple Interest: " + interest);

// // 7️.Surface Area of a Cylinder 
let [radius, setRadius] = useState();
let [height, setHeight] = useState();
function Surface(radius, height) {
    let surfaceArea = 2 * Math.PI * radius * (radius + height);
    return surfaceArea;
}
 Surface(radius, height);
// console.log("Surface Area of Cylinder: " + surfaceArea);
// // 8️.Temperature Converter 
let [C, setC] = useState();
function C_F(C) {
    let F = (C * 9/5) + 32;
    return F;
}
     C_F(C);
// console.log("Temperature in Fahrenheit: " + F);

// // 9️.Discount Calculation 
  let [SP, setSP] = useState();
  function discount(SP) {
      let discountRate = 5/100;
      let discountAmount = SP * discountRate;
      let finalPrice = SP - discountAmount;
      return finalPrice;
  }
  discount(SP);

  // // 🔟 Electricity Bill Calculator 
let [priya_units, setPriyaUnits] = useState();

function calculateElectricityBill(units) {
    let billAmount = 0;
    if(units <= 100) {
        billAmount = units * 1.5;
    } 
    else if(units >= 101 && units <= 200) {
        billAmount = 5*units;
    } 
    else if(units >= 201 && units <= 300) {
        billAmount = units * 7;
    }
    else{
        billAmount = units * 10;
    }
    return billAmount;
}
calculateElectricityBill(priya_units);




  return (
    <div className='App'>
      {/* 1.GST Calculation for Hotel Bill */}
      <div>
        <h2>GST Calculation for Hotel Bill</h2>
<input
        type="number"
        value={hotelBill} 
        onChange={(e) => sethotelBill(Number(e.target.value))}
        placeholder="Enter Hotel Bill Amount"
      />
      <button onClick={() => sethotelBill((hotelBill))}>Calculate GST</button>
      <p>Total Bill Amount with GST: {totalBill}</p>
      </div>
      <hr/>
      <div>
        {/* 2. Fibonacci Series */}
        <h2>Fibonacci Series</h2>
        <input
        type="number"
        value={frange}
        onChange={(e) => setfrange(Number(e.target.value))}
        placeholder="Enter Fibonacci Range"
      />
      <button onClick={() => setfrange((frange))}>Generate Series</button>
      <p>Fibonacci Series: {fibonacciSeries}</p>
      </div>
      <hr/>
      {/* 3️.Grading System */}
      <div>
        {/* 3️.Grading System */}
        <h2>Grading System</h2>
        <input
        type="number"
        value={marks}
        onChange={(e) => setMarks(Number(e.target.value))}
        placeholder="Enter Marks"
      />
      <button onClick={() => setMarks(marks)}>Calculate Grade</button>
        <p>Marks: {marks} - Grade: {grade}</p>

      </div>
      <hr/>
      <div>
        {/* 4️.Factor Finder */}
        <h2>Factor Finder</h2>
        <input
        type="number"
        placeholder="Enter a number to find factors"
        onChange={(e) => {setFactors(Number(e.target.value))}}/>
        <p>Factors of {factors}: {findFactors(factors)}</p>

      </div>
      <hr/>
      <div>
        {/* 5️.Leap Year Checker */}
        <h2>Leap Year Checker</h2>
        <input
          type="number"
          placeholder="Enter a year"
          value={leapYear}
          onChange={(e) => { setLeapYear(Number(e.target.value)) }}
        />
        <p>{isLeapYear(leapYear)}</p>
      </div>
      <hr/>
      <div>
        {/* 6️.Simple Interest Calculator */}
        <h2>Simple Interest Calculator</h2>
        <input
          type="number"
          placeholder="Enter Investment Amount"
          value={inv}
          onChange={(e) => { setInv(Number(e.target.value)) }}
        />
        <input
          type="number"
          placeholder="Enter Rate of Interest"
          value={rate}
          onChange={(e) => { setRate(Number(e.target.value)) }}
        />
        <input
          type="number"
          placeholder="Enter Time (in years)"
          value={time}
          onChange={(e) => { setTime(Number(e.target.value)) }}
        />
        <p>Simple Interest: {CSI(inv, rate, time)}</p>
      </div>
      <div>
        <h2>Surface Area of Cylinder</h2>
        <input
          type="number"
          placeholder="Enter Radius"
          value={radius}
          onChange={(e) => { setRadius(Number(e.target.value)) }}
        />
        <input
          type="number"
          placeholder="Enter Height"
          value={height}
          onChange={(e) => { setHeight(Number(e.target.value)) }}
        />
        <p>Surface Area: {Surface(radius, height)}</p>
      </div>
      <hr/>
      <div>
        {/* 8️.Temperature Converter */}
        <h2>Temperature Converter</h2>
        <input
          type="number"  
          placeholder="Enter Temperature in Celsius"
          value={C}
          onChange={(e) => { setC(Number(e.target.value)) }}
        />
        <p>Temperature in Fahrenheit: {C_F(C)}</p>
        </div>
        <hr/>
        <div>
        {/* 9️.Discount Calculation */}
        <h2>Discount Calculation</h2>
        <input
          type="number"
          placeholder="Enter Selling Price"
          value={SP}
          onChange={(e) => { setSP(Number(e.target.value)) }}
        />
        <p>Final Price after Discount: {discount(SP)}</p>
      </div>
      <hr/>
      <div>
        {/* 🔟 Electricity Bill Calculator */}
        <h2>Electricity Bill Calculator</h2>
        <input
          type="number"
          placeholder="Enter Units Consumed"
          value={priya_units}
          onChange={(e) => { setPriyaUnits(Number(e.target.value)) }}
        />
        <p>Electricity Bill: {calculateElectricityBill(priya_units)} Rs</p>
      </div>
    </div>
  );
}

export default App;

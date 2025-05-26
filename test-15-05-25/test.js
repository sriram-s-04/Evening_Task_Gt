// // 1.Use a loop to calculate the sum of numbers from 1 to 10
// let sum = 0;
// for(let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// // 2.prime or non prime
// let num = 200;
//     let count = 0;
//     for(let itr = 1; itr <= num; itr++){
//         if(num % itr == 0){
//             count++;
//         }
//     }
//     if(count == 2){
//         console.log(num + " is a prime number.");
//     }
//     else{
//         console.log(num + " is not a prime number.");
//     }

// // 3.find the count of vowels
//  let str = "the world is beautiful until india is calm";
//     let count = 0;
//     for(let itr = 0; itr < str.length; itr++){
//         if(str[itr] == 'a' || str[itr] == 'e' || str[itr] == 'i' || str[itr] == 'o' || str[itr] == 'u'){
//             count++;
//         }
//     }
//     console.log("The number of vowels in the string is: " + count);
    

// // 4.Write a program that prints numbers from 1 to 20, but for multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".
// for (let i = 1; i <= 20; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// 5.build a stone paper scissor game in js
function getRandomInt(ran) {
  return Math.floor(Math.random() * ran);
}
let SPS = [
    {
        name:"sri",
        stone:1,
        paper:2,
        scissor:3
    },
    {
        name:"kannan",
        stone:1,
        paper:2,
        scissor:3
    }
];     
    let P1choice = getRandomInt(3)+1;
    let P2choice = getRandomInt(3)+1;
    
    if((P1choice == 1 && P2choice == 3)||(P1choice == 2 &&P2choice==1)||(P1choice==3&&P2choice==2)){
        console.log("the winner is : "+SPS[0].name);
    }
    else if ((P2choice == 1 && P1choice == 3)||(P2choice == 2 &&P1choice==1)||(P2choice == 3 && P1choice == 2)){
        console.log("the winner is : "+SPS[1].name);
    }
    else if(P1choice==P2choice){
        console.log("both are same redo the match");
    }


    
 
// // 6.Sum of Even Numbers Using a Loop
// let sum = 0;
// for(let i = 2; i <= 10; i+=2) {
//     sum +=i; 
// }
// console.log(sum);

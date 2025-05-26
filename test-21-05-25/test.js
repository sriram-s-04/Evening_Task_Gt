// // 1. Task: Guessing Game
// // Create a program where the user keeps guessing a secret number until they guess it correctly.
// let user_num = 2;
// let secret_num = Math.floor(Math.random() * 3) + 1;
// if (secret_num === user_num) {
//   console.log("You guessed it right!");
// } else {
//   console.log("Try again!");
// }

// // 2. Task: Movie Ticket Booking
// // Create a simple movie ticket booking system where a user can:

// // 	Choose a movie from a list
// // 	Select the number of seats to book
// // 	Book the tickets
// let movies = ["Movie A", "Movie B", "Movie C"];
// let user_choice = 0;
// let seats = 2;
// let booked_seats = 0;
// let total_seats = 100;
// function bookTicket(movie, seats) {
//   if (booked_seats < total_seats) {
//     console.log(`You have booked ${seats} seats for ${movie}`);
//     booked_seats += seats;
//     seats -= booked_seats;
//   } else {
//     console.log("No seats available");
//   }
// }
// bookTicket(movies[user_choice], seats);

// // 3. Task: Weather Logger
// // 	Enter daily temperature and weather conditions
// // 	Store data for a week
// // 	Calculate average temperature and the most frequent weather condition
// let weatherData = [
//   { day: "Monday", temperature: 30, condition: "Sunny" },
//   { day: "Tuesday", temperature: 32, condition: "Rainy" },
//   { day: "Wednesday", temperature: 28, condition: "Sunny" },
//   { day: "Thursday", temperature: 31, condition: "Cloudy" },
//   { day: "Friday", temperature: 29, condition: "Sunny" },
//   { day: "Saturday", temperature: 33, condition: "Rainy" },
//   { day: "Sunday", temperature: 30, condition: "Sunny" },
// ];
// let totalTemperature = 0;
// let conditionCount = {};
// for (let i = 0; i < weatherData.length; i++) {
//   totalTemperature += weatherData[i].temperature;
//   let condition = weatherData[i].condition;
//   conditionCount[condition] = (conditionCount[condition] || 0) + 1;
// }

// let averageTemperature = totalTemperature / weatherData.length;
// let mostFrequentCondition = Object.keys(conditionCount).reduce((a, b) =>
//   conditionCount[a] > conditionCount[b] ? a : b
// );
// console.log(`Average Temperature: ${Math.floor(averageTemperature)}`);
// console.log(`Most Frequent Weather Condition: ${mostFrequentCondition}`);

// // Note:

// // JavaScript Interns should Implement separate functions for each process.
// // All user inputs (such as movie choice and number of seats, temperatures, etc..) should be passed as function parameters.

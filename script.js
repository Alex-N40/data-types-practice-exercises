var favoriteColor = prompt("What's your favorite color? (ex. green)");
console.log(`Your favorite color is ${favoriteColor}.`);
//In console when a user enters "red": Your favorite color is red.

var yourName = prompt("What is your name?");
var yourBirthYear = prompt("What year were you born in? (ex. 1970)");
console.log(`${yourName}, you are ${2024 - yourBirthYear} years old.`);
//In console when a user enters "Alex" and "1980": Alex, you are 44 years old.

var hourlyWage = Number(prompt("What's your hourly wage? (ex. 30 for $30 per hour)"));
var hoursWorked = Number(prompt("How many hours did you work in a week? (ex. 30)"));
console.log(`You made $${(hourlyWage * hoursWorked).toFixed(2)}.`);
//In console when a user enters "30" and "40": You made $1200.00.








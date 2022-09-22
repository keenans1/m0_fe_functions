// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log('hi!');
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function greetPerson(name) {
  console.log(`Hi ${name}`);
}

greetPerson("Steve");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function companyPayRange(companyName, minPay, maxPay) {
  console.log(`Here at ${companyName} our minimum pay is $${minPay} and our maximum pay is $${maxPay}`);
  var payRange = maxPay - minPay;
  console.log(`That would make our pay range $${payRange}`);
}

companyPayRange("Exezelecommunicationsnetwork", 7, 11);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(qty, item) {
  if (qty === 0) {
    console.log(`${item} - OUT of stock!`);
  }
  else if (qty >= 4) {
    console.log(`${item} is stocked`);
  }
  else {
    console.log(`${item} - running LOW`);
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

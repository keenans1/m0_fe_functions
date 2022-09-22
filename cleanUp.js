// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// i added a semicolon at the end of line 12 and 15


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

//i formatted lines 22-24 properly (no code changes)
//added semicolon to end of line 22



// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

// changed func to function
//formatted the } properly

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
}

average(1, 3);

//formatted properly
//called the function with parameters
//moved the period inside of the back tics on line 53

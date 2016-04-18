// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText) {
  var answer = prompt(questionText);
  order = order + " " + answer
}

question("do you want a hamburger or cheeseburger?")
question("french fries or animal fries?");
question("chocolate, strawberry, or vanilla milkshake?");


// output their order
document.write("<p>You ordered: " + order + "<p>");

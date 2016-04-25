// begin with a blank/new order
//var order = '';


// build a function to ask questions

//function question(questionText) {
  //var answer = prompt(questionText);
  //order = order + " " + answer
//}

var myQuestion = [
  "do you want a hamburger or cheeseburger?", 
  "french fries or animal fries?", 
  "chocolate, strawberry, or vanilla milkshake?"
  ];

var i =0;
var order = '';
while (i<myQuestion.length) {
  var answerInput = prompt(myQuestions[i]);
  order = order + " " + answerInput;
  i++;
}

// output their order
document.write("<p>You ordered: " + order + "<p>");

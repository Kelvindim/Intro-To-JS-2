alert("Welcome to My Simple Calculator, comrade. Click 'OK' to start.");
const firstNumber = parseFloat(prompt("Enter First Number:"));
const operator = prompt("Enter operator as +,   -,   /,   * ");
const secondNumber = parseFloat(prompt("Enter Second Number:"));

let result = 0;
if (isNaN(firstNumber) || isNaN(secondNumber)) {
	alert("Wrong Input! Please refresh the page and re-enter valid number(s)");
} else {
	if (operator == "+") {
		result = firstNumber + secondNumber;
	} else if (operator == "-") {
		result = firstNumber - secondNumber;
	} else if (operator == "/") {
		result = firstNumber / secondNumber;
	} else if (operator == "*") {
		result = firstNumber * secondNumber;
	}
	alert(firstNumber + operator + secondNumber + "=" + result);
	alert("Thank you for your time, e go be comrade.");
}

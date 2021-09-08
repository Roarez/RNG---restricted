/*
get random number with selectable range
do not let it repeat numbers
*/
let range_input = document.createElement("input");
range_input.setAttribute("class", "input-number");
range_input.setAttribute("type", "number");
let range_button = document.createElement("input");
range_button.setAttribute("type", "submit");
range_button.setAttribute("onclick", "getRestrictedRandom()");
range_button.setAttribute("value", "Generate Number");
range_button.setAttribute("class", "submit-buttons");
let reset_button = document.createElement("input");
reset_button.setAttribute("type", "submit");
reset_button.setAttribute("onclick", "resetRestrictions()");
reset_button.setAttribute("value", "Reset");
reset_button.setAttribute("class", "submit-buttons");
let input_area = document.getElementById("number-range");
input_area.appendChild(range_input);
input_area.appendChild(range_button);
input_area.appendChild(reset_button);
let result_area = document.getElementById("random-number");
let restricted_numbers = [];
let random;
let number_range;

function getRestrictedRandom() {
	console.log(range_input.value);
	number_range = range_input.value;
	random = getRandomNumber(number_range);
	restrictNumber();
}

function getRandomNumber(range) {
	let number = Math.floor(Math.random()*range)+1;
	return number;
}

function restrictNumber(){
	if(restricted_numbers.length == number_range){
		console.log("No more numbers!");
		result_area.textContent = "No more numbers!";
		return;
	}
	if(restricted_numbers.length > 0) {
		for(let i = 0; i < restricted_numbers.length; i++) {
			if(restricted_numbers[i] == random){
				random = getRandomNumber(number_range);
				restrictNumber();
				return;
			}
		}
		displayResult();
	}else{
		displayResult();
	}
}

function displayResult() {
	restricted_numbers.push(random);
	console.log("result: " + random, restricted_numbers);
	result_area.textContent = random;
}

function resetRestrictions() {
	restricted_numbers = [];
}
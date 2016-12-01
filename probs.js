// capitalize the first letter of one word
var letterCapitlatize = function(string){
		var capLetter = string[0].toUpperCase();
		return capLetter + string.substring(1);
}
console.log(letterCapitlatize('kurt'));
//////////////////////////////////////////////////////////////////////////////////////////
// capitalize the first letter of multiple words
var cappers = function(string){
		var newString = '';
		var array = string.split(' ');
		for(var i = 0; i <array.length; i++){
			var newWord = array[i][0].toUpperCase() + array[i].substring(1);
			newString += newWord + ' ';
		}
		console.log(newString);
}
cappers('kurt has a boat');

function letterCapitalize(string) {
		var newString = '';
		var array = string.split(' ');
		for(var i = 0; i < array.length; i++){
		var word = array[i][0].toUpperCase() + array[i].substring(1);
		newString += word + ' ';
		}
		console.log(newString + '!!!');
}

letterCapitalize('hello world');
//////////////////////////////////////////////////////////////////////////////////////////
// count the index's in an array
function wordCount(string){
	var array = string.split(' ');
	// console.log(array);
	console.log(array.length) 
}
wordCount("how many words are in this string");
//////////////////////////////////////////////////////////////////////////////////////////
// create a function that returns true if a number is prime
function primeTime(number) {
	for(var i = 2; i < 216; i++){
		if(number%i===0){
			return false;
		} else {
			return true;
		}
	}
}
console.log(primeTime(187));












//Creating a method that checks for vowels 
String.prototype.hasVowels = function() {
	let regexTest = /[aeiou]/i;
	let word = Object.values(this).join('');
	return regexTest.test(word) ? true : false;
}

//Method for creating upperCase
String.prototype.toUpper = function() {
	let upperRegex = /[a-z]/;
	let output = '';
	for(let index = 0; index < this.length; index++){
		output += this[index].replace(upperRegex, String.fromCharCode(this[index].charCodeAt(0)-32));
	}
	return output;
}



module.exports = String;
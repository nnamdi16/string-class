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

String.prototype.toLower = function() {
	let lowerRegex = /[A-Z]/u;
	let output = '';
	for(let index = 0; index < this.length; index++){
		output += this[index].replace(lowerRegex,String.fromCharCode(this[index].charCodeAt(0) + 32));
	}
	return output;
}

String.prototype.ucFirst = function() {
	return this[0].toUpper() + this.substring(1,this.length);
}



module.exports = String;
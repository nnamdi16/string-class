//Creating a constr 
String.prototype.hasVowels = function() {
	let word = /[aeiou]/i;
	let newWord = Object.values(this).join('');
	return word.test(newWord) ? true : false;
}



module.exports = String;
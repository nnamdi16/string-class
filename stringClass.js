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

String.prototype.isQuestion = function(){
	let regexQuestion = /.+\?$/i;
	return regexQuestion.test(this);
}

String.prototype.word = function() {
	let regexWordList = /([a-z]+)(?:\s+)/i;
	let splitWord = this.split(regexWordList);
	let output = [];
	for(let index of splitWord) {
		if(index !== ''){
		output.push(index);
		}
    }
  	return output;
}


String.prototype.wordCount = function() {
	return this.word().length;
}

String.prototype.inverseCase = function() {
	let output = '';
	for(let index = 0; index < this.length; index++){
	   output += this[index] === this[index].toUpper()?this[index].toLower():this[index].toUpper();
	}
	return output;
  }

String.prototype.alternateCase = function() {
	let output = '';
	for(let index = 0; index < this.length; index++){
	   output += (index%2 === 0)?this[index].toLower():this[index].toUpper();
	   
	}
	return output;
}
String.prototype.numberSelect = function(){
	let regexNumberWords = /(\d)+/g;
   return this.match(regexNumberWords) === null?NaN:Number(this.match(regexNumberWords).join(''))
}






module.exports = String;
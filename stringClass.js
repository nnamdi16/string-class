//Returns true if the string contains vowels 
String.prototype.hasVowels = function() {
	let regexTest = /[aeiou]/i;
	let word = Object.values(this).join('');
	return regexTest.test(word) ? true : false;
}

// ​Returns the String in question but with all characters in uppercases as applicable
String.prototype.toUpper = function() {
	let upperRegex = /[a-z]/;
	let output = '';
	for(let index = 0; index < this.length; index++){
		output += this[index].replace(upperRegex, String.fromCharCode(this[index].charCodeAt(0)-32));
	}
	return output;
}

//​Returns the String in question but with all characters in their lowercases as applicable
String.prototype.toLower = function() {
	let lowerRegex = /[A-Z]/u;
	let output = '';
	for(let index = 0; index < this.length; index++){
		output += this[index].replace(lowerRegex,String.fromCharCode(this[index].charCodeAt(0) + 32));
	}
	return output;
}

//Returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function() {
	return this[0].toUpper() + this.substring(1,this.length);
}

// ​Returns true if the string is a question (ending with a question mark)
String.prototype.isQuestion = function(){
	let regexQuestion = /.+\?$/i;
	return regexQuestion.test(this);
}

// ​Returns a list of the words in the string, as an Array
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

//Returns the number of words in the string
String.prototype.wordCount = function() {
	return this.word().length;
}

// Returns each letter in the string as an inverse of its current case
String.prototype.inverseCase = function() {
	let output = '';
	for(let index = 0; index < this.length; index++){
	   output += this[index] === this[index].toUpper()?this[index].toLower():this[index].toUpper();
	}
	return output;
  }

//Returns the letters in alternating cases
String.prototype.alternateCase = function() {
	let output = '';
	for(let index = 0; index < this.length; index++){
	   output += (index%2 === 0)?this[index].toLower():this[index].toUpper();
	   
	}
	return output;
}

//Returns the numbers 
String.prototype.numberSelect = function(){
	let regexNumberWords = /(\d)+/g;
	return this.match(regexNumberWords) === null?NaN:Number(this.match(regexNumberWords).join(''));
}

// Returns the numbers in words 
String.prototype.numberWords = function() {
	let numWords = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
	let output = [];
	let initOutput = String(this.numberSelect());
	for(let index=0; index<initOutput.length; index++){
		let numPosition = initOutput[index];
		output.push(numWords[numPosition]);  
	}
	return output.join(' ');
  
}

// Returns true if the string is a digit(one number)
String.prototype.isDigit = function() {
	return /^(-{1})?\d$/.test(this);
  }

  //​Returns a currency representation of the String
String.prototype.toCurrency = function () {
    let regexCurrency = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
    if(/[^\d\.]/.test(this)){
        return NaN;
    }else if (/\./.test(this)){
        return this.replace(regexCurrency, '$1,');
    } else {
        let output = this + '.';
        output = output.replace(regexCurrency, '$1,');
        return output.slice(0, output.length-1);
    }
}

//Returns a number representation of the Currency String
String.prototype.fromCurrency = function (){
    let string = Object.values(this).join('');
    if(/[^\d\.,]/.test(string)){
        return NaN;
    }else {
        return Number(string.replace(/,/g, ''));
  }
}




module.exports = String;
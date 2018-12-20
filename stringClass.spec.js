//Test for the string Constructor function
//Import file for testing.
require('./stringClass');

describe("String class Extension", function() {
  describe("Check if a string contains has vowels", function() {
    it("should indicate true for a string with uppercase characters", function() {
      expect('NNAMDI'.hasVowels()).toBeTruthy();
    });

    it("should indicate true for a string with lowercase characters", function() {
      expect('nnamdi'.hasVowels()).toBeTruthy();
    });

    it("should indicate false for a string without lowercase characters", function() {
      expect('byxwz'.hasVowels()).toBeFalsy();
    });

    it("should indicate true for a string with both lowercase and uppercase characters", function() {
      expect('nNamdI'.hasVowels()).toBeTruthy();
    });

    it("should indicate false for an empty string ", function() {
      expect(''.hasVowels()).toBeFalsy();
    });

    it("should indicate false for a string that has numbers only ", function() {
      expect('12345'.hasVowels()).toBeFalsy();
    });

    it("should indicate false for a string that has special characters only ", function() {
      expect('**?/|{}-+=()'.hasVowels()).toBeFalsy();
    });

  });

  describe("Returns String with all characters in uppercase", function() {
    it("should return all characters to be uppercase when all characters are lowercase", function() {
      expect('nnamdi'.toUpper()).toBe('NNAMDI');
    });

    it("should return all characters to be uppercase when characters are both uppercase and lowercase", function() {
      expect('nnAmDi'.toUpper()).toBe('NNAMDI');
    });

    it("should return empty string on empty string input", function() {
      expect(''.toUpper()).toBe('');
    });

    it("should return capital letters if all characters are uppercase", function() {
      expect('NNAMDI'.toUpper()).toBe('NNAMDI');
    });

  });

  describe("Returns String with all characters in uppercase", function() {
    it("should return all characters to be lowercase when all characters are lowercase", function() {
      expect('NNAMDI'.toLower()).toBe('nnamdi');
    });

    it("should return all characters to be lowercase when characters are both uppercase and lowercase", function() {
      expect('nnAmDi'.toLower()).toBe('nnamdi');
    });

    it("should return empty string on empty string input", function() {
      expect(''.toLower()).toBe('');
    });

    it("should return lowercase letters if all characters are lowercase", function() {
      expect('nnamdi'.toLower()).toBe('nnamdi');
    });

   

  });
  describe("Returns String with the first character as uppercase", function() {
    it("should return the first character of a string as uppercase when all characters in the string are capital letters", function() {
      expect('NNAMDI'.ucFirst()).toBe('NNAMDI');
    });

    it("should return only the first character of a string as uppercase when all characters in the string are lower case ", function() {
      expect('nnamdi'.ucFirst()).toBe('Nnamdi');
    });

    it("should return only the first character of a string as uppercase when the characters in the string are both lower case and upper case", function() {
      expect('nNaMdI'.ucFirst()).toBe('NNaMdI');
    });

    it("should return only the first character of a string as uppercase when there are more than one word that makes up a string", function() {
      expect('nnamdi is a developer'.ucFirst()).toBe('Nnamdi is a developer');
    });

   

  });

  describe("Returns true if the string is a question", function() {
    it("should return true if a string ends with a question mark", function() {
      expect('Is regex very easy to implement?'.isQuestion()).toBeTruthy();
    });

    it("should return false if the string is not a question ", function() {
      expect('Regex is simply regular expressions'.isQuestion()).toBeFalsy();
    });

    it(" should return false if the strings starts with a question mark", function() {
      expect('?I am a boy'.isQuestion()).toBeFalsy('');
    });

    it("should return false if the strings has a question mark in between it and not at the end", function() {
      expect('nnamdi ? is ? a ? developer'.isQuestion()).toBeFalsy('');
    });

  });

   describe("Returns a list of words in the string as an array ", function() {
    it("should return a list of words as array ignoring whether it is uppercase or not", function() {
      expect('Nnamdi uses the same code'.word()).toEqual(['Nnamdi','uses','the','same','code']);
    });

    it("should return a list of words as array ignoring spaces and tabs ", function() {
      expect('Regex is simply regular    expressions'.word()).toEqual(['Regex','is','simply','regular','expressions']);
    });

    it(" should return an empty array for an empty string", function() {
      expect(''.word()).toEqual([]);
    });

  });

  describe("Returns the number of words in the string ", function() {
    it("should return a list of words as array ignoring whether it is uppercase or not", function() {
      expect('Nnamdi uses the same code'.wordCount()).toEqual(5);
    });

    it("should return a list of words as array ignoring spaces and tabs ", function() {
      expect('Regex is simply regular    expressions'.wordCount()).toEqual(5);
    });

    it(" should return an empty array for an empty string", function() {
      expect(''.wordCount()).toEqual(0);
    });

  });

  describe("Returns each letter in the string as an inverse of its current case", function() {
    it("should return the inverse of each letter in the string with all case been uppercase", function() {
      expect('IS REGEX VERY EASY TO IMPLEMENT?'.inverseCase()).toEqual('is regex very easy to implement?');
    });

    it("should return the inverse of each letter in the string with all case been lowercase  ", function() {
      expect('regex is simply regular expressions'.inverseCase()).toEqual('REGEX IS SIMPLY REGULAR EXPRESSIONS');
    });

    it(" should return an empty string if the input is an empty string", function() {
      expect(''.inverseCase()).toEqual('');
    });

    it("should return the inverse of each letter in the string with case been both lower and upper case", function() {
      expect('nNaMdI'.inverseCase()).toEqual('NnAmDi');
    });

  });
  
});

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
      expect('NNAMDI'.tolower()).toBe('nnamdi');
    });

    it("should return all characters to be lowercase when characters are both uppercase and lowercase", function() {
      expect('nnAmDi'.tolower()).toBe('nnamdi');
    });

    it("should return empty string on empty string input", function() {
      expect(''.tolower()).toBe('');
    });

    it("should return lowercase letters if all characters are lowercase", function() {
      expect('nnamdi'.tolower()).toBe('nnamdi');
    });

   

  });

  
});

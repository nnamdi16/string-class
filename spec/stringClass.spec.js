//Test for the string Constructor function
//Import file for testing.
require('../stringClass');

describe("String class Extension", function() {
  describe("Check if a string contains has vowels", function() {
    it("should indicate true for a string with uppercase characters", function() {
      expect('NNAMDI'.hasVowels()).toBeTruthy();
      // // demonstrates use of 'not' with a custom matcher
      // expect(player).not.toBePlaying(song);
    });

    it("should indicate true for a string with lowercase characters", function() {
      expect('nnamdi'.hasVowels()).toBeTrue();
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

  
});

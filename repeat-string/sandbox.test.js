'use strict';

/**
 * Repeat a text given number of times.
@param {string} [text='']
@param {number} [repetitions = 1]
@return {string} Repeated text.
*/

const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text * repetitions;
  let repeatedText = '';
  while (true) {
    if (repeatedText.length === finalLength) {
      break;
    }
    repeatedText += text;
  }
  return repeatedText;
};

for (const solution of [repeatString]) {
  describe(`${solution.name}: should repeat a text given number of times`, () => {
    describe('should return the string of repeated text', () => {
      it('"hello" to repeat 3 times should return "hellohellohello"', () => {
        expect(solution('hello', 5).toEqual('hellohellohello'));
      });
    });
  });
}

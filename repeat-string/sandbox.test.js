'use strict';

/**
 * Repeat a text given number of times.
 * @param {string} [text='']
 * @param {number} [repetitions = 1]
 * @returns {string} Repeated text.
 */

const repeatString1 = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (true) {
    if (repeatedText.length === finalLength) {
      break;
    }
    repeatedText += text;
  }
  return repeatedText;
};

const repeatString2 = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (repeatedText.length < finalLength) {
    repeatedText += text;
  }
  return repeatedText;
};

const repeatString3 = (text = '', repetitions = 1) => {
  let repeatedText = '';
  for (let count = repetitions; count > 0; count--) {
    repeatedText += text;
  }
  return repeatedText;
};

const repeatString4 = (text = '', repetitions = 1) => {
  let repeatedText = '';
  let count = 0;
  while (count < repetitions) {
    repeatedText += text;
    count++;
  }
  return repeatedText;
};

for (const solution of [
  repeatString1,
  repeatString2,
  repeatString3,
  repeatString4,
]) {
  describe(`${solution.name}: should repeat a text given number of times`, () => {
    describe('should return the string of repeated text', () => {
      it('"hello" to repeat 3 times should return "hellohellohello"', () => {
        expect(solution('hello', 3)).toEqual('hellohellohello');
      });
    });
  });
}

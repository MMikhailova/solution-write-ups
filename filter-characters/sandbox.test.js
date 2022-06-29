'use strict';

/**
 * @param {string} s any string
 * @returns given string without exclamation mark
 */
const err = 'only strings are allowed';
const removeExclamationMarks1 = (s) => {
  if (typeof s !== 'string') throw new Error(err);
  const result = Array.from(s).filter((element) => {
    return element !== '!';
  });
  return result.join('');
};

const removeExclamationMarks2 = (s) => {
  if (typeof s !== 'string') throw new Error(err);
  let arr = s.split('');
  arr = arr.filter((element) => {
    return element !== '!';
  });
  return arr.join('');
};

const removeExclamationMarks3 = (s) => {
  if (typeof s !== 'string') throw new Error(err);
  return s
    .split('')
    .filter((e) => e !== '!')
    .join('');
};

for (const solution of [
  removeExclamationMarks1,
  removeExclamationMarks2,
  removeExclamationMarks3,
]) {
  const err = 'only strings are allowed';
  describe(`${solution.name}:should remove exclamation marks from the input string`, () => {
    describe('should throw the error if input is not a string', () => {
      it('input is a number', () => {
        expect(() => solution(3)).toThrowError(err);
      });
      it('input is an object', () => {
        expect(() => solution([1, 2, 3]).toThrowError(err));
      });
      it('input is null', () => {
        expect(() => solution(null)).toThrowError(err);
      });
      it('input is undefined', () => {
        expect(() => solution(undefined)).toThrowError(err);
      });
    });
    describe('should return input string without exclamation marks', () => {
      it('"H!H!H!"--->"HHH"', () => {
        expect(solution('H!H!H!')).toEqual('HHH');
      });
      it('"!!!"--->""', () => {
        expect(solution('!!!')).toEqual('');
      });
    });
    describe('should return unchanged input if it does not contain any exclamation marks', () => {
      it('"hello"--->"hello"', () => {
        expect(solution('hello')).toEqual('hello');
      });
    });
  });
}

'use strict';

/**
 * addArray() combines "summing" two arrays of equal length.
@param {Array} [arr1] - array of strings or numbers
@param {Array} [arr2] - array of strings or numbers
@return {Array} new array of combined "summed" arguments
*/

const map1 = (array1, array2) => {
  if (array1.length !== array2.length) throw new Error();
  return array1.map((_, i) => array1[i] + array2[i]);
};

const map2 = (array1, array2) => {
  if (array1.length !== array2.length) throw new Error();
  return array1.map((v, i) => v + array2[i]);
};

const reduce = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error();
  }
  return arr1.reduce((newArray, num, i) => {
    newArray.push(num + arr2[i]);
    return newArray;
  }, []);
};
for (const solution of [reduce, map1, map2]) {
  describe(`${solution.name}:should combine two given arrays of equal length in a new one, throw an error if its lengths are not equal`, () => {
    describe('arrays of the same length with either numbers or strings', () => {
      it('Passed arrays of numbers should return new summed array', () => {
        expect(solution([1, 2, 3, 4], [2, 1, 3, 5])).toEqual([3, 3, 6, 9]);
      });
      it('Passed arrays of strings should return new array with concatenated strings', () => {
        expect(solution(['h', 'h', 'a', 'y'], ['i', 'ow', 're', 'ou'])).toEqual(
          ['hi', 'how', 'are', 'you'],
        );
      });
    });
    describe('has no side-effects', () => {
      it('returns a new array', () => {
        const argument1 = [1, 2, 3, 4];
        const argument2 = [1, 1, 1, 1];
        expect(solution(argument1, argument2) === argument1).toEqual(false);
        expect(solution(argument1, argument2) === argument2).toEqual(false);
      });
      it('does not modify the original array', () => {
        const argument1 = [1, 2, 3, 4];
        const argument2 = [1, 1, 1, 1];
        solution(argument1, argument2);
        expect(argument1).toEqual([1, 2, 3, 4]);
        expect(argument2).toEqual([1, 1, 1, 1]);
      });
    });
    describe('throw an error when input arrays are not of the same length', () => {
      it('input arrays have different length', () => {
        expect(() => solution([1, 2, 3], [1, 2])).toThrowError();
      });
      it('input arrays consist of strings and have different length', () => {
        expect(() => solution(['hi', 'why', 'buy'], ['cry'])).toThrowError();
      });
    });
  });
}

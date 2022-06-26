'use strict';

/*
Adds up all numbers from 1 to the given number
@param {number} number
@return {sum} number
*/
const addUp = (num) => {
  if (num < 0) {
    throw new Error();
  } else {
    let sum = 0;
    for (let i = 1; i < num + 1; i++) {
      sum += i;
    }
    return sum;
  }
};

for (const solution of [addUp]) {
  describe(`${solution.name}:adds up all numbers until a given number`, () => {
    describe('the natural numbers', () => {
      it('3 should return 6', () => {
        expect(solution(3)).toEqual(6);
      });
      it('1000 should return  500500)', () => {
        expect(solution(1000)).toEqual(500500);
      });
      describe('negative numbers', () => {
        it('-3 should throw error ', () => {
          expect(() => solution(-3)).toThrowError();
        });
      });
    });
  });
}

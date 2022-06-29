# [Remove exclamation marks](https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef)

Function RemoveExclamationMarks removes all exclamation marks from a given string.
If input is not a string an error should occur.

## Syntax

> RemoveExclamationMarks(`string`) -> `string`

### Parameters

**string**: `string`


### Return Value: `string`

**return** `modified string`

## Test Cases

My tests from sandbox:

```js
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
```

Test cases from the original challenge:

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    assert.strictEqual(removeExclamationMarks("Hello World!!!"), "Hello World");
    assert.strictEqual(removeExclamationMarks("Hi! Hello!"), "Hi Hello");
  })
  
  it("Random tests", () => {

    function solution(s) {
      return s.replace(/!/g, '');
    }

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz";
    const getRandomString = () => Array.from({ length: 10 }).map(x => abc[~~(Math.random() * abc.length)]).join('');

    let rs = getRandomString() + '!' + getRandomString() + ' ' + getRandomString() + '!' + getRandomString();
    assert.strictEqual(removeExclamationMarks(rs), solution(rs), `Testing for s = ${JSON.stringify(rs)}`);
    });
});
  ```

## Use Cases

Only string input is expected. 

```js
const input = 'H!H!H!';
console.log(removeExclamationMarks(input)); // 'HHH'
```

Otherwise an error occurs.

```js
const input = 'null';
console.log(removeExclamationMarks(input)); // Error('only strings are allowed')
```

---

## Retrospective

I found many interesting solutions for this challenge.
Also I have studied filter(), join() and split() method and how to combine them 
in one expression.

### Continue Doing

Analyze solutions and them reproduce them so they work likewise.

### Start Doing


### Stop Doing

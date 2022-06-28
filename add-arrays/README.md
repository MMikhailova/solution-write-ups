# [add-arrays](https://www.codewars.com/kata/5865a75da5f19147370000c7/solutions)

  The addArrays() function combines two arrays of equal length,  
  summing each element of the first with the corresponding element of the second.  
  Returning the combined "summimg" array.  
  Throw an error in case the arguments are not of equal length.


## Syntax

> addArray(`array1`,`array2`) -> `newArray`

### Parameters

**arr1**: `array <strings> or <numbers>`
**arr2**: `array <strings> or <numbers>`
**return** `newArray <strings> or <numbers>`

### Return Value: `array`

`newArray <strings> or <numbers>`

## Test Cases

My tests from sandbox:

```js
describe(`${solution.name}:should combine two given arrays of equal length in a new one,  
 throw an error if its lengths are not equal`, () => {
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
```

Test cases from the original challenge:

```js
describe("testing addArrays()",function(){
  it("should properly handle example test case",function(){
    Test.assertSimilar(addArrays([1,2],[4,5]),[5,7]);
    Test.assertSimilar(addArrays(["a"],["b"]),["ab"], "Should work with strings as well");
  });
  
  it("should raise error with improper array length input",function(){
    Test.expectError("Should raise an error when arguments are of varying length",function(){
      addArrays([1,2,3],[4,5])
    });
    Test.expectError("Should raise an error when arguments are of varying length",function(){
      addArrays([1],[4,5])
    });
  });
  
  it("should accept empty arrays",function(){
    Test.assertSimilar(addArrays([],[]),[], "Should allow for empty arrays as input");
    Test.expectNoError(function(){
        addArrays([],[])
      });
  });
  ```

## Use Cases

We expect array input to either contain numbers or strings only.
However arrays can contain any and all types of data, there are many user cases to test.
Here are three main user cases:

Array input are numbers only and have equal length.

```js
const array1 = [1,2];
const array2 = [4,5];
console.log(addArray(array1,array2)); // [5,7]
```

Array input are strings only and have equal length.

```js
const array1 = ["h","f"];
const array2 = ["i","ive"];
console.log(addArray(array1,array2)); // ["hi","five"]
```

Array input are numbers only and have **unequal** length.

```js
const array1 = [1,2];
const array2 = [4,5,6];
console.log(addArray(array1,array2)); // error
```

---

## Retrospective

I have learned reduce() method that runs a function on each array element  
to produce (reduce it to) a single value.
Using of this method make your code shorter and clearer.
This video helped me studying the method:
[video](https://www.youtube.com/watch?v=Wl98eZpkp-c)


### Continue Doing

Testing more cases to cover all possible bugs.

### Start Doing

### Stop Doing

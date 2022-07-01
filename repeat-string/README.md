# [addUp](https://edabit.com/challenge/4gzDuDkompAqujpRi)

<!--
  This function adds up all numbers from 1 to the given number.
  It takes a number as an argument.

  This function represents summation notation and can be used to perform statistical analysis of biological data. 
-->

## Syntax

> addUp(`number`) -> `number`

### Parameters

**num**: `number`

<!--
  Any natural numbers
-->

### Return Value: `number`

<!--
  Any natural numbers
-->

## Test Cases
<!--Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)
Test.assertEquals(addUp(738), 272691)
Test.assertEquals(addUp(100), 5050)
Test.assertEquals(addUp(925), 428275)
Test.assertEquals(addUp(1), 1)
Test.assertEquals(addUp(999), 499500)
Test.assertEquals(addUp(175), 15400)
Test.assertEquals(addUp(111), 6216)
<!--
  copy in the test cases from the original challenge
-->
```js for (const solution of [addUp]) {
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
```
## Use Cases

```js
const number = 3;
const sumUp = addUp(number);
console.log(sumUp); // 6
```
```js
const number = -1;
const sumUp = addUp(number);
console.log(sumUp); // error
```

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

---

## Retrospective
I would like to test more cases.
Be careful with brackets.

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

### Continue Doing
Testing more cases
### Start Doing

### Stop Doing

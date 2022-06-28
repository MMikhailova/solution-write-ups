
# [map-method-1](/1-remix/parsons-problems/add-arrays/map-method-1.js)

```js
const map1 = (array1, array2) => {
  if (array1.length !== array2.length) throw new Error();
  return array1.map((_, i) => array1[i] + array2[i]);
};
```

## Strategy

The function takes two arguments (arrays).  
If they are not the same length an error occurs.  
Function iterates first array, sums or concatenates with the value of
the correspondent element of second array then stores the new value in a new array.
The function does not change input arrays.

## Implementation

This solution uses the <span style="color:red"> map()</span> method.  
Syntax:```array.map(function(currentValue, index, arr), thisValue)```.  
The <span style="color:red"> map()</span> method creates a new array by performing
a function on each array element.

1. Two arguments (array1 and array2) are passed to the function.
2. Input array lengths are calculated and compared. An error occurs if arrays are
not of equal length.
3. The call back function `(_,i)=>array1[i]+array2[i]` is run for each element of array1.
4. Returned values are stored in new array.

P.S. only one argument (i-index) is passed to the call back function.

## Possible Refactors

1. Two arguments can be passed into the call back function:

  ```js
  (v,i) => v + array2[i]
  ```

  where "v" is a currentValue of array1 and "i" is index of the current element.  
2. <span style="color:red"> reduce()</span> and `push` methods can be used.  
3. ```for``` loop along with `push` method can bring the same result but the code  
 would be longer.

## References

Studying the solution helped me understand the <span style="color:red"> map()</span> method.  
[user7605847 at codewars.com](https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286)

# [map-method-2](https://www.codewars.com/users/xenos908@gmail.com)

```js
const map2 = (array1, array2) => {
  if (array1.length !== array2.length) throw new Error();
  return array1.map((v, i) => v + array2[i]);
};
```

## Strategy

The same strategy as in the [solution above](#map-method-1) is applied.
Except two arguments are passed into call back function (currentvalue, index).

## Implementation

The same solution as one above but two arguments passed into call back function (v,i)
inside the map method. Where "v" is a currentValue of array1 and "i" is index of
 the current element.

## Possible Refactors

1. <span style="color:red"> reduce()</span> and `push` methods can be used.
2.  ```for``` loop along with `push` method can bring the same result but the code  
 would be longer.

## References

On the example of this solution I understood how to modify
 <span style="color:red"> map()</span> method so it fits your goals.

# [reduce](/1-remix/parsons-problems/add-arrays/reduce-method.js)

```js
const reduce = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error();
  }
  return arr1.reduce((newArray, num, i) => {
    newArray.push(num + arr2[i]);
    return newArray;
  }, []);
};
```

## Strategy

This solution is more complex so I tried to break it into steps:

1. Only input arrays of the equal length are expected so we compare the arrays first.
2. Iterating elements in the first array and add up/ concatenate
 the corespondent elements of the second array.
3. Store summed elements in a new array to avoid side-effect.

## Implementation

For this solution  <span style="color:red"> reduce()</span> and <span style="color:red"> push()</span>  methods are used.

Syntax:
```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

- In the first `if` scope the lengths of the arrays are compared. 
An error occurs when the arrays are not of equal length.
- Then <span style="color:red"> reduce()</span> method runs a function 
  on each array element to produce (reduce it to) a single value.
  The method has two parameters: 
   1. a function:  
   ```js 
   (newArray, num, i) => {
    newArray.push(num + arr2[i]);
    return newArray;
  }
  ```
  2. and an initialValue: `[]`
- The call back function has three arguments: 
  1. `newArray` that is an empty array in this case
  2. `num` iterated element of the array1
  3.  `i` index of the element
- Then a value of the element with the same index but in array2 is added up to the iterated element in array1.
- Each summed value is then stored in a newArray by pushing new values to it.
  
## Possible Refactors

1. <span style="color:red"> map()</span> can be used.
2.  ```for``` loop along with `push` method can bring the same result but the code  
 would be longer.

## References

I think this solution is too complex for this challenge so I would prefer to use  
<span style="color:red"> map()</span> metod instead.  
However I have figured out how to use reduce() method. I think it works well when
 we need to get single value as a result of running call back function.


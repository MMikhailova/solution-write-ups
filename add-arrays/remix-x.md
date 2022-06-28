# Remix 

My solution:
```js
const reduce = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error();
  }
  return arr1.reduce((newArray,num, i) => {
    newArray.push(num + arr2[i]);
    return newArray;
  }, []);
};
```


[This solution](/1-remix/parsons-problems/add-arrays/reduce-method.js)inspired
me to use reduce() method for add-arrays challenge.


Although my solution is pretty long and not the smartest one 
([map-method-2](https://www.codewars.com/users/xenos908@gmail.com) is the smartest)
, it works perfectly and all steps are more understandable.


## Implementation

Since I wanted to get used to reduce() method, I decided to implement this solution.
## Possible Refactors

1. <span style="color:red"> map()</span> can be used.
2.  ```for``` loop along with `push` method can bring the same result but the code  
 would be longer.

## References
Great video that explained reduce() method  
[video](https://www.youtube.com/watch?v=Wl98eZpkp-c)
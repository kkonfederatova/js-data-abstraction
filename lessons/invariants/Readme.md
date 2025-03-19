Implement an abstraction for working with rational numbers, including the following functions:

- Constructor `makeRational()` - takes a numerator and a denominator as input, returns a fraction as an object.
- Selector `getNumer()` - returns the numerator
- Selector `getDenom()` - returns the denominator
- Addition `add()` - adds the passed fractions
- Subtraction `sub()` - finds the difference between two fractions
Don't forget to implement fraction normalization in a way that is convenient for you.


```javascript
const rat1 = makeRational(3, 9);
getNumer(rat1); // 1
getDenom(rat1); // 3

const rat2 = makeRational(10, 3);

const rat3 = add(rat1, rat2);
ratToString(rat3); // '11/3'

const rat4 = sub(rat1, rat2);
ratToString(rat4); // '-3/1'
```

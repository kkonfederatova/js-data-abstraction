In this problem, tests are written for segments, which in turn use points. Your task is to implement interface functions for working with points. The internal representation of points must be based on a polar coordinate system, although the interface assumes working with a Cartesian system (from the outside). Integers are used to denote coordinates.

## points.js

Implement the point interface functions:

- `getX(point)`
- `getY(point)`

```javascript
const x = 4;
const y = 8;

// point stores data in polar coordinates
const point = makePoint(x, y);

// Here the transformation from polar to Cartesian occurs
getX(point); // 4
getY(point); // 8
```

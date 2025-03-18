Implement an abstraction (set of functions) for working with rectangles whose sides are always parallel to the axes. The rectangle can be located anywhere in the coordinate plane.

In this setting, it is enough to know only three parameters to uniquely define a rectangle on the plane: the coordinates of the upper left point, the width and the height. Knowing them, we can always construct a rectangle in one single way.

      y
      |
    4 |    point  width
      |      *-------------
    3 |      |            |
      |      |            | height
    2 |      |            |
      |      --------------
    1 |
      |
------|--------------------------- x
    0 |  1   2   3   4   5   6   7
      |
      |
      |

      
Main interface:

- `makeRectangle(point, width, height)` (constructor) – creates a rectangle. Accepts parameters: left-upper point, width and height. Width and height are positive numbers

- Selectors `getStartPoint(rectangle)`, `getWidth(rectangle)` and `getHeight(rectangle)`

- `containsOrigin(rectangle)` – checks whether the origin of coordinates belongs to the rectangle (not lies on the border of the rectangle, but is inside). To verify this, it is enough to check that all the vertices of the rectangle lie in different quadrants (they can be calculated at the time of checking).

Export functions `makeRectangle(point, width, height)`, `containsOrigin(rectangle)`, `getStartPoint(rectangle)`, `getWidth(rectangle)` and `getHeight(rectangle)`.


```javascript
// Create a rectangle:
// p - top left point
// 4 - width
// 5 - height
//
// p 4
// -----------
// |         |
// |         | 5
// |         |
// -----------

p = makeDecartPoint(0, 1);
rectangle = makeRectangle(p, 4, 5);

containsOrigin(rectangle); // false
getWidth(rectangle); // 4

rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
containsOrigin(rectangle2); // true
```

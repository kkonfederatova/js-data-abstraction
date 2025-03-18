A segment is another graphic primitive. In the code, it is described by a pair of points, one of which is the beginning of the segment, the other is the end. A regular segment has no direction, so you are free to choose which point is considered the beginning and which is the end.

In this task, you need to create abstractions yourself and decide how they will be implemented. Let me remind you that this can be done in different ways and there is no one correct way.

## segments.js

Implement and export the following functions:

- `makeSegment()`. Takes two points as input and returns a segment.
- `getMidpointOfSegment()`. Takes a segment as input and returns the point at the midpoint of the segment.
- `getBeginPoint()`. Takes a segment as input and returns the start point of the segment.
- `getEndPoint()`. Takes a segment as input and returns the end point of the segment.

```javascript
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
segment = makeSegment(beginPoint, endPoint);

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)
```

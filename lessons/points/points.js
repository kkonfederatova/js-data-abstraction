export default (p1, p2) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
  }
interface coordinate {
    x: number;
    y: number;
}
declare const getbezierpos: (p1: coordinate, p2: coordinate, t: number) => coordinate[];

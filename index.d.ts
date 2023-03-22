interface coordinate {
    x: number;
    y: number;
}
declare const getbezierpos: (p1: coordinate, p2: coordinate, t: number) => coordinate;
declare const getapproximate_ease: (p1: coordinate, p2: coordinate, v: number, accuracy: number) => number;

exports.__esModule = true;
var getbezierpos = function (p1, p2, t) {
    var temp1 = [{ x: 0, y: 0 }, p1, p2, { x: 1, y: 1 }];
    var temp2 = [];
    var len = temp1.length - 1;
    for (var i = len; i > 0; i--) {
        for (var ii = 0; ii < i; ii++) {
            temp2.push({
                x: (1 - t) * temp1[ii].x + t * temp1[ii + 1].x,
                y: (1 - t) * temp1[ii].y + t * temp1[ii + 1].y
            });
        }
        temp1 = [];
        for (var ii = 0; ii < i; ii++) {
            temp1.push(temp2[ii]);
        }
        temp2 = [];
    }
    return temp1[0];
};
var getapproximate_ease = function (p1, p2, v, accuracy) {
    if (v == 0) {
        return 0;
    }
    if (v == 1) {
        return 1;
    }
    var minimum = 0;
    var maximum = 1;
    var i = 0.5;
    while (true) {
        var val_1 = getbezierpos(p1, p2, (minimum + maximum) / 2);
        if (Math.abs(v - val_1.x) < (1 / accuracy)) {
            return (maximum + minimum) / 2;
        }
        if (val_1.x > v) {
            maximum -= i;
        }
        if (val_1.x < v) {
            minimum += i;
        }
        if (val_1.x == v) {
            return val_1.y;
        }
        i /= 2;
    }
};
var val = "";
for (var i = 0; i < 100; i++) {
    var value = getapproximate_ease({ x: 0.8, y: 0 }, { x: 0.2, y: 1 }, i / 100, 100);
    val = val + value + ",";
}
const canvas=document.getElementById("canvas");
if(canvas.getContext){
    ctx = canvas.getContext("2d");
    ctx.beginPath();
}
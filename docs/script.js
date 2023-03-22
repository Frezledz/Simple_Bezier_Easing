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
        var val = getbezierpos(p1, p2, (minimum + maximum) / 2);
        if (Math.abs(v - val.x) < (1 / accuracy)) {
            return val.y;
        }
        if (val.x > v) {
            maximum -= i;
        }
        if (val.x < v) {
            minimum += i;
        }
        if (val.x == v) {
            return val.y;
        }
        i /= 2;
    }
};

let p1={ x: 0.8, y: 0 };
let p2={ x: 0.2, y: 1 };
const values = document.querySelector(".coordinate");
window.onload=()=>{
    const canvas=document.getElementById("canvas");
    if(canvas.getContext){
        ctx = canvas.getContext("2d");
        
        let x=0;
        setInterval(() => {
            //draw
            {
            ctx.clearRect(0, 0, 500, 500);
            for(let i=0;i<99;i++){
                //draw bezier curve
                ctx.beginPath();
                const coo1 = getbezierpos(p1, p2, (i)/100);
                const coo2 = getbezierpos(p1, p2, (i+1)/100);
                ctx.moveTo(coo1.x*500, (1-coo1.y)*500);
                ctx.lineTo(coo2.x*500, (1-coo2.y)*500);
                ctx.closePath();
                ctx.stroke();
    
            }
            {
                ctx.beginPath();
                ctx.moveTo(x*500,0);
                ctx.lineTo(x*500,500);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                const y=getapproximate_ease(p1, p2, x,1000);
                ctx.arc(x*500, (1-y)*500, 10, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.stroke();
                //show values
                values.innerText=`ポインター1:(${p1.x},${p1.y}),ポインター2:(${p2.x},${p2.y})\n
                x:${Math.floor(x*1000)/1000},y:${Math.floor(y*1000)/1000}`;
            }
        }
            x=(x+0.01)%1;
        }, 30);
        
    }

}
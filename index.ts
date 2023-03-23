interface coordinate{
    x:number,
    y:number
}
const getbezierpos=(p1:coordinate,p2:coordinate,t:number):coordinate=>{
    let temp1:coordinate[]=[{x:0,y:0},p1,p2,{x:1,y:1}];
    let temp2:coordinate[]=[];
    const len = temp1.length-1;
    
    for(let i=len;i>0;i--){
        for(let ii=0;ii<i;ii++){
            temp2.push({
                x:(1-t)*temp1[ii].x+t*temp1[ii+1].x,
                y:(1-t)*temp1[ii].y+t*temp1[ii+1].y
            });
        }
        temp1=[];
        for(let ii=0;ii<i;ii++){
            temp1.push(temp2[ii]);
        }
        temp2=[];


    }
    return temp1[0];
}
const getapproximate_ease = (p1:coordinate,p2:coordinate,v:number,accuracy:number):number=>{
    if(v==0){
        return 0;
    }
    if(v==1){
        return 1;
    }
    let minimum:number=0;
    let maximum:number=1;
    let i=0.5;
    
    while(true){
        const val:coordinate = getbezierpos(p1,p2,(minimum+maximum)/2);
        if(Math.abs(v-val.x)<(1/accuracy)){
            return val.y;
        }
        if(val.x>v){
            maximum-=i;
        }
        if(val.x<v){
            minimum+=i;
        }
        if(val.x==v){
            return val.y;
        }
        i/=2;
        
    }

}
const ssa = (num,min,max)=>{
    if(num==min){
        return min;
    }
    if(num==max){
        return max;
    }
    let minimum=min;
    let maximum=max;
    let i=(min+max)/2;
    while(true){
        if(Math.abs(num-minimum)<Math.abs(num-maximum)){
            maximum-=i;
        }else if(Math.abs(num-minimum)==Math.abs(num-maximum)){
            return (maximum+minimum)/2;
        } else{
            minimum+=i;
        }
        if(Math.abs(maximum-num)<0.0001){
            return Math.abs((minimum+maximum)/2);
        }
        i/=2;

    }
}
console.log(ssa(0.734,0,2.2));
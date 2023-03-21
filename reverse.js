function reverse(string){
    let oldlist =[];
    for(let i=0;i<string.length;i++){
        oldlist.push(string.charAt(i));
    }
    let newlist=[];
    for(let i=oldlist.length-1;i>-1;i--){
        newlist.push(oldlist[i]);
    }
    let reversed ="";
    for(let i=0;i<newlist.length;i++){
        reversed=reversed+newlist[i];
    }
    return reversed;
}
console.log(reverse("donkey"));
let a=5;
let b=15;
let c=10;
if(a<=b && a<=c){
    if(b<=c){
        console.log(a,b,c)
    }

}
else{
    console.log(a,c,b)
}
if(b<=a && b<=c)
{
    if(a<=c){
        console.log(b,a,c)
    }

else{
    console.log(a,c,b)
}
}
else {
    if(a<=b){
console.log(a,c,b)
    }
    else{
        console.log(a,b,c)
    }
}
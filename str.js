let n=153;
let a=n;
let sum=0;
while(n>0){
    let s=n%10;
    sum=sum+s*s*s;
    n=Math.floor(n/10);
}
    if(sum==a){
        console.log("armstrong number")
}
else{
    console.log("not armstrong num")
}
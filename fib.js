let n = 10;
let a = 0, b = 1, c = 0;

while (c< n) {
    console.log(a);
    let m= a + b;
    a = b;
    b = m;
    c++;
}

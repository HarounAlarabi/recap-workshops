



function printTimesTables(n) {
    let count = 1;
    n=5;

    while(count <= 12) {
        const product = n * count;
        console.log(` ${count}* ${n} = ${product}`);
        count++;
    }
}
printTimesTables();


function printFibonnacci() {
    let x = 0, y = 1, z;
    for (let i = 0; i < 10; i++) {
        console.log(x);
        z = x + y;
        x = y;
        y = z;
    }
}

printFibonnacci();
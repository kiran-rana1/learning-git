function isPrime(params) {
    for (let i = 0; i <= params; i++) {
        if (params % i == 0) {
            return false
        }
    }

    return true

}


for (var i = 0; i < 100; i++) {
    if (isPrime(i)) console.log(i);
}

// printEvenNum(100)
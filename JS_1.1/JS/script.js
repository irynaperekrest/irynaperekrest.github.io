function pow(x, n) {
    var x = prompt('Enter x value');
    var n = prompt('Enter n value');
    var result = 1;
    for (var i = 0; i < Math.abs(n); i++) {
        result *= x;

    }


    if (n > 0) {
        console.log(result);
    } else {
        console.log(1 / result);
    }
}

pow();

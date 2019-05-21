module.exports = function () {
    console.log('02- Even Fibonacci numbers');
    // 1, 2, 3, 5, 8, 13 = 10
    console.log('   Test: ', sumaFibonacciPares(6) === 10 ? 'OK' : 'ERROR');
    console.log('   Total: ', sumaFibonacciPares(4000000));

    function sumaFibonacciPares(max) {
        let ultimo = 0;
        let anteUltimo = 0;
        let total = 0;
        let i = 0;
        while (ultimo < max) {
            if (i === 0) {
                ultimo = 1;
            } else if (i === 1) {
                anteUltimo = 1;
                ultimo = 2;
            } else {
                const serie = [anteUltimo, ultimo];
                anteUltimo = ultimo;
                ultimo = serie[serie.length - 2] + serie[serie.length - 1];
            }

            if (ultimo % 2 === 0) {
                total += ultimo;
            }
            i++
        }
        return total;
    }

    function fibonacci(terms) {
        let serie = [];
        for (let i = 0; i < terms; i++) {
            let item = 1;
            if (serie.length === 1) {
                item = 2;
            }
            else if (serie.length >= 2) {
                item = serie[serie.length - 2] + serie[serie.length - 1];
            }
            serie.push(item);
        }

        return serie;
    }
};
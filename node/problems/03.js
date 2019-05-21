module.exports = function () {
    console.log('03- Largest prime factor');
    // [ 5, 7, 13, 29 ] => 29
    console.log('   Test: ', lagestPrimeFactor(13195) === 29 ? 'OK' : 'ERROR');
    console.log('   Total: ', lagestPrimeFactor(600851475143));

    function lagestPrimeFactor(number) {
        const lista = primeFactors(number);

        let total = 1;
        lista.forEach(e => {
            total *= e
        });
        if (total !== number) {
            console.log(`        ERROR: ${number} != ${lista.join('*')}`);
        }

        return Math.max.apply(null, lista);
    }

    function primeFactors(number) {
        let lista = [];

        for (let i = 2; i <= number; i++) {
            // si number es múltiplo de i y además i es primo
            if (number % i === 0 && isPrime(i)) {
                lista.push(i);
                number = number / i;
                i = 1;
            }
        }

        return lista;
    }

    function isPrime(number) {
        let isPrime = number % number === 0 && number % 1 === 0;
        let i = 2;
        while (isPrime && i <= number) {
            if (i !== number && number % i === 0) {
                isPrime = false;
            }
            i++;
        }
        return isPrime
    }
};
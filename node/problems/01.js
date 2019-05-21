module.exports = function () {
    console.log('01- Multiples of 3 and 5');
    console.log('   Test: ', sumaMultiplos([3, 5], 10) === 23 ? 'OK' : 'ERROR');
    console.log('   Total: ', sumaMultiplos([3, 5], 1000));

    function sumaMultiplos(multiplos, hasta) {
        let total = 0;
        for (let i = 0; i < hasta; i++) {
            if (isMod(i, multiplos)) {
                total += i;
            }
        }

        return total;
    }

    function isMod(i, multiplos) {
        let resp = false;
        multiplos.forEach(e => {
            if (i % e === 0) {
                resp = true;
            }
        });
        return resp;
    }
};


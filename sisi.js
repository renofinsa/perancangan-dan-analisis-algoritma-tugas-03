const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("+=========================================+");
console.log("| NIM: 2411601129                         |");
console.log("| Nama: Reno Finsa Albi                   |");
console.log("| Program untuk menentukan jenis segitiga |");
console.log("| dari tiga panjang sisi                  |");
console.log("+=========================================+\n");

function determineTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Sama Sisi";
    } else if (a === b || a === c || b === c) {
        return "Sama Kaki";
    } else {
        return "Sembarang";
    }
}

function askForNumbers() {
    rl.question('Masukkan tiga bilangan bulat sebagai panjang sisi segitiga (pisahkan dengan spasi): ', (input) => {
        const numbers = input.split(' ').map(Number);
        if (numbers.length !== 3) {
            console.log('Harap masukkan tepat tiga bilangan!');
            return askForNumbers();
        }

        const [a, b, c] = numbers;
        const triangleType = determineTriangleType(a, b, c);
        console.log(`\nSisi 1: ${a}`);
        console.log(`Sisi 2: ${b}`);
        console.log(`Sisi 3: ${c}`);
        console.log(`Jenis segitiga: ${triangleType}\n`);
        
        rl.question('Lanjut? (y/t): ', (answer) => {
            if (answer.toLowerCase() === 'y') {
                askForNumbers();
            } else {
                console.log('Terima kasih!');
                rl.close();
            }
        });
    });
}

askForNumbers();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("+=========================================+");
console.log("| NIM: 2411601129                         |");
console.log("| Nama: Reno Finsa Albi                   |");
console.log("| Program untuk mencetak nilai tengah     |");
console.log("| dari tiga buah nilai yang diinput       |");
console.log("+=========================================+\n");

function findMiddleNumber(a, b, c) {
    if ((a > b && a < c) || (a > c && a < b)) return a;
    if ((b > a && b < c) || (b > c && b < a)) return b;
    return c;
}

function askForNumbers() {
    rl.question('Masukkan tiga bilangan bulat (pisahkan dengan spasi): ', (input) => {
        const numbers = input.split(' ').map(Number);
        if (numbers.length !== 3 || new Set(numbers).size !== 3) {
            console.log('Harap masukkan tiga bilangan yang berbeda!, dan tidak lebih dari 3 bilangan');
            return askForNumbers();
        }

        const [a, b, c] = numbers;
        const middle = findMiddleNumber(a, b, c);
        console.log(`\nAngka 1: ${a}`);
        console.log(`\nAngka 2: ${b}`);
        console.log(`\nAngka 3: ${c}`);
        console.log(`Nilai tengah adalah: ${middle}\n`);
        
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

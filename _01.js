function calculator(num1, num2, operator, callback) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return 'Invalid operator';
    }

    callback(result);
}

// Contoh penggunaan calculator dengan callback
function displayResult(result) {
    console.log('Hasil perhitungan: ' + result);
}

calculator(5, 3, '+', displayResult); // Output: Hasil perhitungan: 8
calculator(10, 4, '-', displayResult); // Output: Hasil perhitungan: 6
calculator(6, 2, '*', displayResult); // Output: Hasil perhitungan: 12
calculator(8, 4, '/', displayResult); // Output: Hasil perhitungan: 2
calculator(5, 3, '%', displayResult); // Output: Invalid operator

/*
Pada contoh di atas, kita mendefinisikan
function calculator yang menerima empat parameter:
num1 (bilangan pertama),
num2 (bilangan kedua),
operator (operator aritmatika),
callback (fungsi yang akan dipanggil dengan hasil perhitungan).

Dalam function calculator, kita menggunakan switch statement
untuk menentukan operasi apa yang akan dilakukan berdasarkan nilai operator yang diberikan.
Setelah hasil perhitungan didapatkan, kita memanggil callback dengan hasil tersebut.

Ketika kita memanggil calculator dan menyediakan fungsi displayResult sebagai argumen callback,
fungsi displayResult akan dieksekusi dengan hasil perhitungan sebagai argumen.

*/
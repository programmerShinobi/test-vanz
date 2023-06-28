function solveSudoku(board) {
    if (solve(board)) {
        return board;
    } else {
        return "Tidak ada solusi yang ditemukan.";
    }
}

function solve(board) {
    const emptySpot = findEmptySpot(board);

    // Jika tidak ada spot kosong, maka sudoku selesai
    if (!emptySpot) {
        return true;
    }

    const [row, col] = emptySpot;

    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;

            if (solve(board)) {
                return true;
            }

            // Jika solusi tidak ditemukan, reset nilai ke 0
            board[row][col] = 0;
        }
    }

    // Jika tidak ada angka yang valid, backtrack
    return false;
}

function findEmptySpot(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
}

function isValid(board, row, col, num) {
    // Periksa baris
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num && i !== col) {
            return false;
        }
    }

    // Periksa kolom
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num && i !== row) {
            return false;
        }
    }

    // Periksa group (3x3)
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num && (startRow + i !== row || startCol + j !== col)) {
                return false;
            }
        }
    }

    return true;
}

function createBoard(puzzle) {
    const board = [];
    let index = 0;
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            row.push(parseInt(puzzle.charAt(index)));
            index++;
        }
        board.push(row);
    }
    return board;
}

// Contoh penggunaan
const puzzle = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";
const board = createBoard(puzzle);

const solvedBoard = solveSudoku(board);
if (typeof solvedBoard === 'string') {
    console.log(solvedBoard);
} else {
    console.log("Solusi Sudoku:");
    console.log(solvedBoard);
}

/**
Pada implementasi di atas, kita menggunakan metode backtracking
untuk mencari solusi dari permainan Sudoku.

Fungsi solveSudoku merupakan fungsi utama yang dipanggil untuk menyelesaikan permainan Sudoku.

Fungsi ini akan memeriksa apakah ada solusi yang ditemukan
dan mengembalikan board yang sudah terisi jika ada,
atau mengembalikan pesan bahwa tidak ada solusi yang ditemukan.

Fungsi solve adalah fungsi rekursif yang digunakan untuk mencari solusi Sudoku.

Pada setiap pemanggilan rekursif, fungsi ini mencari spot kosong pada board
dengan menggunakan fungsi findEmptySpot. Jika tidak ada spot kosong lagi,
maka Sudoku selesai dan fungsi solve akan mengembalikan nilai true.

Jika terdapat spot kosong, fungsi solve akan mencoba angka dari 1 hingga 9 pada spot tersebut
dengan memeriksa validitasnya menggunakan fungsi isValid.

Jika angka tersebut valid, maka angka tersebut akan ditempatkan pada spot
dan dilakukan pemanggilan rekursif untuk mencari solusi berikutnya.

Jika solusi ditemukan, maka fungsi solve akan mengembalikan nilai true.

Jika solusi tidak ditemukan, nilai pada spot akan di-reset kembali ke 0
dan dilakukan backtrack untuk mencoba angka lain.

Fungsi findEmptySpot digunakan untuk mencari spot kosong pada board, yaitu spot dengan nilai 0.

Fungsi isValid digunakan untuk memeriksa apakah angka yang akan ditempatkan
pada suatu spot adalah angka yang valid berdasarkan aturan Sudoku.

Fungsi createBoard digunakan untuk mengubah string input puzzle menjadi matriks board.

Setelah fungsi solveSudoku selesai dijalankan,
hasil solusi atau pesan bahwa tidak ada solusi akan dicetak pada konsol.

 */

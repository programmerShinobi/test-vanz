function findDepth(tree, node) {
    const queue = [{ id: node, depth: 1 }];
    let depth = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.depth > depth) {
            depth = current.depth;
        }

        const children = tree.filter(obj => obj.upline === current.id);
        children.forEach(child => {
            queue.push({ id: child.id, depth: current.depth + 1 });
        });
    }

    return depth;
}

// Contoh penggunaan
const tree = [
    { id: 'a', upline: '0' }, // 6
    { id: 'b', upline: 'a' }, // 4
    { id: 'c', upline: 'a' }, // 2
    { id: 'cc', upline: 'a' }, // 5
    { id: 'd', upline: 'b' }, // 3
    { id: 'e', upline: 'b' }, // 1
    { id: 'f', upline: 'c' }, // 1
    { id: 'g', upline: 'c' }, // 1
    { id: 'gg', upline: 'cc' }, // 4
    { id: 'h', upline: 'd' }, // 2
    { id: 'i', upline: 'd' }, // 1
    { id: 'ii', upline: 'gg' }, // 3
    { id: 'j', upline: 'h' }, // 1
    { id: 'k', upline: 'h' }, // 1
    { id: 'hh', upline: 'ii' }, // 2
    { id: 'kk', upline: 'hh' } // 1
];

// console.log(findDepth(tree, 'a')); // Output: 6
// console.log(findDepth(tree, 'cc')); // Output: 5
console.log(findDepth(tree, 'e')); // Output: 1

/*
Fungsi findDepth menerima dua parameter: tree (array of objects) yang merepresentasikan tree
dan node (string) yang merupakan ID dari node yang ingin dicari kedalamannya.

Di dalam fungsi findDepth, kita menggunakan pendekatan Breadth-First Search (BFS)
untuk mencari kedalaman node. Kita menggunakan antrian (queue)
untuk melacak node-node yang akan dieksplorasi.

Pada awalnya, kita inisialisasi antrian dengan node awal yang memiliki ID node
dan kedalaman awal 1. Kita juga menginisialisasi variabel depth dengan nilai 0
sebagai kedalaman maksimum yang ditemukan.

Selama antrian tidak kosong, kita mengambil node pertama dari antrian menggunakan shift()
dan simpan ke dalam variabel current.

Jika kedalaman current melebihi depth saat ini,
kita perbarui nilai depth menjadi kedalaman current.
Ini memastikan bahwa kita hanya menyimpan kedalaman terbesar yang telah ditemukan.

Kemudian, kita mencari semua anak-anak dari current dengan memfilter objek tree
yang memiliki upline yang sama dengan ID current. Kita simpan anak-anak ini dalam variabel children.

Untuk setiap anak dalam children, kita tambahkan mereka ke antrian dengan ID anak tersebut
dan kedalaman yang bertambah satu dari kedalaman current.

Proses 4-7 diulang hingga antrian kosong.
Pada titik ini, kita telah mengeksplorasi semua node yang terhubung dengan node awal.

Setelah selesai, kita mengembalikan nilai depth sebagai hasil akhir,
yang merupakan kedalaman maksimum dari node yang dicari.

Di bagian penggunaan contoh, kita membuat sebuah tree yang berisi data
yang diberikan dalam bentuk array of objects.

Kemudian, kita mencetak hasil pemanggilan fungsi findDepth dengan memberikan tree
dan ID node yang ingin dicari kedalamannya. Hasilnya dicetak menggunakan console.log().

Dengan menggunakan pendekatan Breadth-First Search (BFS)
dan menggunakan antrian untuk melacak node-node yang akan dieksplorasi,
kita dapat mencari kedalaman suatu node dalam tree dengan benar.
*/
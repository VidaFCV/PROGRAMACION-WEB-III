const mysql = require('mysql2');
const now = require('performance-now');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '65566317Vida',
    database: 'testdb'
});

let start = now();
connection.connect(err => {
    if (err) throw err;
    console.log('Conexión básica establecida.');

    connection.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        console.log('Usuarios:', results);

        console.log(`Tiempo de ejecución: ${(now() - start).toFixed(3)} ms`);
        connection.end();
    });
});

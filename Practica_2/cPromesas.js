const mysql = require('mysql2/promise');
const now = require('performance-now');

async function main() {
    let start = now();
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '65566317Vida',
            database: 'testdb'
        });
        
        console.log('Conexión con Promesas establecida.');

        const [rows] = await connection.execute('SELECT * FROM users');
        console.log('Usuarios:', rows);

        console.log(`Tiempo de ejecución: ${(now() - start).toFixed(3)} ms`);
        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

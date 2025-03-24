const mysql = require('mysql2/promise');
const now = require('performance-now');

async function main() {
    let start = now();
    try {
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '65566317Vida',
            database: 'testdb',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        console.log('Conexión con Pooling establecida.');

        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM users');
        console.log('Usuarios:', rows);

        // Corregido el console.log con las comillas invertidas
        console.log(`Tiempo de ejecución: ${(now() - start).toFixed(3)} ms`);
        
        connection.release();
        await pool.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

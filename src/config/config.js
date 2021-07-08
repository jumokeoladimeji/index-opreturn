require('dotenv').config();

const config = {
    postgresql: {
        development: {
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            host: process.env.DATABASE_HOST,
            dialect: 'postgres'
        }
    },
    rpcConfig: {
        network: process.env.network, //default is http
        username: process.env.rpcuser,
        password: process.env.rpcpassword,
        version: process.env.bitcoind_version
    },
    zeromqTCP: process.env.zeromqTCP
}

module.exports = config;
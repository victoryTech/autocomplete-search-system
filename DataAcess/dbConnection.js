const sql = require("mssql");
const config = require("../Config/dbConfig.js");

let poolPromise = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let pool = new sql.ConnectionPool(config);
            resolve(await pool.connect());
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = {
    poolPromise: poolPromise,
};
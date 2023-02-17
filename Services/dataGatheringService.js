const autoCompleteDataAcess = require('../DataAcess/autoCompleteDataAcess.js');
const sql = require('mssql');

function insertQuerySqlParameters (parameters) {
    const sqlParameters = [];
    sqlParameters.push({
        name: "input_query",
        type: sql.VarChar,
        value : parameters.input_query
    });
    return sqlParameters;
}

module.exports.insertQuery = async (queryData) => {
    try {
        const sqlParameters = insertQuerySqlParameters(queryData);
        await autoCompleteDataAcess.commonOperation(sqlParameters, 'spInsertQuery');
    } catch (err) {
        console.log('Error from data gathering service layer : ', err);
    }
};

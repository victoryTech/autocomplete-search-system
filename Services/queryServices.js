const autoCompleteDataAcess = require('../DataAcess/autoCompleteDataAcess.js');
const sql = require('mssql');

function fetchQuerySqlParameters (parameters) {
    const sqlParameters = [];
    sqlParameters.push({
        name: "input_prefix_query",
        type: sql.VarChar,
        value : parameters.input_prefix_query
    });
    return sqlParameters;
}


module.exports.fetchQuery = async (queryData) => {
    try {
        const sqlParameters = fetchQuerySqlParameters(queryData);
        const result = await autoCompleteDataAcess.commonOperation(sqlParameters, 'spFetchTop5Query');
        const resultObj = result.recordsets[0];
        const resultArray = resultObj.map(obj => obj.search_query);
        return resultArray;
    } catch (err) {
        console.log('Error from Query service layer : ', err);
    }
};

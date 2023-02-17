const dataGatheringService = require('../Services/dataGatheringService.js');

module.exports = async function (context, req) {
    try {
        context.log('Data Gathering EndPoint...');
        let responseMessage = "Please enter query to search...";
        let statusCode = 400;
        if(req.body) {
            const resultObj = await dataGatheringService.insertQuery(req.body);
            responseMessage = "Query inserted to database.";
            statusCode = 201;
        }
        context.res = {
            status: statusCode,
            body: responseMessage
        };
    } catch (err) {
        console.log('Error in data gathering... ', err);
    }
}
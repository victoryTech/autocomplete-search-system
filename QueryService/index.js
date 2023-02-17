const queryServices = require('../Services/queryServices.js');

module.exports = async function (context, req) {
    
    try {
        context.log('Query Service EndPoint...');

        const responseMessage = await queryServices.fetchQuery(req.params);
        
        context.res = {
            status: 200,
            body: responseMessage
        };
    } catch (err) {
        console.log('Error in data gathering... ', err);
    }
}
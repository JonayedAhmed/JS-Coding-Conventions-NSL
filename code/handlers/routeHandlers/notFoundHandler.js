/*
* Title: Not Found Handler
* Description: 404 Not Found Handler
* Author: Jonayed Ahmed
* Date: 12/06/2021
*/

//module scaffolding

const handler = {}

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'You requested URL was not found'
    })
}

module.exports = handler;
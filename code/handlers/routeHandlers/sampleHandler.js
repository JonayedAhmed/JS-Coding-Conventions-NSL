/*
* Title: Sample Handler
* Description: Sample Handler
* Author: Jonayed Ahmed
* Date: 12/06/2021
*/

//module scaffolding

const handler = {}

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, {
        message: 'This is a sample URL'
    })
}

module.exports = handler;
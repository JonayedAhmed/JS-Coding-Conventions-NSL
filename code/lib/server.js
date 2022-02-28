/*
* Title: Server Library 
* Description: Server related files
* Author: Jonayed Ahmed
* Date: 12/29/2021
*/

//dependencies
const http = require('http')
const {handleReqRes} = require('../helpers/handleReqRes')
const environment = require('../helpers/environments')
const { init } = require('..')



//app-object - module scarfing
const server = {}



//create server
server.createServer = ()=>{
    const createServerVariable = http.createServer(server.handleReqRes)
    createServerVariable.listen(environment.port, ()=>{
        console.log(`Listening to port ${environment.port}`)
    })
}

//handle Request - Response
server.handleReqRes = handleReqRes

//start the server
server.init = () => {
    server.createServer()
}

module.exports = server
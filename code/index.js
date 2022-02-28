/*
* Title: ProjectInitial File
* Description: Initial file to start the node server and workers
* Author: Jonayed Ahmed
* Date: 12/29/2021
*/

//dependencies
const server = require('./lib/server')
const worker = require('./lib/worker')


//app-object - module scarfing
const app = {}

app.init = () =>{
    //start server
    server.init()
    //start the worker
    worker.init()
}

app.init()

module.exports = app

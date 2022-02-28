/*
* Title: Environments
* Description: Handle all environment related things
* Author: Jonayed Ahmed
* Date: 12/07/2021
*/ 

//dependencies

//module scaffholding
const environments = {}

environments.staging = {
    port: 3000,
    envName : 'staging',
    secretKey: 'fsfsdffsdfsdf',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16292170290',
        accountSid: 'AC158d7a39ba95d8177573416749c1dfd6',
        authToken: 'ed2d2145111e865177bf763465fdf967',
    },
}

environments.production = {
    port: 5000,
    envName : 'production',
    secretKey: 'hfhfghfghfghfg',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16292170290',
        accountSid: 'AC158d7a39ba95d8177573416749c1dfd6',
        authToken: 'ed2d2145111e865177bf763465fdf967',
    },
}

//determine which environmet was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging'

//export corresponsing env Object

const environmentToExport = 
    typeof(environments[currentEnvironment] === 'object') 
    ? environments[currentEnvironment] 
    : environments.staging

// export module
module.exports = environmentToExport


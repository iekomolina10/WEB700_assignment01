/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ieko Molina Student ID: 112614227  Date: 05/15/2023
*
********************************************************************************/ 


serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]
serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Ieko Molina", "Student Name: imolina2@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"]

function httpRequest(httpVerb, path){
    for (i=0; i<serverPaths.length; i++){
        if (httpVerb == serverVerbs[i] && path == serverPaths[i]){
            return "200: " + serverResponses[i]
        }
    }
    return "404: Unable to process " + httpVerb + " request for " + path
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests(){
    testVerbs = ["GET","POST"]
    testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]

    function randomRequest(){
        randVerb = testVerbs[getRandomInt(testVerbs.length)]
        randPath = testPaths[getRandomInt(testPaths.length)]
        console.log(httpRequest(randVerb,randPath))
    }
    setInterval(randomRequest, 1000);
}

automateTests();


/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ieko Molina Student ID: 112614227 Date: 06/02/2023
*
********************************************************************************/ 


let {initialize, getAllStudents, getTAs, getCourses} = require("./modules/collegeData.js");

initialize()
    .then(() => {
        getAllStudents()
            .then((student) => {
                console.log(`Successfully retrieved ${student.length} students`)
            })
            .catch((error) => {
                console.log(error);
            });

        getTAs()
        .then((TAs) => {
            console.log(`Successfully retrieved ${TAs.length} TAs`)
        })
        .catch((error) => {
            console.log(error);
        });
        
        getCourses()
        .then((courses) => {
            console.log(`Successfully retrieved ${courses.length} courses`)
        })
        .catch((error) => {
            console.log(error);
        });

    })



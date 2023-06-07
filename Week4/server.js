// Creating a server and using app
var express = require("express")

var app = express()

//Create constant server value
const SERVER_PORT = 8088

// Getting the root URL by creating arrow function
//http://localhost:8088/
app.get("/", (req,res) => {
    res.send("Welcome to WEB-700 Express Server")
})

//http://localhost:8088/hello
app.get("/hello", (req,res) => {
    res.send("<h1>Hello, How are you?<h1>")
})

//http://localhost:8088/student
app.get("/student", (req,res) => {
    const stud = {
        sid: 1,
        fnm: "Ieko",
        lnm: "Molina",
        result: "PASS"
    }
    //response.send(stud)
    //Used to convert java script object to json
    //res.send(JSON.stringify(stud))
    res.json(stud)
})



//Query String to read data
//http://localhost:8088/emp?eid=100&fnm=Ieko&lnm=Molina
app.get("/emp", (req,res) => {
    res.send(`${req.query.eid} - ${req.query.fnm} - ${req.query.lnm}`)
    res.send(req.query)
})

//Path Parameter
//http://localhost:8088/prof/100/Ieko/Molina
app.get("/prof/:pid/:fnm/:lnm", (req,res) => {
    res.send(`${req.params.pid} - ${req.params.fnm} - ${req.params.lnm}`)
    //res.send(req.params)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})


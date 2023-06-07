var express = require("express")
var route = express.Router()

route.get("/faculty", (req,res) => {
    const faculty = {
        fid: 1,
        name: "Ieko",
        city: "Toronto",
        college: "Seneca"
    }
    res.send(faculty)
})

route.post("/fulltimefaculty", (req,res) => {
    const faculty = {
        fid: 2,
        name: "Chester",
        city: "Etobicoke",
        college: "GCB"
    }

    res.setHeader("Content-Type", "application/json")
    res.send(faculty)
})

route.delete("/student", (req, res) => {
    res.status(201).send("<h1>Record Deleted</h1>")
})

route.patch("/student", (req, res) => {
    res.send("<h1>PATCH - Record </h1>")
})

route.delete("/student", (req, res) => {
    res.status(201).send("<h1>DELETE - Record Deleted</h1>")
})

route.put("/student", (req, res) => {
    res.send("<h1>PUT- Record</h1>")
})

module.exports = route
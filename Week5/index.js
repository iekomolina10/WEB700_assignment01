const express = require("express");
const app = express();
const usersRouters = require("./routers/users")
const SERVER_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + SERVER_PORT);
  }

app.use(express.static("./views"))
app.use(express.static("./views/html"))
//using routes
app.use("/users", usersRouters)

//Application Middleware application that sits between server and client
app.use((req,res, next) => {
    console.log("Middleware - 1" + req.url)
    next()
})

app.use("/college", (req,res, next) => {
    console.log("College Middleware - 1" + req.url)
    next()
})

app.get("/", (req, res) => {
res.send("hello world");
});

app.get("/student", (req, res) => {
    res.send("Student");
});

app.listen(SERVER_PORT, onHttpStart);

//http://localhost:8080/users/faculty
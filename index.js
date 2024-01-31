// load the express library
const express = require("express"); 
// create an express application
const app = express(); 
const classesRouter = require("./routes/classes");
const port = 8080; 
app.use(express.json()); 

// create a basic route for just the / path
app.get("/", (req, res) => {
    res.status(200).send(`<h1>Hello World</h1>`);
});

app.get("/aboutMe", (req, res) => {
    res.json({
        name: "Ethan Pineda",
        age: 21,
        hobbies: ["Gaming", "Reading", "Coding"],
    });
});

app.use("/classes", classesRouter);

// now we can start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
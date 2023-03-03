import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
    res.json({ 
        Name: "Naitik Sharma",
        email: "snaitik0238@gmail.com",
        College: "Arya College of Engineering & IT",
        Gender: "male",
        Contact: 7003278402,
    
     })
})

app.listen(9000, () => {
    console.log(`starting server at port ${port}`);
})
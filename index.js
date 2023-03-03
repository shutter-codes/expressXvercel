import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
    res.json({ 
        Name: "Naitik Sharma",
        email: "snaitik0238@gmail.com",
        College: "Arya College of Engineering & IT",
        Gender: "male"
    
     })
})

app.listen(9000, () => {
    console.log(`starting server at port ${port}`);
})
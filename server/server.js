require('dotenv').config()

const express = require('express')
const app = express


app.get("/", (req, res) => {
    console.log("test")
})

app.listen(3000)

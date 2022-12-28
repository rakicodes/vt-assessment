const express = require('express');
const dotenv = require('dotenv').config(); 
const PORT = process.env.PORT || 2525;

const blogRoutes = require("./routes/blog")


const app = express();

app.use("/api/blog", blogRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
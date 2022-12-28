const express = require('express');
const dotenv = require('dotenv').config(); 
const cors = require('cors')
const PORT = process.env.PORT || 2525;

const blogRoutes = require("./routes/blog")

const app = express();
app.use(cors())


app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
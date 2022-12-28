export {}

const express = require('express'); 
const router = express.Router();

const { getBlogs } = require("../controllers/blog")

router.get("/", getBlogs);

module.exports = router;


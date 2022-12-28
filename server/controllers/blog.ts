import { Request, Response } from 'express';

const LIMIT: number = 6;

const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,
  ssl: true
})

// @desc    get posts
// @route   GET /api/blogs 
// @access  Public
const getBlogs = async (req: Request, res: Response) => {
    const currPage: string = req.query.page ? req.query.page.toString() : '1'

    const offset: number = (parseInt(currPage)-1) * LIMIT;

    const queryOrders: string = `SELECT * FROM blogs WHERE published_at IS NOT NULL ORDER BY published_at DESC LIMIT ${LIMIT} OFFSET ${offset};`;
    pool.query(queryOrders, (error: any, results: any) => {
        if(error) {
            throw error
        }
        const blogs = results.rows;
        res.status(200).json(blogs)
    })
}

module.exports = {
    getBlogs
}
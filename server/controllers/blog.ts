import { Request, Response } from 'express';

type Page = {
    blogs: any;
    pages: number;
    previous: boolean;
    next: boolean;
}

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

// @desc    get blogs
// @route   GET /api/blogs 
// @access  Public
const getBlogs = async (req: Request, res: Response) => {
    const currPage: string = req.query.page ? req.query.page.toString() : '1'

    const offset: number = (parseInt(currPage)-1) * LIMIT;

    const queryOrders: string = `SELECT *, count(*) OVER() AS full_count FROM blogs WHERE published_at IS NOT NULL ORDER BY published_at DESC LIMIT ${LIMIT} OFFSET ${offset};`;
    pool.query(queryOrders, (error: any, results: any) => {
        if(error) {
            throw error
        }

        let pageData: Page = {
            blogs: results.rows,
            pages: results.rows.length > 0 ? Math.ceil(results.rows[0].full_count / LIMIT) : 0,
            previous: parseInt(currPage)-1 > 0,
            next: results.rows.length > 0 && parseInt(results.rows[0].full_count) > (offset+LIMIT)
        }

        res.status(200).json(pageData)
    })
}

module.exports = {
    getBlogs
}
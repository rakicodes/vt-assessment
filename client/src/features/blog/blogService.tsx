import axios from 'axios';

const API_URL = 'http://localhost:8000/api/blogs'

// Get all blogs
const getBlogs = async (page: any) => {
    const response = await axios.get(`${API_URL}?page=${page}`)

    return response.data
}

// Get blog
const getBlog = async (slug: any) => {
    const response = await axios.get(`${API_URL}/${slug}`)

    return response.data
}

const blogService = {
    getBlogs,
    getBlog
}

export default blogService
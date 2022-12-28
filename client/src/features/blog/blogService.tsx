import axios from 'axios';

const API_URL = 'http://localhost:8000/api/blogs'

// Get all blogs
const getBlogs = async (page: any) => {
    const response = await axios.get(`${API_URL}?page=${page}`)

    return response.data
}

const blogService = {
    getBlogs
}

export default blogService
import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' ? 
process.env.REACT_APP_API_URL_PROD : 
process.env.REACT_APP_API_URL_DEV;

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
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { getBlogs, reset } from '../features/blog/blogSlice'

import BlogPreview  from "../components/BlogPreview"

const Dashboard = () => {
    const [page, setPage] = useState(1);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { blogs, pages, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.blogs)
  
    useEffect(() => {
      if (isError) {
        console.log(message);
      }
  
      dispatch(getBlogs(page))
  
      return () => {
        dispatch(reset())
      }
    }, [navigate, isError, message, dispatch, page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <Container maxWidth="sm">
                <h1>Blogs</h1>
                {
                    isLoading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box> :
                    <>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                            {blogs.map((blog: any) => (
                                <Grid item xs={2} sm={4} md={4} key={blog.id}>
                                    <BlogPreview key={blog.id} title={blog.title} slug={blog.slug} image={blog.image}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination style={{ margin: '0.8em' }} count={pages} defaultPage={page} onChange={handleChange}/>
                        </Box> 
                    </>
                }
            </Container>
        </>
    )
}

export default Dashboard
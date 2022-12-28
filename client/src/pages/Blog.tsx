import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { getBlog, reset } from '../features/blog/blogSlice'

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Blog = function() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  const { blogs, pages, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.blogs)

  useEffect(() => {
      if (isError) {
        console.log(message);
      }
      dispatch(getBlog(slug))
  
      return () => {
        dispatch(reset())
      }
  }, [navigate, isError, message, dispatch, slug])

  const getFormattedDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });  
  }


  return (
    <>
      <Container maxWidth="sm">
        { isLoading || blogs.length===0 ?
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
          </Box> :
          <Stack spacing={2}>
            <img src={blogs[0].image} alt={blogs[0].title}/>
            <span>Published at {getFormattedDate(blogs[0].published_at)}</span>
            {parse(blogs[0].content)}
          </Stack>
        }
      </Container>
    </>
  )
}

export default Blog

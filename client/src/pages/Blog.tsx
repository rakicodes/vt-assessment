import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { getBlog, reset } from '../features/blog/blogSlice'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Spinner from '../components/Spinner'
import NotFound from './NotFound'


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

  if (isLoading) {
    return (
      <Spinner />
    )
  }


  return (
    <>
      <Container maxWidth="sm">
        { blogs.length===0 ?
          <NotFound /> :
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

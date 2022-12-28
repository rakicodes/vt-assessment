import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFound = function() {

  return (
    <>
      <Container maxWidth="sm">
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", marginTop: '1em' }}>
            <Typography variant="h4" component="h4">Page Not Found</Typography>
            <Typography variant="subtitle1" component="h2">Sorry, the page you are trying to access does not exist.</Typography>
            <Link to="/">Go back to the home page</Link>
          </Box> 
      </Container>
    </>
  )
}

export default NotFound

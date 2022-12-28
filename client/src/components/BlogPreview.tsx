import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Blog {
    title: string;
    slug: string;
    image: string;
    publishedAt: string;
}

const BlogPreview = (props:Blog) => {
    return (
        <Card style={{ height: '100%' }} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to={`/${props.slug}`}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default BlogPreview
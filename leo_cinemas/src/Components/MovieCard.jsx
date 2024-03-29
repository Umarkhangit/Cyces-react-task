import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = ({values,handleSelectedMovie}) => {

  return (
    <div>
       <Card sx={{ maxWidth: 345 }} onClick={()=>handleSelectedMovie(values)}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={values.movieImage}
          alt="green iguana"
          sx={{width:"250px"}}
        />
        <CardContent>
            <Typography variant='h5'>
                {values.movieName}
            </Typography>
            <Typography variant="caption" gutterBottom display="block">{values.movieLanguage}</Typography>
            <Typography variant="subtitle2">Rs. {values.rate}</Typography>
        </CardContent>
        </CardActionArea>
       </Card>
    </div>
  )
}

export default MovieCard
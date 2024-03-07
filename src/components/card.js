import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const card = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            EDUCATION
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I am now a 4th year BS Information Technology student in Laguna State Polytechnic University
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default card



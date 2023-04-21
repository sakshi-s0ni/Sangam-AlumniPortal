import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TextField } from '@mui/material';


export default function Post(prop) {
  let postData = prop.postDetails;
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="NameInitial">
            {postData.initial}
          </Avatar>
        }
        title = {postData.postBy}
        subheader = {postData.postDate}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt={postData.postAltImg}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postData.postContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <TextField sx={{width:460}}></TextField>
        <IconButton aria-label="add to favorites" sx={{alignItems:"right"}}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
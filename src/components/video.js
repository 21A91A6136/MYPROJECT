// VideoCard.js
import React from 'react';
import YouTube from 'react-youtube';
import './video.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Video = ({ videoId, title }) => {
  const opts = {
    height: '250',
    width: '350',
  };

  return (
    <div className="video-card">
        <Card className="video-card">
      <YouTube videoId={videoId} opts={opts} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default Video;

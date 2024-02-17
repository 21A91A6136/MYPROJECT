// Video1.js
import React from 'react';
import Video from './video';
import './video1.css';
import { Link } from 'react-router-dom';
const videoData = [
  {
    id: 1,
    videoId: 'QXeEoD0pB3E',
    title: 'Python full course',
  },
  {
    id: 2,
    videoId: 'bm0OyhwFDuY',
    title: 'Java',
  },
  {
    id: 3,
    videoId: 'nu_pCVPKzTk',
    title: 'FullStack',
  },
  {
    id: 4,
    videoId: 'JMUxmLyrhSk',
    title: 'AIML',
  },
  {
    id: 5,
    videoId: 'GwIo3gDZCVQ',
    title: 'ML',
  },
  {
    id: 6,
    videoId: 'IUU6OR8yHCc',
    title: 'Google cloud',
  },
  {
    id: 7,
    videoId: '-yFXVwhGP0s',
    title: 'Azure',
  },
  {
    id: 8,
    videoId: 'ixJ9ZfmyGZQ',
    title: 'AWS',
  },
  {
    id: 9,
    videoId: 'WzfDo2Wpxks',
    title: 'AR',
  },
  {
    id: 10,
    videoId: 'wJzHjk1QT3E',
    title: 'VR',
  },
  {
    id: 11,
    videoId: 'T_SrTexo4cw?s',
    title: 'Redhat',
  },
  {
    id: 12,
    videoId: 'zwasdVPPFFw',
    title: 'Data Analytics',
  },
  {
    id: 13,
    videoId: 'ua-CiDNNj30',
    title: 'Data Science',
  },
  {
    id: 14,
    videoId: '35EQXmHKZYs',
    title: 'Springboot',
  },
  {
    id: 15,
    videoId: 'JR7-EdxDSf0',
    title: 'Hibernate',
  }
];

const Video1 = () => {
  return (
    <div>
      <header className="header">
        <img
          src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
          alt="Logo"
          className="logo"
        />
        <nav className="links">
          <Link to="/Second">Menu</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Feedback">Feedback</Link>
          <Link to="/Assignment">Assignment</Link>
          <Link to="/Certificate">Certificate</Link>
        </nav>
      </header>
    <div className="video-list">
      {videoData.map((video) => (
        <Video key={video.id} videoId={video.videoId} title={video.title} />
      ))}
    </div>
    </div>
  );
};

export default Video1;

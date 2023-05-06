import React from 'react'
import VideoDetails from './VideoDetails'

const Video = ({video}) => {
  return (
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
        />
        <VideoDetails video={video}/>
    </div>
  )
}

export default Video
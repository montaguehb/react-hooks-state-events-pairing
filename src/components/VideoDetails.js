import React, {useState} from 'react'

const VideoDetails = ({video}) => {
    const [likes, setLikes] = useState({
        upvotes: video.upvotes,
        downvotes: video.downvotes
    })
    const handleClick = (e) => {
        setLikes({...likes, [e.target.id]: likes[e.target.id] + 1})
    }
  return (
    <div>
        <h1>{video.title}</h1>
        <p>{video.views} views | Uploaded {video.createdAt}</p>
        <button value={likes.upvotes}  id="upvotes" onClick={(e) => handleClick(e)}>{likes.upvotes + "👍"}</button>
        <button value={likes.downvotes} id="downvotes" onClick={(e) => handleClick(e)}>{likes.downvotes + "👎"}</button>
    </div>
  )
}

export default VideoDetails
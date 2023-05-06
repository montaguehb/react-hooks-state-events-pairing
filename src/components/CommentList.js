import React, {useState} from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  const [showComments, setShowComments] = useState(true)
  const commentArr = showComments?comments.map(comment => <Comment comment={comment}/>):false
  const handleClick = () => {
    setShowComments(!showComments)
  }

  return (
    <div>
      <h2>{comments.length} Comments</h2>
      <button value="hide comments" onClick={handleClick}>{showComments?"hide comments":"show comments"}</button>
      {commentArr}
    </div>
  )
}

export default CommentList
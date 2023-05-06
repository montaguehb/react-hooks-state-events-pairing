import React from 'react'

const Comment = ({comment}) => {
  return (
    <div>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
    </div>
  )
}

export default Comment
// You do not need to change this file.
import React from 'react';

export default function Comment({curComment}) {
  // 🔥 Make sure the parent of Comment is passing the right props!

  return (
    <div className='comment-text'>
      <span className='user'>{curComment.username}</span>
      {' '}
      <span className='comment'>{curComment.text}</span>
    </div>
  );
};




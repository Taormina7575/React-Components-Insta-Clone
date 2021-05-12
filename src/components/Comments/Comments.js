import React from 'react';
import Comment from './Comment';
import './Comments.css';

export default function Comments({personComments}){
  // 🔥 Make sure the parent of Comments is passing the right props!

  return (
    <div>
      {
        personComments.map(curComment => {
          return <Comment curComment={curComment}/>
        })
      }
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};



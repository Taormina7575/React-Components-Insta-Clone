import React from 'react';
import Post from './Post';
import './Posts.css';

export default function Posts({userData, likeFunction}){
  // 🔥 Make sure the parent of Posts is passing the right props!

  return (
    <div className='posts-container-wrapper'>
      {userData.map(curPerson => {
        return <Post curPersonData={curPerson} likeFunction={likeFunction}/>
      })}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
}



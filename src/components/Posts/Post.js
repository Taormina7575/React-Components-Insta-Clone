import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

export default function Post({curPersonData, likeFunction}){
  // 🔥 Make sure the parent of Post is passing the right props!
  return (
    <div className='post-border'>
      <PostHeader
        username={curPersonData.username}
        thumbnailUrl={curPersonData.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={curPersonData.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likeFunction(curPersonData.id)} likeNumb={curPersonData.likes}/>
      {/* Comments also wants its props! */}
      <Comments personComments={curPersonData.comments}/>
    </div>
  );
};



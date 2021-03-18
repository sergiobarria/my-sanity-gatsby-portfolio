/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Title from '../ui/Title';
import Post from './Post';

const PostPreview = ({ posts, showTitle }) => (
  <section>
    {showTitle && <Title title="Latest Posts" color="white" />}
    {posts && (
      <div className="max-w-screen-lg mx-auto">
        {posts.map(post => (
          // eslint-disable-next-line
          <Post key={post._id} {...post} />
        ))}
      </div>
    )}
  </section>
);

export default PostPreview;

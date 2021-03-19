/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Title from '../ui/Title';
import Post from './Post';
import Button from '../ui/Button';

const PostPreview = ({ posts, showTitle, showBtn }) => (
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
    {showBtn && (
      <div className="flex justify-center">
        <Button url="/blog" text="Check more posts here &rarr;" transparent />
      </div>
    )}
  </section>
);

export default PostPreview;

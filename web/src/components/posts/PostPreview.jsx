/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Title from '../ui/Title';
import Post from './Post';

export default function PostPreview({ posts }) {
  const { _id } = posts;

  return (
    <section>
      <Title title="Latest Posts" color="white" />
      {posts && (
        <div className="max-w-screen-lg mx-auto">
          {posts.map(post => (
            <Post key={_id} {...post} />
          ))}
        </div>
      )}
    </section>
  );
}

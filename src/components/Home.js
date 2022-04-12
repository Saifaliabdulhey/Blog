import React from 'react';
import PostListFilters from './PostListFilters';
import PostList from './PostList';

function Home(props) {
  return (
    <div>
      <PostListFilters />
      <PostList /> 
    </div>

  )
}

export default Home

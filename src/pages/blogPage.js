import React from 'react';
import  Page  from '../components/page'
import { blogPosts } from '../data'
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { blogId } = useParams(); // get blogId from the URL

  let blog = blogPosts.find(x => x.uid == blogId
  )
  return (
      <Page post={blog}/>
  );
};

export default BlogPage;

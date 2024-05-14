import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import { Page } from '../components/page'
import { blogPosts } from '../data'
import { useParams } from 'react-router-dom';
import theme from '../theme';

const BlogPage = () => {
  const { blogId } = useParams(); // get blogId from the URL

  let blog = blogPosts.find(x => x.uid == blogId
  )
  return (
    <ChakraProvider theme={theme}>
      <Page heading={blog.heading} content={blog.fullText} />
    </ChakraProvider>
  );
};

export default BlogPage;

import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import { Page } from '../components/page'
import { blogPosts } from '../data'


const BlogPage = () => {
  let uid = 1
  let blog = blogPosts.find(x => x.uid == uid
  )
  const theme = extendTheme({}, withProse());
  return (
    <ChakraProvider theme={theme}>
      <Page heading={blog.heading} content={blog.fullText} />
    </ChakraProvider>
  );
};

export default BlogPage;

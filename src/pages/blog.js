import React from 'react';
import { Box, SimpleGrid, useBreakpointValue} from '@chakra-ui/react';
import Header from '../components/header'
import BlogPostWithImage from '../components/blogPostWithImage';
import { blogPosts } from '../data'

function Blog() {
  const sortedBlogPosts = blogPosts.sort((x, y) => y.uid - x.uid);
  const blogs = sortedBlogPosts.map(x => <BlogPostWithImage key={x.uid} props={x} />);
  const containerWidth = useBreakpointValue({ base: '100%', md: '80%', lg: '70%' });
  const containerPadding = useBreakpointValue({ base: '1rem', md: '2rem', lg: '3rem' });

  return (
      <Box maxWidth={containerWidth} margin="auto" padding={containerPadding}>
        <Header text="Somya Dhingra"></Header>
        <SimpleGrid minChildWidth='xs' spacing={50} mt={10}>
          {blogs}
        </SimpleGrid>
      </Box>
  );
}

export default Blog;
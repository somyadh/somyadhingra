import React from 'react';
import { ChakraProvider, Box, SimpleGrid } from '@chakra-ui/react';
import Header from '../components/header'
import Cards from '../components/card';
import { blogPosts } from '../data'
import theme from '../theme';

function Home() {
  let sortedBlogPosts = blogPosts.sort((x,y) => y.uid - x.uid)
  let blogs = sortedBlogPosts.map(x => {
    return <Cards key={x.uid} props={x} ></Cards>
  })
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header text="Somya Dhingra"></Header>
        <SimpleGrid minChildWidth='xs' spacing={50} mt={10}>
          {blogs}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
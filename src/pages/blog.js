import React from 'react';
import { ChakraProvider, Box, theme, SimpleGrid } from '@chakra-ui/react';
import Header from '../components/header'
import Cards from '../components/card';
import { blogPosts } from '../data'

function Home() {
  let blogs = blogPosts.map(x => {
    return <Cards key={x.uid} props={x} ></Cards>
  })
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header></Header>
        <SimpleGrid minChildWidth='sm' spacing='40px'>
          {blogs}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
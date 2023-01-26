import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import  Header from '../components/header'
import Cards from '../components/card';

function Home() {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
        <Header></Header>
        <Cards></Cards>
        </Box>
      </ChakraProvider>
    );
  }
  
export default Home;
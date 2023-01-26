import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import Card from '../components/card';

function Home() {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid  p={3}>
            <ColorModeSwitcher justifySelf="flex-end" /> 
            <Card></Card>
          </Grid>
        </Box>
      </ChakraProvider>
    );
  }
  
export default Home;
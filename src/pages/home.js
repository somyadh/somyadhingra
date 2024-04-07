import React from 'react';
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Flex,
  Spacer,
  theme,
  Center,
} from '@chakra-ui/react';
import { Logo } from "../Logo"
import {  NavLink as RouterLink } from 'react-router-dom';
import Header  from '../components/header'

function Home() {
    return (
      <ChakraProvider theme={theme}>
        <Header></Header>
        <Center>
        <VStack alignItems='center'>
        <Box p='8'></Box>
        <Logo h="40vmin" pointerEvents="none" />
          <Flex>
              <Box p='4' maxW='sm'>
                <Link as={RouterLink}
                  to={'cv'}
                  fontSize="2xl"
                  color="teal.500"> Resume
                </Link>
              </Box>
            <Spacer />
            <Box p='4'>
              <Link as={RouterLink}
              to={'blogs'}
              fontSize="2xl"
              color="teal.500"> Blog
              </Link>
            </Box>
          </Flex>
        </VStack>
        </Center>
      </ChakraProvider>
    );
  }
  
export default Home;


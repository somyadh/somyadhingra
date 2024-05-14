import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Box as ChakraBox,
  keyframes,
} from '@chakra-ui/react';
import { blogPosts } from '../data';
import Cards from '../components/card';
import Header from '../components/header';
import { NavLink as RouterLink } from 'react-router-dom';
import theme from '../theme';
import { ReactTyped } from "react-typed"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const HeadingBox = ({ typingDone, ...props }) => (
  <ChakraBox
    as="div"
    animation={typingDone ? `1.0s ease-in-out forwards` : 'none'}
    {...props}
  />
);

const ContentBox = ({ typingDone, ...props }) => (
  <ChakraBox
    as="div"
    animation={typingDone ? `${fadeIn} 0.5s ease-in-out 1s forwards` : 'none'}
    opacity={0}
    {...props}
  />
);

function Home() {
  const sortedBlogPosts = blogPosts.sort((x, y) => y.uid - x.uid);
  const latestBlogPosts = sortedBlogPosts.slice(0, 4);
  const blogs = latestBlogPosts.map(x => <Cards key={x.uid} props={x} />);

  const [typingDone, setTypingDone] = useState(false);

  const handleTypingDone = () => {
    setTypingDone(true);
  };

  const headingColor = useColorModeValue('gray.800', 'gray.100');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <ChakraProvider theme={theme}>
      <Header />
      
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        textAlign="center"
        fontSize="xl"
      >
      <Box mt={typingDone ? 0 : 50} textAlign="center">
        <HeadingBox typingDone={typingDone}>
          <Heading
           as="h1"
              size={typingDone ? '2xl' : '4xl'}
              color={headingColor}
              mb={typingDone ? 8 : 0}
              transition="all 0.5s ease-in-out"
          >
            <ReactTyped
              strings={["Hi, I'm Somya Dhingra"]}
              typeSpeed={40}
              onComplete={handleTypingDone}
            />
          </Heading>
        </HeadingBox>
      </Box>
        <ContentBox typingDone={typingDone}>
        <Box textAlign="center">
          <Text fontSize="xl" color={textColor}>
            I'm a passionate technical writer sharing my knowledge and insights through my blog.
          </Text>
          <Button
            as={RouterLink}
            to="/about"
            bg="gray.400"
            color="white"
            _hover={{ bg: 'gray.700' }}
            size="lg"
            mt={8}
          >
            Learn More About Me
          </Button>
          </Box>
          <VStack mt={20}>
            <Heading as="h2" size="xl" mb={8}>
              Latest Blog Posts
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
              {blogs}
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/blogs"
              bg="gray.400"
              color="white"
              _hover={{ bg: 'gray.700' }}
              size="lg"
              mt={10}
            >
              Read More Blog Posts
            </Button>
          </VStack>
        </ContentBox>
      </Flex>
    </ChakraProvider>
  );
}

export default Home;
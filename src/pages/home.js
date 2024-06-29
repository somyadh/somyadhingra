import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { blogPosts } from '../data';
import BlogPostWithImage from '../components/blogPostWithImage';
import { NavLink as RouterLink } from 'react-router-dom';

function Home() {
  const sortedBlogPosts = blogPosts.sort((x, y) => y.uid - x.uid);
  const latestBlogPosts = sortedBlogPosts.slice(0, 4);
  const blogs = latestBlogPosts.map(x => <BlogPostWithImage key={x.uid} props={x} />);

  const headingColor = useColorModeValue('light.heading', 'dark.heading');
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        textAlign="center"
        fontSize="xl"
        mt={10}
      >
        <Heading
          as="h1"
          size="2xl"
          color={headingColor}
          mb={8}
        >
          Hi, I'm Somya Dhingra
        </Heading>
        <Box textAlign="center">
          <Text fontSize="xl" color={textColor}>
            I'm a passionate technical writer sharing my knowledge and insights through my blog.
          </Text>
        </Box>
        <VStack mt={10}>
          <Heading as="h2" size="xl" mb={8}>
            Latest Blog Posts
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={10}>
            {blogs}
          </SimpleGrid>
          <SimpleGrid columns={[1, 2]} spacing={10}>
            <Button
              as={RouterLink}
              to="/blogs"
              bg="gray.700"
              color="white"
              _hover={{ bg: 'gray.600' }}
              size="lg"
              mt={10}
            >
              Read More Blog Posts
            </Button>
            <Button
              as={RouterLink}
              to="/about"
              bg="gray.700"
              color="white"
              _hover={{ bg: 'gray.600' }}
              size="lg"
              mt={10}
            >
              Learn More About Me
            </Button>
          </SimpleGrid>
        </VStack>
      </Flex>
    </>
  );
}

export default Home;
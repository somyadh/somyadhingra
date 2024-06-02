import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Divider,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import Header from './header';

function Page({ post }) {
  const bgColor = 'white';
  const headingColor = useColorModeValue('light.heading', 'dark.heading');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const containerWidth = useBreakpointValue({ base: '100%', md: '80%', lg: '70%' });
  const containerPadding = useBreakpointValue({ base: '1rem', md: '2rem', lg: '3rem' });

  const renderContent = () => {
    const __html = post.fullText.replace(
      /<pre><code className="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
      (_, language, code) => {
        return `<pre>${SyntaxHighlighter.renderSync(code, language, tomorrow)}</pre>`;
      }
    );
    return { __html };
  };

  return (
    <Box backgroundColor={bgColor} minHeight="100vh">
      <Header homeLink={true} aboutLink={true} blogsLink={true}></Header>
      <Box maxWidth={containerWidth} margin="auto" padding={containerPadding}>
        <VStack spacing={8} alignItems="start">
          <Heading as="h1" size="2xl" color={headingColor}>
            {post.heading}
          </Heading>
          <Flex alignItems="center">
            <Box>
              <Text fontSize="sm" color={textColor}>
                Posted on: {post.posted_on}
              </Text>
            </Box>
          </Flex>
          <Box width="100%">
            <Prose color={textColor} dangerouslySetInnerHTML={renderContent()} />
          </Box>
          <Divider />
        </VStack>
      </Box>
    </Box>
  );
}

export default Page;
import React from 'react';
import {
    Heading,
    Center,
    Flex,
    Spacer,
    Box, 
    Link
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

function Header({ text, homeLink = false, blogsLink = false, aboutLink = false }) {
    const addHomeLink = homeLink;
    const addBlogsLink = blogsLink;
    const addAboutLink = aboutLink;

    return (
        <Center>
            <Flex width='100%' alignItems='left'>
                {addHomeLink && (
                    <Box p="6">
                        <Link as={RouterLink} to={`/`}>Home</Link>
                    </Box>
                )}
                {addBlogsLink && (
                    <Box p="6">
                        <Link as={RouterLink} to={`/blogs`}>Blogs</Link>
                    </Box>
                )}
                {addAboutLink && (
                    <Box p="6">
                        <Link as={RouterLink} to={`/about`}>About</Link>
                    </Box>
                )}
                <Spacer />
                <Box p='6'>
                    <Heading color="light.heading">{text}</Heading>
                </Box>
            </Flex>
        </Center>
    );
}

export default Header;
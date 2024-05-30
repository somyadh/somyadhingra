import React from 'react';
import {
    Heading,
    Center,
    Flex,
    Spacer,
    Box
} from '@chakra-ui/react';


function Header({ text }) {
    return (
        <Center>
            <Flex width='100%'>
                <Spacer />
                <Box p='4'>
                    <Heading justifyContent={'center'} color="light.heading">{text}</Heading>
                </Box>
                <Spacer />
                <Box p='4'>
                </Box>
            </Flex>
        </Center>
    );
}

export default Header;
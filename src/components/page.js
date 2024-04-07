import React from 'react';
import { Box, Center, VStack } from "@chakra-ui/react";
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import Header from './header';

export const Page = ({ heading, content }) => {
    return (
        <Center>
            <VStack spacing={4}>
                <Box w="80%" p={4} color={'teal.500'}>
                    <Header text={heading}></Header>
                </Box>
                <Box w="80%" p={4} borderWidth={1} borderRadius="lg" mt={10} color={'teal.500'}>
                    <Prose dangerouslySetInnerHTML={{ __html: content }} />
                </Box>
            </VStack>
        </Center>

    );
};

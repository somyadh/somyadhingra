import React from 'react';
import {
    Heading,
    VStack,
    Grid
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';


function Header() {
    return (
        <Grid p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={10}>
                <Heading color="teal.500">Somya Dhingra</Heading>
            </VStack>
        </Grid>
    );
}

export default Header;
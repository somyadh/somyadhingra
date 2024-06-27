import React from "react";
import {
    Box,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";


function ProfileCard({ title, children }) {
    return (
        <Box
            bg={useColorModeValue("white", "gray.700")}
            boxShadow="md"
            borderRadius="lg"
            p={6}
            h="full"
        >
            <Heading as="h3" size="md" mb={4}>
                {title}
            </Heading>
            {children}
        </Box>)
}


export default ProfileCard;
import { Box, Flex, Image, Text, Link, Card, CardBody, useColorModeValue } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

export default function BlogPostWithImage({ props }) {
  const textColor = "gray.600";
  const headingColor = "gray.800";
  return (
    <Link as={RouterLink} to={`/blogs/${props.uid}`}>
      <Card direction={{ base: 'column', sm: 'row' }} maxW='lg' boxSize="xsm" overflow='hidden' size='lg'
        variant='outline' background="gray.100" boxShadow="md"  >
        <CardBody>
          <Flex>
            <Image src={props.image} alt={props.imageAltText} boxSize="150px" objectFit="cover" mr="4" />
            <Box>
              <Text fontSize="md" fontWeight="bold" mb="2" textAlign="left" color={headingColor} >
                {props.heading}
              </Text>
              <Text fontSize="md" noOfLines={3} textAlign="left" color={textColor}>
                {props.summary}
              </Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>

    </Link>
  );
}
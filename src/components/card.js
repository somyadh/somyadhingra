import {
  Center, Text, Image, Card, CardBody, Link
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';


export default function blogPostWithImage({ props }) {
  return (
    <Center>
      <Link as={RouterLink}
        to={`/blogs/${props.uid}`}
        fontSize="2xl">
        <Card maxW='xs' boxSize="xsm" variant="unstyled" background="beige.100">
          <CardBody>
            <Image
              src={props.image}
              alt={props.imageAltText}
              borderRadius='lg'
            />
            <Text color="grey.600">
              {props.summary}
            </Text>
          </CardBody>
        </Card>
      </Link>
    </Center>
  );
}
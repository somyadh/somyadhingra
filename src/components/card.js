import {
  Center,Text,Image, Card, CardBody, Link
} from '@chakra-ui/react';
import {  NavLink as RouterLink } from 'react-router-dom';


export default function blogPostWithImage({props}) {
  return (
    <Center>
    <Link as={RouterLink}
        to={`/blogs/${props.uid}`}
        fontSize="2xl"
        color="teal.500">
        <Card maxW='xs'>
        <CardBody>
          <Image 
            src={props.image}
            alt={props.imageAltText}
            borderRadius='lg'
          />
          <Text color="teal.500">
           {props.summary}
          </Text>
        </CardBody>
        </Card>
    </Link>
    </Center>
  );
}
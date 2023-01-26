import {
  Center,Text,Image, Card, CardBody, CardFooter, Divider, 
} from '@chakra-ui/react';

export default function blogPostWithImage() {
  return (
    <Center>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='./imagineArtHere.jpg'
            alt='Imagine Art Here'
            borderRadius='lg'
          />
          <Text color="teal.500">
            Watch this space!
          </Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <Text color="teal.500">
            #blog
          </Text>
        </CardFooter>
      </Card>
    </Center>
  );
}
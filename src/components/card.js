import {
  Center,Text,Image, Card, CardBody, CardFooter, Divider, Tag
} from '@chakra-ui/react';

export default function blogPostWithImage({props}) {
  return (
    <Center>
      <Card maxW='sm'>
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
        <Divider />
        <CardFooter>
          <Tag size="md" key="md" variant='subtle' color="teal.500" >
            {props.tags}
          </Tag>
        </CardFooter>
      </Card>
    </Center>
  );
}
import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Link,
  Tag,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import ProfileCard from "../components/profileCard";

const SocialIcon = ({ icon, href }) => (
  <Link href={href} isExternal mr={4}>
    <Icon as={icon} w={6} h={6} />
  </Link>
);

const ProfilePage = () => {  
  return (
    <Container maxW="container.xl" py={12}>
      <Flex direction="column" align="center" mb={12}>
        <Flex width="100%" justify="space-between" mb={8}>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/" fontWeight="medium">Home</Link>
            <Link as={RouterLink} to="/blogs" fontWeight="medium">Blogs</Link>
          </HStack>
        </Flex>
        
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Somya Dhingra
        </Heading>
        
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.300")} textAlign="center" mb={2}>
          Software Developer II at LEAD SCHOOL
        </Text>
        
        <Flex>
          <SocialIcon icon={FaGithub} href="https://github.com/somyadh" />
          <SocialIcon icon={FaLinkedin} href="https://linkedin.com/in/somyadhingra" />
          <SocialIcon icon={FaTwitter} href="https://twitter.com/somyadhingra" />
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <ProfileCard title="About Me">
          <Text>
            Senior Backend Developer with 8+ years of experience in building web
            backend systems. Specialized in Node.js, Python, PostgreSQL and
            integrating AI and LLMs to create innovative applications.
          </Text>
        </ProfileCard>

        <ProfileCard title="Education">
          <Text fontWeight="bold">
            Bachelor of Technology - Electronics and Instrumentation
          </Text>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
            Meerut Institute of Engineering and Technology | 2011 - 2015
          </Text>
        </ProfileCard>

        <ProfileCard title="Experience">
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontWeight="bold">LEAD SCHOOL</Text>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
                Software Developer II | Feb 2022 - Present | India
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">PINGSPACE</Text>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
                Software Developer | Jul 2020 - Jan 2022 | Malaysia
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">CISCO</Text>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
                SDET | May 2018 - Dec 2019 | India
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">WIPRO</Text>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
                Project Engineer | Aug 2015 - Apr 2018 | India
              </Text>
            </Box>
          </VStack>
        </ProfileCard>

        <VStack spacing={8}>
    <ProfileCard title="Skills, Interests & Exciting Tech">
    <VStack align="start" spacing={4}>
     <Heading as="h4" size="sm" mb={2}>Tech Skills:</Heading>
      <Flex flexWrap="wrap" gap={2}>
        {["Node.js", "Python", "PostgreSQL", "Redis", "LLMs & Prompt Engineering", "Docker", "AWS", "React", "System design"].map((skill) => (
          <Tag key={skill} bg="blue.100" color="blue.800" borderRadius="full" size="md" px={3} py={1}>
            {skill}
          </Tag>
        ))}
      </Flex>
      <Spacer></Spacer>
      <Heading as="h4" size="sm" mb={2}>Outside of work, I enjoy:</Heading>
      <Flex flexWrap="wrap" gap={2}>
        {["Reading books in Hindi Language", "Listening podcasts", "Philosphy", "Baking"].map((skill) => (
          <Tag key={skill} bg="blue.100" color="blue.800" borderRadius="full" size="md" px={3} py={1}>
            {skill}
          </Tag>
        ))}
      </Flex>
      <Spacer></Spacer>
      <Heading as="h4" size="sm" mb={2}>I'm currently excited about:</Heading>
      <Flex flexWrap="wrap" gap={2}>
        {["Advancements in LLMs and their applications", "Cyber Security"].map((skill) => (
          <Tag key={skill} bg="blue.100" color="blue.800" borderRadius="full" size="md" px={3} py={1}>
            {skill}
          </Tag>
        ))}
      </Flex>
      </VStack>
    </ProfileCard>
  </VStack>

      </SimpleGrid>
    </Container>
  );
};

export default ProfilePage;
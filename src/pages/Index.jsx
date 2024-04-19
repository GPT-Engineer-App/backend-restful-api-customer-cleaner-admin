import React from "react";
import { Box, Button, Container, Heading, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaUserTie, FaUsers, FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl" textAlign="center">
          Admin Dashboard
        </Heading>
        <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
          Manage all aspects of the cleaning service from this central dashboard.
        </Text>
        <Stack direction={["column", "row"]} spacing={4} align="center">
          <Button leftIcon={<FaUsers />} colorScheme="teal" variant="solid">
            Manage Customers
          </Button>
          <Button leftIcon={<FaUserTie />} colorScheme="blue" variant="solid">
            Manage Cleaning Managers
          </Button>
          <Button leftIcon={<FaClipboardList />} colorScheme="purple" variant="solid">
            View Reports
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;

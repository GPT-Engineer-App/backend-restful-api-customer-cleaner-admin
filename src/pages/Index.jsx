import React from "react";
import { Box, Button, Container, Heading, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaUserTie, FaUsers, FaClipboardList } from "react-icons/fa";

import { useCallback } from "react";

const Index = () => {
  const handleManageCustomers = useCallback(() => {
    console.log("Manage Customers Clicked");
  }, []);

  const handleManageCleaningManagers = useCallback(() => {
    console.log("Manage Cleaning Managers Clicked");
  }, []);

  const handleViewReports = useCallback(() => {
    console.log("View Reports Clicked");
  }, []);

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
          <Button leftIcon={<FaUsers />} colorScheme="teal" variant="solid" onClick={handleManageCustomers}>
            Manage Customers
          </Button>
          <Button leftIcon={<FaUserTie />} colorScheme="blue" variant="solid" onClick={handleManageCleaningManagers}>
            Manage Cleaning Managers
          </Button>
          <Button leftIcon={<FaClipboardList />} colorScheme="purple" variant="solid" onClick={handleViewReports}>
            View Reports
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;

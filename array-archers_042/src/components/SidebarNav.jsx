import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

const SidebarNav = () => {
  return (
    <Box bg="#303030" p={4} width="100%">
      <Flex justify="start" align="center">
        <Link to="/bikes">
          <Text fontSize="lg" color="white" mr={4}>
            Bikes
          </Text>
        </Link>
        <Link to="/helmets">
          <Text fontSize="lg" color="white" mr={4}>
            Helmets
          </Text>
        </Link>
        <Link to="/jackets">
          <Text fontSize="lg" color="white" mr={4}>
            Jackets
          </Text>
        </Link>
        <Link to="/gloves">
          <Text fontSize="lg" color="white" mr={4}>
            Gloves
          </Text>
        </Link>
        <Link to="/cart">
          <Text fontSize="lg" color="white">
            Cart
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default SidebarNav;

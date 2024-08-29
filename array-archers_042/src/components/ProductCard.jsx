

import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, productName }) => {
  return (
    <Link to={`/products/${productName}/${product.id}`}>
      <Box
        borderWidth="1px"
        borderColor="transparent" // Set borderColor to transparent
        borderRadius="lg"
        overflow="hidden"
        backgroundColor="#313131"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        _hover={{ borderColor: "grey", borderWidth: "2px" }} 
        paddingTop="10px"
      >
        <Image
          src={product.imageurl}
          alt={product.name}
          boxSize="300px"
          mx="auto"
          borderRadius="8px"
          
        />
        <Stack p={4}>
          <Text fontWeight="bold" fontSize="xl" color="white">
            {product.name}
          </Text>
          <Text color="white"> ₹{product.price}</Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default ProductCard;






















import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (index, change) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = Math.max(
      1,
      updatedItems[index].quantity + change
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <Box p={4} backgroundColor="#303030">
      <Heading mb={4} color="white">
        Your Cart
      </Heading>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <Flex
            key={item.id}
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={4}
            mb={4}
            p={4}
            backgroundColor="#3e3e3e"
            borderRadius="md"
          >
            <Image
              src={item.imageurl}
              alt={item.name}
              width={{ base: "100%", md: "20%" }}
              objectFit="cover"
            />
            <Box flex="1" p={4}>
              <Heading size="md" color="white">
                {item.name}
              </Heading>
              <Text fontSize="lg" color="white">
                <strong>Price:</strong> ₹{item.price}
              </Text>
              <Text fontSize="lg" color="white">
                <strong>Quantity:</strong> {item.quantity}
              </Text>
              <Flex mt={2} align="center">
                <IconButton
                  aria-label="Decrease quantity"
                  icon={<MinusIcon />}
                  onClick={() => handleQuantityChange(index, -1)}
                  mr={2}
                />
                <Text fontSize="lg" color="white">
                  {item.quantity}
                </Text>
                <IconButton
                  aria-label="Increase quantity"
                  icon={<AddIcon />}
                  onClick={() => handleQuantityChange(index, 1)}
                  ml={2}
                />
              </Flex>
              <Button
                mt={4}
                colorScheme="red"
                onClick={() => handleRemoveFromCart(index)}
              >
                Remove
              </Button>
            </Box>
          </Flex>
        ))
      ) : (
        <Text color="white">Your cart is empty</Text>
      )}
    </Box>
  );
};

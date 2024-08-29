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
import { CheckoutCard } from "../components/CheckoutCard";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    const totalSum = storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalSum);
  }, [cartItems]);

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
    <Box w="100%" className="backgroundchange">
      <Box p={4} backgroundColor="#303030" maxWidth="1360px" margin="0 auto">
        <Heading mb={4} color="white">
          Your Cart
        </Heading>
        {cartItems.length > 0 ? (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={4}
            justify="space-around"
          >
            <Box mb={4} margin={"auto"}>
              {cartItems.map((item, index) => (
                <Flex
                  key={item.id}
                  direction={{ base: "row", md: "row" }}
                  w={[20, 500]}
                  h={[600, 200]}
                  align="center"
                  justify="space-around"
                  mb={4}
                  p={4}
                  backgroundColor="#3e3e3e"
                  borderRadius="md"
                  // border={"1px solid white"}
                  boxSizing={"border-box"}
                >
                  <Image
                    src={item.imageurl}
                    alt={item.name}
                    width={{ base: "30%", md: "40%" }}
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
                        zIndex={0}
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
                      bg={"#fa6700"}
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Box>
            <Box>{<CheckoutCard total={total} />}</Box>
          </Flex>
        ) : (
          <Text color="white">Your cart is empty</Text>
        )}
      </Box>
    </Box>
  );
};

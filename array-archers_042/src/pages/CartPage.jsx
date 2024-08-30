import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
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
  }, []); // Removed cartItems from dependency array

  const handleQuantityChange = (index, change) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = Math.max(
      1,
      updatedItems[index].quantity + change
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    
    // Recalculate the total when the quantity changes
    const totalSum = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalSum);
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    
    // Recalculate the total when an item is removed
    const totalSum = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalSum);
  };

  return (
    <Box w="100%" className="backgroundchange">
      <Box   padding="0px 30px" backgroundColor="#303030" maxWidth="1360px" margin="0 auto" borderRadius="md">
        <Heading mb={6} color="white" textAlign="center">
          Your Cart
        </Heading>
        {cartItems.length > 0 ? (
          <Flex 
            direction={{ base: "column", lg: "row" }}
            gap="10px"

            sx={{
              "@media screen and (min-width: 970px)": {
                flexDirection: "row",  // Apply row direction after 1100px
              },
            }}
            // justify="space-between"
          >
            <Box  flex="1"  >
              {cartItems.map((item, index) => (
                <Flex boxShadow={"0 4px 8px rgba(0, 0, 0, 0.8)" 


                } 
                  key={index}
                  direction={{ base: "column", md: "row" }}
                  align="center"
                  gap="10px"
                  // justify="space-between"
                  mb={6}
                  p={7}
                  backgroundColor="#3e3e3e"
                  borderRadius="md"
                >
                  <Image
                    src={item.imageurl}
                    alt={item.name}
                    width={{ base: "60%", md: "30%" }}
                    objectFit="cover"
                    mb={{ base: 4, md: 0 }}
                    borderRadius="md"
                  />
                  <Box flex="1" padding="0px 20px">
                    <Text
                      fontWeight="600"
                      color={"white"}
                      fontSize="22px"
                      letterSpacing="1px"
                    >
                      {item.name}
                    </Text>
                    <Text fontWeight={500} fontSize="lg" color="white" letterSpacing=".5px">
                      Price : <span style={{ color: 'gray' , fontWeight:"500", fontSize:"18px", marginLeft:"45px"}}>₹{item.price}</span>
                    </Text>
                    <Text fontWeight={500} fontSize="lg" color="white" letterSpacing=".5px">
                      <strong>Quantity : </strong> <span style={{ color: 'gray' , fontWeight:"500", fontSize:"18px", marginLeft:"10px"}}>{item.quantity}</span>
                    </Text>
                    <Flex mt={-3} align="center">
                      <IconButton
                        aria-label="Decrease quantity"
                        icon={<MinusIcon />}
                        onClick={() => handleQuantityChange(index, -1)}
                        mr={3}
                        size="sm"
                        width="75px"
                      />
                      <Flex align="center" justify="center">
                        <Text fontSize="lg" marginTop="29px" color="white">
                          {item.quantity}
                        </Text>
                      </Flex>
                      <IconButton
                        aria-label="Increase quantity"
                        icon={<AddIcon />}
                        onClick={() => handleQuantityChange(index, 1)}
                        ml={3}
                        size="sm"
                        width="75px"
                      />
                    </Flex>
                    <Button
                      mt={4}
                      bg="#fb6600"
                      onClick={() => handleRemoveFromCart(index)}
                      width="200px"
                      color="white"
                      border="none"
                      borderRadius="20px"
                      _hover={{
                        bg: "#e55d00",
                        transform: "scale(1.05)",
                        boxShadow: "md",
                      }}
                      _active={{
                        bg: "#d95300",
                        transform: "scale(1.02)",
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Box>
            <Box flex="0.3">
              <CheckoutCard total={total} />
            </Box>
          </Flex>
        ) : (
          <Text color="white" textAlign="center">Your cart is empty</Text>
        )}
      </Box>
    </Box>
  );
};

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
import axios from "axios";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [userId, setUserId] = useState(null);

  // Effect to retrieve user ID from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currloginuser"));
    if (storedUser && storedUser[0]) {
      setUserId(storedUser[0][0]); // Set user ID state
    }
  }, []);

  // Effect to fetch cart data from Firebase when userId changes
  useEffect(() => {
    if (!userId) return; // Ensure userId is available

    const firebaseUrl = `https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}/cart.json`;

    axios
      .get(firebaseUrl)
      .then((response) => {
        console.log("Retrieved data from Firebase:", response.data);
        setCartItems(response.data || []); // Handle null response
      })
      .catch((error) => {
        console.error("Error fetching data from Firebase:", error);
      });
  }, [userId]); // Re-run when userId changes

  // Effect to calculate total when cartItems change
  useEffect(() => {
    const totalSum = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalSum);
  }, [cartItems]); // Re-run when cartItems change

  const handleQuantityChange = (index, change) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = Math.max(
      1,
      updatedItems[index].quantity + change
    );
    setCartItems(updatedItems);

    if (userId) {
      axios
        .patch(
          `https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}.json`,
          { cart: updatedItems }
        )
        .then((response) => {
          console.log("Cart updated in Firebase:", response.data);
        })
        .catch((error) => {
          console.error("Error updating cart in Firebase:", error);
        });
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);

    if (userId) {
      axios
        .patch(
          `https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}.json`,
          { cart: updatedItems }
        )
        .then((response) => {
          console.log("Cart updated in Firebase:", response.data);
        })
        .catch((error) => {
          console.error("Error updating cart in Firebase:", error);
        });
    }
  };

  return (
    <Box w="100%" className="backgroundchange">
      <Box
        padding="0px 30px"
        backgroundColor="#303030"
        maxWidth="1360px"
        margin="0 auto"
        borderRadius="md"
      >
        <Heading mb={6} color="white" textAlign="center">
          Your Cart
        </Heading>
        {cartItems != null && cartItems.length > 0 ? (
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap="10px"
            sx={{
              "@media screen and (min-width: 970px)": {
                flexDirection: "row", // Apply row direction after 1100px
              },
            }}
            // justify="space-between"
          >
            <Box flex="1">
              {cartItems.map((item, index) => (
                <Flex
                  boxShadow={"0 4px 8px rgba(0, 0, 0, 0.8)"}
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
                    <Text
                      fontWeight={500}
                      fontSize="lg"
                      color="white"
                      letterSpacing=".5px"
                    >
                      Price :{" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "500",
                          fontSize: "18px",
                          marginLeft: "45px",
                        }}
                      >
                        ₹{item.price}
                      </span>
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize="lg"
                      color="white"
                      letterSpacing=".5px"
                    >
                      <strong>Quantity : </strong>{" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "500",
                          fontSize: "18px",
                          marginLeft: "10px",
                        }}
                      >
                        {item.quantity}
                      </span>
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
          <Text color="white" textAlign="center">
            Your cart is empty
          </Text>
        )}
      </Box>
    </Box>
  );
};

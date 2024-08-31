import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import {
  Box,
  Heading,
  Image,
  Text,
  Spinner,
  Flex,
  Stack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import axios from "axios";

const ProductDetailsPage = () => {
  const { productName, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  let userloggedinCurr = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let response;
        switch (productName) {
          case "bikes":
            response = await fetch(
              "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/bikes.json"
            );
            break;
          case "jackets":
            response = await fetch(
              "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/jackets.json"
            );
            break;
          case "helmets":
            response = await fetch(
              "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/helmets.json"
            );
            break;
          case "gloves":
            response = await fetch(
              "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/gloves.json"
            );
            break;
          default:
            throw new Error("Unknown category");
        }
        const data = await response.json();
        const productList = Object.values(data);
        const foundProduct = productList.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productName, id]);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    if (!product) return;

    const storedUser = JSON.parse(localStorage.getItem("currloginuser"));
    //var cart = JSON.parse(localStorage.getItem("cart")) || [];

    const userId = storedUser[0][0]; // Example user ID
    const firebaseUrl = `https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}/cart.json`;

    axios
      .get(firebaseUrl)
      .then((response) => {
        console.log("Retrieved data from Firebase:", response.data);
        // Set cart to retrieved data or an empty array if no data exists
        const cart = response.data || [];

        // Find if the product already exists in the cart
        const existingProductIndex = cart.findIndex(
          (item) => item.name === product.name
        );

        if (existingProductIndex !== -1) {
          // If the product exists, update the quantity
          cart[existingProductIndex].quantity += quantity;
        } else {
          // If the product doesn't exist, add it to the cart
          cart.push({ ...product, quantity });
        }

        // Update the cart in Firebase
        axios
          .patch(
            `https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userId}.json`,
            { cart: cart }
          )
          .then((response) => {
            console.log("Cart updated in Firebase:", response.data);
          })
          .catch((error) => {
            console.error("Error updating cart in Firebase:", error);
          });

        alert(`Added ${quantity} of ${product.name} to cart.`);
      })
      .catch((error) => {
        console.error("Error fetching data from Firebase:", error);
      });
  };

  return (
    <Box w="100%" className="backgroundchange">
      <Box p={4} maxWidth="1360px" margin="auto">
        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="50vh">
            <Spinner size="xl" color="white" />
          </Flex>
        ) : product ? (
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={4}
          >
            <Box
              flex="1"
              maxW={{ base: "100%", md: "50%" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.8)"
              padding="55px 0px"
              borderRadius="10px"
            >
              <Image
                src={product.imageurl}
                alt={product.name}
                width={{ base: "85%", md: "70%", lg: "75%" }}
                height={{ base: "220px", md: "420px", lg: "350px" }}
                // height="400px"
                objectFit="cover"
                borderRadius="10px"
              />
            </Box>
            <Box flex="1" maxW={{ base: "100%", md: "50%" }} p={4}>
              <Heading fontSize="25px" letterSpacing="1px" mb={1} color="white">
                {product.name}
              </Heading>
              {productName === "bikes" && (
                <Stack spacing={1}>
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Price : </strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      ₹{product.price}
                    </span>
                  </Text>
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Engine : </strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      {product.engine}
                    </span>
                  </Text>
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Year : </strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      {product.year}
                    </span>
                  </Text>
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Description: </strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      {product.description}
                    </span>
                  </Text>
                </Stack>
              )}
              {(productName === "helmets" ||
                productName === "jackets" ||
                productName === "gloves") && (
                <Stack spacing={1}>
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Price:</strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      ₹{product.price}
                    </span>
                  </Text>
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Size:</strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      {product.size}
                    </span>
                  </Text>
                  {product.color && (
                    <Text fontSize="lg" color="white" letterSpacing="1px">
                      <strong>Color:</strong>{" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "500",
                          fontSize: "17px",
                        }}
                      >
                        {product.color}
                      </span>
                    </Text>
                  )}
                  <Text fontSize="lg" color="white" letterSpacing="1px">
                    <strong>Description:</strong>{" "}
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      {product.description}
                    </span>
                  </Text>
                </Stack>
              )}
              <Flex mt={0} align="center">
                <IconButton
                  aria-label="Decrease quantity"
                  icon={<MinusIcon />}
                  onClick={() => handleQuantityChange(-1)}
                  mr={3}
                  size="sm"
                  width="75px"
                />
                <Flex align="center" justify="center">
                  <Text fontSize="lg" marginTop="29px" color="white">
                    {quantity}
                  </Text>
                </Flex>
                <IconButton
                  aria-label="Increase quantity"
                  icon={<AddIcon />}
                  onClick={() => handleQuantityChange(1)}
                  ml={3}
                  size="sm"
                  width="75px"
                />
              </Flex>
              <Button
                mt={4}
                bg="#fb6600"
                onClick={() => {
                  userloggedinCurr
                    ? handleAddToCart()
                    : alert("Please Login First");
                }}
                width="auto"
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
                Add to Cart
              </Button>
            </Box>
          </Flex>
        ) : (
          <Text color="white">No product found</Text>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;

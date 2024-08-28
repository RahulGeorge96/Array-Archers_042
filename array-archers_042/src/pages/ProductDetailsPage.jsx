








import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const ProductDetailsPage = () => {
  const { productName, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <Box p={4} backgroundColor="#303030">
      {loading ? (
        <Spinner size="xl" />
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
          >
            <Image
              src={product.imageurl}
              alt={product.name}
              width={{ base: "100%", md: "80%", lg: "85%" }}
              objectFit="cover"
            />
          </Box>
          <Box flex="1" maxW={{ base: "100%", md: "50%" }} p={4}>
            <Heading mb={4} color="white">
              {product.name}
            </Heading>
            {productName === "bikes" && (
              <Stack spacing={2}>
                <Text fontSize="lg" color="white">
                  <strong>Price:</strong> ₹{product.price}
                </Text>
                <Text fontSize="lg" color="white">
                  <strong>Engine:</strong> {product.engine}
                </Text>
                <Text fontSize="lg" color="white">
                  <strong>Year:</strong> {product.year}
                </Text>
                <Text fontSize="lg" color="white">
                  <strong>Description:</strong> {product.description}
                </Text>
              </Stack>
            )}
            {(productName === "helmets" ||
              productName === "jackets" ||
              productName === "gloves") && (
              <Stack spacing={2}>
                <Text fontSize="lg" color="white">
                  <strong>Price:</strong> ₹{product.price}
                </Text>
                <Text fontSize="lg" color="white">
                  <strong>Size:</strong> {product.size}
                </Text>
                {product.color && (
                  <Text fontSize="lg" color="white">
                    <strong>Color:</strong> {product.color}
                  </Text>
                )}
                <Text fontSize="lg" color="white">
                  <strong>Description:</strong> {product.description}
                </Text>
              </Stack>
            )}
            <Flex mt={4} align="center">
              <IconButton
                aria-label="Decrease quantity"
                icon={<MinusIcon />}
                onClick={() => handleQuantityChange(-1)}
                mr={2}
              />
              <Text fontSize="lg" color="white">
              {quantity}
              </Text>
              <IconButton
                aria-label="Increase quantity"
                icon={<AddIcon />}
                onClick={() => handleQuantityChange(1)}
                ml={2}
              />
            </Flex>
            <Button
              mt={4}
              bg="#fa6700"
              onClick={handleAddToCart}
              width="auto"
              color="white"
            >
              Add to Cart
            </Button>
          </Box>
        </Flex>
      ) : (
        <Text color="white">No product found</Text>
      )}
    </Box>
  );
};

export default ProductDetailsPage;





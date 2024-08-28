
import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          bikesResponse,
          helmetsResponse,
          jacketsResponse,
          glovesResponse,
        ] = await Promise.all([
          axios.get(
            "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/bikes.json"
          ),
          axios.get(
            "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/helmets.json"
          ),
          axios.get(
            "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/jackets.json"
          ),
          axios.get(
            "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/gloves.json"
          ),
        ]);

        const allProducts = [
          ...bikesResponse.data.map((product) => ({
            ...product,
            category: "bikes",
          })),
          ...helmetsResponse.data.map((product) => ({
            ...product,
            category: "helmets",
          })),
          ...jacketsResponse.data.map((product) => ({
            ...product,
            category: "jackets",
          })),
          ...glovesResponse.data.map((product) => ({
            ...product,
            category: "gloves",
          })),
        ];

        // Shuffle the array to mix the products
        const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

        setProducts(shuffledProducts);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <VStack spacing={4} align="center" justify="center" height="100vh">
        <Spinner size="xl" />
        <Text>Loading products...</Text>
      </VStack>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={4}>
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box p={4} bg="#303030">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productName={product.category}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;





















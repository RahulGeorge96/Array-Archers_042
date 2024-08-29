

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import { Box, Select, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";

const BikesPage = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/bikes.json"
      );
      const data = await response.json();
      setBikes(data);
      setFilteredBikes(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let sortedBikes = [...bikes];

    if (selectedCategory === "All") {
      sortedBikes = [...bikes];
    } else {
      sortedBikes = bikes.filter((bike) => bike.category === selectedCategory);
    }

    if (sortOption === "Price: Low to High") {
      sortedBikes.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sortedBikes.sort((a, b) => b.price - a.price);
    }

    setFilteredBikes(sortedBikes);
  }, [selectedCategory, sortOption, bikes]);

  // Function to format price with commas
  const formatPrice = (price) => {
    const priceStr = price.toString();
    return priceStr.replace(/(\d{2})(\d{5})$/, "$1,$2");
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 images at a time
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 images on medium screens
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 2 images on small screens
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box w="100%" className="backgroundchange">
      <Box p={4} maxWidth="1360px" margin="0 auto">
        <Heading mb={4} color="white">
          Bikes
        </Heading>

        {/* Slider for all bike images */}
        <Slider {...settings}>
          {bikes.map((bike) => (
            <Box key={bike.id} p={1} style={{ margin: "0 5px" }}>
              <Link to={`/products/bikes/${bike.id}`}>
                <img
                  src={bike.imageurl}
                  alt={bike.name}
                  style={{
                    width: "100%",
                    height: "200px", // Set a fixed height
                    objectFit: "cover", // Ensures the image covers the container without distorting
                    borderRadius: "10px",
                  }}
                />
              </Link>
            </Box>
          ))}
        </Slider>

        {/* Filtering and Sorting Options in the same line */}
        <Flex
          mt={8}
          mb={4}
          ml={12}
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="flex-start"
          gap={4} // Added gap between the elements
        >
          <Select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            color="white"
            width={{ base: "100%", sm: "200px" }}
            maxWidth="300px"
            sx={{
              backgroundColor: "#303030",
              color: "white",
              "& option": {
                backgroundColor: "#303030",
                color: "white",
              },
            }}
          >
            <option value="All">Filter By Categories</option>
            <option value="Sport">Sport</option>
            <option value="Cruiser">Cruiser</option>
            <option value="Adventure Touring">Adventure Touring</option>
            <option value="Grand American Touring">
              Grand American Touring
            </option>
          </Select>

          <Select
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
            color="white"
            width={{ base: "100%", sm: "200px" }}
            maxWidth="300px"
            sx={{
              backgroundColor: "#303030",
              color: "white",
              "& option": {
                backgroundColor: "#303030",
                color: "white",
              },
            }}
          >
            <option value="None">Sort By</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </Select>
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {filteredBikes.map((bike) => (
            <ProductCard
              key={bike.id}
              product={{ ...bike, price: formatPrice(bike.price) }}
              productName="bikes"
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BikesPage;


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import {
  Box,
  Select,
  SimpleGrid,
  Heading,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import "../App.css";

const BikesPage = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("None");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/bikes");
        const data = await response.json();
        setBikes(data);
        setFilteredBikes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bikes data:", error);
        setLoading(false);
      }
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

  const formatPrice = (price) => {
    const priceStr = price.toString();
    return priceStr.replace(/(\d{2})(\d{5})$/, "$1,$2");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box w="100%" className="backgroundchange">
      <Box maxWidth="1360px" margin="0 auto" style={{ padding: "0px 30px" }}>
        <Heading mb={4} color="white">
          Bikes
        </Heading>

        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="50vh">
            <Spinner size="xl" color="white" />
          </Flex>
        ) : (
          <>
            <Slider {...settings} className="my-slider">
              {bikes.map((bike) => (
                <Box key={bike.id} p={4} style={{ margin: "0 5px" }}>
                  <Link to={`/products/bikes/${bike.id}`}>
                    <img
                      src={bike.imageurl}
                      alt={bike.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </Link>
                </Box>
              ))}
            </Slider>

            <Flex
              mt={8}
              mb={4}
              ml={{ base: 1, lg: 14 }}
              direction={{ base: "column", sm: "row" }}
              align="center"
              justify="flex-start"
              gap={4}
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

            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
              {filteredBikes.map((bike) => (
                <ProductCard
                  key={bike.id}
                  product={{ ...bike, price: formatPrice(bike.price) }}
                  productName="bikes"
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </Box>
    </Box>
  );
};

export default BikesPage;

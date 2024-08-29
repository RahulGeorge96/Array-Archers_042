


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Heading, Spinner } from "@chakra-ui/react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const GlovesPage = () => {
  const [gloves, setGloves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/gloves.json"
        );
        const data = await response.json();
        setGloves(Object.values(data)); // Convert data to an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gloves data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <Box className="backgroundchange" p={4} maxWidth="1360px" margin="auto">
        <Heading mb={4} color="white">
          Gloves
        </Heading>

        {loading ? (
          <Spinner size="xl" color="white" />
        ) : (
          <>
            {/* Slider for all glove images */}
            <Slider {...settings}>
              {gloves.map((glove) => (
                <Box key={glove.id} p={1} style={{ margin: "0 5px" }}>
                  <Link to={`/products/gloves/${glove.id}`}>
                    <img
                      src={glove.imageurl}
                      alt={glove.name}
                      style={{
                        width: "100%",
                        height: "200px", // Set a fixed height
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </Link>
                </Box>
              ))}
            </Slider>

            <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
              {gloves.map((glove) => (
                <ProductCard
                  key={glove.id}
                  product={glove}
                  productName="gloves"
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </Box>
    </Box>
  );
};

export default GlovesPage;

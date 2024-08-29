


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const HelmetsPage = () => {
  const [helmets, setHelmets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/helmets.json"
      );
      const data = await response.json();
      setHelmets(data);
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
      <Box p={4} maxWidth="1360px" margin="auto">
        <Heading mb={4} color="white">
          Helmets
        </Heading>

        {/* Slider for all helmet images */}
        <Slider {...settings}>
          {helmets.map((helmet) => (
            <Box key={helmet.id} p={1} style={{ margin: "0 5px" }}>
              <Link to={`/products/helmets/${helmet.id}`}>
                <img
                  src={helmet.imageurl}
                  alt={helmet.name}
                  style={{
                    width: "100%",
                    height: "280px", // Set a fixed height
                    objectFit: "cover", // Ensures the image covers the container without distorting
                    borderRadius: "10px",
                  }}
                />
              </Link>
            </Box>
          ))}
        </Slider>

        <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
          {helmets.map((helmet) => (
            <ProductCard
              key={helmet.id}
              product={helmet}
              productName="helmets"
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HelmetsPage;

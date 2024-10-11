import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Heading, Spinner, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const GlovesPage = () => {
  const [gloves, setGloves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://harley-davidson-fexq.onrender.com/gloves");
        const data = await response.json();
        setGloves(Object.values(data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gloves data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          Gloves
        </Heading>

        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="50vh">
            <Spinner size="xl" color="white" />
          </Flex>
        ) : (
          <>
            <Slider {...settings} className="my-slider">
              {gloves.map((glove) => (
                <Box key={glove.id} p={4} style={{ margin: "0 5px" }}>
                  <Link to={`/products/gloves/${glove.id}`}>
                    <img
                      src={glove.imageurl}
                      alt={glove.name}
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

            <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={8}>
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

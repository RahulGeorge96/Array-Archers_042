import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Heading, Spinner, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const JacketsPage = () => {
  const [jackets, setJackets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/jackets.json"
        );
        const data = await response.json();
        setJackets(Object.values(data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jackets data:", error);
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
      <Box
        style={{ padding: "0px 30px" }}
        maxWidth="1360px"
        margin="0 auto"
        width="100vw"
      >
        <Heading mb={4} color="white">
          Jackets
        </Heading>

        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="50vh">
            <Spinner size="xl" color="white" />
          </Flex>
        ) : (
          <>
            <Slider {...settings} className="my-slider">
              {jackets.map((jacket) => (
                <Box key={jacket.id} p={4} style={{ margin: "0 5px" }}>
                  <Link to={`/products/jackets/${jacket.id}`}>
                    <img
                      src={jacket.imageurl}
                      alt={jacket.name}
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
              {jackets.map((jacket) => (
                <ProductCard
                  key={jacket.id}
                  product={jacket}
                  productName="jackets"
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </Box>
    </Box>
  );
};

export default JacketsPage;

// import React, { useEffect, useState } from "react";
// import { Box, SimpleGrid, Heading, Spinner } from "@chakra-ui/react";
// import ProductCard from "../components/ProductCard";

// const JacketsPage = () => {
//   const [jackets, setJackets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/jackets.json"
//         );
//         const data = await response.json();
//         setJackets(Object.values(data)); // Convert data to an array
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching jackets data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box p={4} bg="#303030">
//       <Heading mb={4} color="white">
//         Jackets
//       </Heading>
//       {loading ? (
//         <Spinner size="xl" />
//       ) : (
//         <SimpleGrid columns={[1, 2, 3]} spacing={4}>
//           {jackets.map((jacket) => (
//             <ProductCard
//               key={jacket.id}
//               product={jacket}
//               productName="jackets"
//             />
//           ))}
//         </SimpleGrid>
//       )}
//     </Box>
//   );
// };

// export default JacketsPage;


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Heading, Spinner } from "@chakra-ui/react";
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
        setJackets(Object.values(data)); // Convert data to an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jackets data:", error);
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
    <Box p={4} bg="#303030">
      <Heading mb={4} color="white">
        Jackets
      </Heading>

      {loading ? (
        <Spinner size="xl" color="white" />
      ) : (
        <>
          {/* Slider for all jacket images */}
          <Slider {...settings}>
            {jackets.map((jacket) => (
              <Box key={jacket.id} p={1} style={{ margin: "0 5px" }}>
                <Link to={`/products/jackets/${jacket.id}`}>
                  <img
                    src={jacket.imageurl}
                    alt={jacket.name}
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
  );
};

export default JacketsPage;

// import React, { useEffect, useState } from "react";
// import { Box, Select, SimpleGrid, Heading } from "@chakra-ui/react";
// import ProductCard from "../components/ProductCard";

// const BikesPage = () => {
//   const [bikes, setBikes] = useState([]);
//   const [filteredBikes, setFilteredBikes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/bikes.json"
//       );
//       const data = await response.json();
//       setBikes(data);
//       setFilteredBikes(data);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setFilteredBikes(bikes);
//     } else {
//       setFilteredBikes(
//         bikes.filter((bike) => bike.category === selectedCategory)
//       );
//     }
//   }, [selectedCategory, bikes]);

//   // Function to format price with commas
//   const formatPrice = (price) => {
//     const priceStr = price.toString();
//     // Ensure there are at least two digits before the comma
//     return priceStr.replace(/(\d{2})(\d{5})$/, "$1,$2");
//   };

//   return (
//     <Box p={4} bg="#303030">
//       <Heading mb={4} color="white">
//         Bikes
//       </Heading>
//       <Select
//         mb={4}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//         value={selectedCategory}
//         color="white"
//         width={{ base: "100%", sm: "200px" }} // Adjust the width as needed
//         maxWidth="300px" // Optional: limits the maximum width
//         sx={{
//           backgroundColor: "#303030", // Dropdown background color
//           color: "white", // Text color
//           "& option": {
//             backgroundColor: "#303030", // Option background color
//             color: "white", // Option text color
//           },
//         }}
//       >
//         <option value="All">Filter By Categories</option>
//         <option value="Sport">Sport</option>
//         <option value="Cruiser">Cruiser</option>
//         <option value="Adventure Touring">Adventure Touring</option>
//         <option value="Grand American Touring">Grand American Touring</option>
//       </Select>
//       <SimpleGrid columns={[1, 2, 3]} spacing={4}>
//         {filteredBikes.map((bike) => (
//           <ProductCard
//             key={bike.id}
//             product={{ ...bike, price: formatPrice(bike.price) }}
//             productName="bikes"
//           />
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default BikesPage;


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import { Box, Select, SimpleGrid, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";

const BikesPage = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    if (selectedCategory === "All") {
      setFilteredBikes(bikes);
    } else {
      setFilteredBikes(
        bikes.filter((bike) => bike.category === selectedCategory)
      );
    }
  }, [selectedCategory, bikes]);

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
    <Box p={4} bg="#303030">
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

      <Select
        mt={8}
        mb={4}
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
        <option value="Grand American Touring">Grand American Touring</option>
      </Select>

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
  );
};

export default BikesPage;



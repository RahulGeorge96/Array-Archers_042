"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Grid,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CheckoutCard = ({ total }) => {
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    const discount = total * 0.1;
    setFinalAmount(total - discount);
  }, [total]);

  return (
    <Center width={{ base: "100%", md: "100%", lg: "520px" }}>
      <Box
        role={"group"}
        p={6}
        width={{ base: "100%", md: "100%", lg: "520px" }}
        w={"full"}
        bg={useColorModeValue("#3b3b3b", "#414141")}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.8)"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="350px"
      >
        <Stack p={3} spacing={6} align={"center"}>
          <Text
            fontWeight="600"
            color={"white"}
            fontSize="22px"
            textTransform={"uppercase"}
            letterSpacing="1px"
          >
            CHECKOUT
          </Text>

          {/* Using Grid for aligned labels and values */}
          <Grid
            templateColumns="auto 1fr"
            gap={0}
            alignItems="center"
            color={"white"}
            width="100%"
          >
            <Text
              letterSpacing=".5px"
              fontWeight={500}
              fontSize={"lg"}
              textAlign="left"
            >
              Total Price:
            </Text>
            <Text
              color="gray"
              fontWeight={500}
              fontSize="20px"
              textAlign="right"
            >
              ₹{total}
            </Text>

            <Text letterSpacing=".5px" fontWeight={500} fontSize={"lg"} textAlign="left">
              Discount:
            </Text>
            <Text color="gray" fontWeight={500} fontSize="20px" textAlign="right">
              10%
            </Text>

            <Text letterSpacing=".5px" fontWeight={500} fontSize="24px"  textAlign="left">
              Final Price:
            </Text>
            <Text color="gray" fontWeight={500} fontSize="22px"textAlign="right">
            ₹{finalAmount}
            </Text>
          </Grid>
        </Stack>
        <div style={{height:"2px", width:"100%", backgroundColor:"yellow", marginTop:"35px"}}></div>
        <Button
          mt={6}
          w="100%"
          bg={"#e55d00"}
          rounded={"full"}
          color={"white"}
          flex={"1 0 auto"}
          _hover={{ bg: "white", color: "black" }}
        >
          Checkout
        </Button>
      </Box>
    </Center>
  );
};

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
    setFinalAmount(discount);
  });
  return (
    <Center py={6}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("#3b3b3b", "#414141")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Stack p={3} align={"center"}>
          <Text color={"white"} fontSize={"sm"} textTransform={"uppercase"}>
            CHECKOUT
          </Text>

          {/* Using Grid for aligned labels and values */}
          <Grid
            templateColumns="auto 1fr"
            gap={4}
            alignItems="center"
            color={"white"}
          >
            <Text fontWeight={400} fontSize={"xl"} textAlign="right">
              Total Price:
            </Text>
            <Text fontWeight={400} fontSize={"xl"} textAlign="left">
              ${total}
            </Text>

            <Text fontWeight={400} fontSize={"xl"} textAlign="right">
              Discount:
            </Text>
            <Text fontWeight={400} fontSize={"xl"} textAlign="left">
              10%
            </Text>

            <Text fontWeight={500} fontSize={"2xl"} textAlign="right">
              Final Price:
            </Text>
            <Text fontWeight={500} fontSize={"2xl"} textAlign="left">
              ${finalAmount}
            </Text>
          </Grid>
        </Stack>
        <Button
          w="100%"
          bg={"#f38037"}
          rounded={"full"}
          color={"white"}
          flex={"1 0 auto"}
          _hover={{ bg: "white", color: "black" }}
          _focus={{ bg: "white", color: "black" }}
        >
          Checkout
        </Button>
      </Box>
    </Center>
  );
};

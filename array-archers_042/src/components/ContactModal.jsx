

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  Flex,
  Divider,
  Box,
  useToast, // Import the useToast hook
} from "@chakra-ui/react";
import logoimage from "../assets/brandlogo.png";
import { useModal } from "../contexts/ModalContext";

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast(); // Initialize the toast hook

  const handleSubmit = async () => {
    const contactDetails = {
      name,
      email,
      mobile,
      message,
    };

    try {
      const response = await fetch(
        "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactDetails),
        }
      );

      if (response.ok) {
        toast({
          title: "Message Sent.",
          description: "Your message has been successfully sent.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
        closeModal();
      } else {
        toast({
          title: "Failed to Send Message.",
          description:
            "There was an issue sending your message. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "An Error Occurred.",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      console.error("Error:", error);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
      <ModalContent bg="#3d3d3d" color="white">
        <ModalHeader display="flex" flexDirection="column" alignItems="center">
          <Image
            src={logoimage}
            alt="Harley Davidson Logo"
            boxSize="50px"
            mb={2}
          />
          <Flex
            alignItems="center"
            fontSize="xl"
            fontWeight="bold"
            ml={4}
            mb={2}
          >
            <Box>HARLEY</Box>
            <Divider
              width="12px"
              borderColor="orangered"
              mx={1}
              borderWidth="1px"
            />
            <Box>DAVIDSON</Box>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Your Name</FormLabel>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter pt={-4}>
          <Button colorScheme="orange" mr={3} onClick={handleSubmit}>
            Send Message
          </Button>
          <Button colorScheme="orange" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;


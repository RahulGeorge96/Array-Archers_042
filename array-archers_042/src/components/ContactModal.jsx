

import React from "react";
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
  useDisclosure,
  Image,
  Box,
  Flex,
  Divider,
} from "@chakra-ui/react";
import logoimage from "../assets/brandlogo.png";

const ContactModal = ({ isOpen, onClose }) => {


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
        <ModalContent bg="#3d3d3d" color="white">
          <ModalHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
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
              <Input placeholder="Enter your name" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Mobile Number</FormLabel>
              <Input type="tel" placeholder="Enter your mobile number" />
            </FormControl>

            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Write your message here..." />
            </FormControl>
          </ModalBody>

          <ModalFooter pt={-4}>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Send Message
            </Button>
            <Button colorScheme="orange" onClick={onClose} color="white">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
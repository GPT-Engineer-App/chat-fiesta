import React, { useState } from "react";
import { Box, Button, Container, Flex, Input, VStack, Text, Heading, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleSendMessage = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Cannot send empty message.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <Container maxW="container.md" p={5}>
      <Heading mb={4}>Simple Chat App</Heading>
      <VStack spacing={4} align="stretch">
        <Flex direction="column" p={4} bg="gray.100" height="400px" overflowY="auto">
          {messages.map((message, index) => (
            <Box key={index} bg="teal.100" p={2} borderRadius="md" alignSelf="flex-end" maxWidth="70%">
              <Text>{message}</Text>
            </Box>
          ))}
        </Flex>
        <Flex>
          <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <Button leftIcon={<FaPaperPlane />} ml={2} colorScheme="teal" onClick={handleSendMessage}>
            Send
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;

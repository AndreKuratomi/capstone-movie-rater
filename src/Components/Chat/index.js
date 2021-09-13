import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box, Flex, Button, Input } from "@chakra-ui/react";
const socket = io("https://chat-capstone-g5.herokuapp.com/");
const userName = "User " + parseInt(Math.random() * 10);
function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  useEffect(() => {
    socket.on("message", (payload) => {
      setChat([...chat, payload]);
    });
  });
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    socket.emit("message", { userName, message });
    setMessage("");
  };
  return (
    <Box bg="white" w="100%" h="100%" position="relative" padding="1rem">
      {chat.map((payload, index) => {
        return (
          <h3 key={index}>
            {payload.userName}: <span>{payload.message}</span>
          </h3>
        );
      })}
      <Box position="absolute" bottom="0px" w="100%" textAlign="center">
        <form onSubmit={sendMessage}>
          <Input
            type="text"
            w="70%"
            name="message"
            placeholder="Type message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></Input>
          <Button type="submit" bg="#440000" color="white">
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
}
export default Chat;

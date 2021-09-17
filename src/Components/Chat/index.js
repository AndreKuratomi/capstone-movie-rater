import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box, Button, Input } from "@chakra-ui/react";
import "./styles.css";
import { useUser } from "../../Providers/User";

const socket = io("https://chat-capstone-g5.herokuapp.com/");

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const { userName } = useUser();

  useEffect(() => {
    socket.on("message", (payload) => {
      setChat([...chat, payload]);
    });
  });
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { userName, message });
    setMessage("");
  };
  return (
    <Box>
      <Box bg="white" w="100%" h="100%" position="relative">
        {chat.map((payload, index) => {
          return (
            <Box>
              {payload.userName}
              <Box
                key={index}
                position="relative"
                borderRadius="2px"
                margin="0 25px 25px 25px"
                className="ballon"
                padding="1rem"
                w="50%"
              >
                <span>{payload.message}</span>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        position="absolute"
        bottom="0px"
        w="100%"
        textAlign="center"
        bg="white"
      >
        <form onSubmit={sendMessage}>
          <Input
            type="text"
            border="#440000"
            w="70%"
            focusBorderColor="none"
            name="message"
            placeholder="Type your message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></Input>
          <Button
            type="submit"
            bg="#440000"
            color="white"
            _hover={{ bg: "#000000" }}
            focusBorderColor="none"
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
}
export default Chat;

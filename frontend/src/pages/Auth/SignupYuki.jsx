import React, { useState, useEffect } from "react";
import classes from "./SignupYuki.module.css"; // Adjust this path if needed
import axios from "../../services/axios";
import { Typewriter } from "react-simple-typewriter";
import image from "../../assets/yuki.png";
import image2 from "../../assets/yuki2.png";
import image3 from "../../assets/yuki3.png";

const SignupYuki = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi, I am Yuki. How can I assist you?", type: "system" },
  ]);

  useEffect(() => {
    clearPromptHistory();
    
  }, []);

  const clearPromptHistory = () => {
    axios
      .post("/gemini/clear-history", {num:2})
      .then(() => console.log("Prompt history cleared"))
      .catch(handleChatError);
  };

  const fetchInitialResponse = () => {
    axios
      .post("/gemini/process", "")
      .then((response) => {
        // Process response here if needed
      })
      .catch(handleChatError);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    addMessage(userMessage, "user");
    fetchResponse(userMessage);
    setInputValue("");
  };

  const fetchResponse = (message) => {
    axios
      .post("/gemini/process", { prompt: message })
      .then((response) => {
        const systemResponse = response.data;
        addMessage(systemResponse, "system");
      })
      .catch(handleChatError);
  };

  const addMessage = (text, type) => {
    setMessages((prevMessages) => [...prevMessages, { text, type }]);
  };

  const handleChatError = (error) => {
    const errorMessage = error.response
      ? error.response.data
      : "Unknown error occurred";
    console.error("Chat error:", errorMessage);
  };

  return (
    <div className={classes.container_signup_yuki}>
      <div className={classes.react_yukiS_yukiS}>
        <div className={classes.card_yukiS}>
          <img
            src={image}
            alt="Profile"
            className={classes.profileImage_yukiS}
          />
          <h2 className={classes.h2_span_yukiS}>
            Yuki
            <img
              style={{ marginLeft: "10px", marginTop: "8px", height: "20px" }}
              src={image2}
              alt="Paws"
            />
          </h2>
        </div>
        <div className={classes.chat_yukiS}>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.type === "system" ? (
                <span className={classes.system_span_yukiS}>YUKI</span>
              ) : (
                <span className={classes.user_span_yukiS}>USER</span>
              )}
              <div className={classes[`${message.type}_yukiS`]}>
                {message.type === "system" ? (
                  <Typewriter
                    cursor={true}
                    cursorStyle={index === messages.length - 1 ? "█" : ""}
                    words={[message.text]}
                    typeSpeed={20}
                  />
                ) : (
                  message.text
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <form onSubmit={sendMessage} className={classes.formm_yukiS}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className={classes.inputt_yukiS}
          />
          <button type="submit" className={classes.buttonn_yukiS}>
            <img style={{ height: "20px" }} src={image3} alt="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupYuki;

import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessage";
import ChatFooter from "./ChatFooter";

const UserMessage = ({ selectedUser, messages, message, setMessage, handleSendMessage }) => {
  return (
    <div className="col-8 d-flex flex-column" style={{ backgroundColor: "#F0F2F5" }}>
      <ChatHeader selectedUser={selectedUser} />
      <ChatMessages selectedUser={selectedUser} messages={messages} />
      <ChatFooter message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default UserMessage;

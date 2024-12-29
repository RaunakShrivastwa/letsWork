import React from "react";

const ChatMessages = ({ selectedUser, messages, yourSocketID }) => {
    messages.forEach((msg, index) => {
        console.log(`Message ${index}:`, msg);
    });

    return (
        <div className="flex-grow-1 p-3 overflow-auto d-flex flex-column" style={{ backgroundColor: "#E5DDD5" }}>

            {messages
                .filter(
                    (msg) =>
                        (msg.sender === "You" && msg.targetID === selectedUser?.socketID) ||
                        (msg.sender === selectedUser?.name && msg.targetID === yourSocketID)
                )
                .map((msg, index) => (
                    <div key={index} className={`mb-2 d-flex ${msg.sender === "You" ? "justify-content-end" : "justify-content-start"}`}>
                        <div className={`p-2 rounded ${msg.sender === "You" ? "bg-primary text-white" : "bg-white text-dark"}`}
                            style={{ maxWidth: "70%", wordBreak: "break-word", }}>
                            <strong>{msg.sender}: </strong>
                            {msg.message}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ChatMessages;
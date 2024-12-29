import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import UserListSection from "./UserListSection";
import UserMessage from "./UserMessage";

const Chat = () => {
    const socket = useMemo(() => io("http://localhost:9192"), []);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [socketID, setSocketId] = useState("");
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (selectedUser?.name && message.trim()) {
            socket.emit("message", { targetID: selectedUser.name, message });
            setMessages((prev) => [
                ...prev,
                { sender: socketID, message, targetID: selectedUser.socketID, type: "sent" },
            ]);
            setMessage("");
        } else {
            alert("Select a user and type a message before sending!");
        }
    };

    useEffect(() => {
        socket.on("connect", () => {
            setSocketId(socket.id);
            console.log("Connected as:", socket.id);
        });

        socket.on("receive-message", ({ sender, message }) => {
            setMessages((prev) => [...prev, { sender, message, type: "received" }]);
        });

        socket.on("userList", (users) => {
            users = users.filter((user) => user.name !== socket.id);
            setUserList(users);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div
            className="container-fluid p-0 d-flex"
            style={{
                height: `calc(100vh - 71px)`,
                border: '3px solid #ddd',
                backgroundImage: "url('/image/wallpaper.jpg')", // Corrected path
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "71px 0",
            }}
        >
            <UserListSection setSelectedUser={setSelectedUser} socketID={socketID} userList={userList} />

            {selectedUser && (
                <UserMessage
                    selectedUser={selectedUser}
                    messages={messages}
                    message={message}
                    setMessage={setMessage}
                    handleSendMessage={handleSendMessage}
                />
            )}
        </div>

    );
};

export default Chat;
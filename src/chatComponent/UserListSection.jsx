import React from "react";
import Header from "./UserHeader";
import UserList from "./UserList";

const UserListSection = ({ setSelectedUser, socketID, userList, socket }) => {
    const handleUserClick = (user) => {
        setSelectedUser(user);
        socket.emit("join-room", { targetID: user.socketID });
    };

    return (
        <div
            className="col-4 border-end border-5 border-dark"
            style={{ backgroundColor: "#F0F2F5", overflowY: "auto", minWidth: "400px" }}
        >
            <Header socketID={socketID} />
            <UserList userList={userList} handleUserClick={handleUserClick} />
        </div>
    );
};

export default UserListSection;
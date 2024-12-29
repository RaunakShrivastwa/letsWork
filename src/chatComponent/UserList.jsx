import React from "react";

const UserList = ({ userList, selectedUser, handleUserClick }) => {
    return (
        <>
            {userList?.map((user, index) => (
                <div
                    key={index}
                    className={`d-flex p-3 align-items-center user-item ${selectedUser?.socketID === user.socketID ? "bg-light" : ""
                        }`}
                    onClick={() => handleUserClick(user)}
                    style={{
                        cursor: "pointer",
                        borderBottom: "1px solid #e9ecef",
                    }}
                >
                    <div
                        className="rounded-circle bg-secondary me-3 d-flex justify-content-center align-items-center"
                        style={{
                            width: "50px",
                            height: "50px",
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                            <h6 className="m-0">{user.name}</h6>
                            <small className="text-muted">12:30 PM</small>
                        </div>
                        <small className="text-muted">{user.socketID}</small>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserList;

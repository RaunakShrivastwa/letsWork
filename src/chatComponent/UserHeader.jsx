import React from "react";

const UserHeader = ({ socketID }) => {
    return (
        <div>
            {/* Header */}
            <div className="bg-white p-3 d-flex justify-content-between align-items-center">
                <h5 className="m-0">Chats</h5>
                <small className="text-muted">Your ID: {socketID}</small>
            </div>

            {/* Search Bar */}
            <div className="p-3 bg-light">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search or start new chat"
                />
            </div>
        </div>
    );
};

export default UserHeader;

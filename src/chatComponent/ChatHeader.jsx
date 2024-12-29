import React from "react";

const ChatHeader = ({ selectedUser }) => {
    return (
        <div className="bg-white p-3 d-flex justify-content-between align-items-center">
            {selectedUser ? (
                <div className="d-flex align-items-center">
                    <div
                        className="rounded-circle bg-secondary me-3 d-flex justify-content-center align-items-center"
                        style={{
                            width: "50px",
                            height: "50px",
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        {selectedUser.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h6 className="m-0">{selectedUser.name}</h6>
                        <small>Online</small>
                    </div>
                </div>
            ) : (
                <h6 className="m-0">Select a user to chat</h6>
            )}
            <div>
                <button className="btn btn-link text-dark p-0 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
                <button className="btn btn-link text-dark p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;

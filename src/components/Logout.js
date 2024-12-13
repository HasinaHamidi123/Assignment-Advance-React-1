import React from "react";

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
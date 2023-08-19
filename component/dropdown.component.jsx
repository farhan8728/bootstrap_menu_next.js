import React, { useState } from "react";

const dropdownItemStyles = {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    padding: "0.25rem 1.5rem",
    clear: "both",
    fontWeight: "400",
    lineHeight: "1.5",
    whiteSpace: "nowrap",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "0",
    transition: "color 0.15s",
    fontSize: "1rem",
    width: "100%",
    textAlign: "inherit",
    cursor: "pointer",
};

const customDropdownStyles = {
    fontSize: "17px",
    paddingTop: "0px",
    color: "#fff",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    height: "60px",
    lineHeight: "58px",
    marginLeft: "15px",
};

function CustomDropdown() {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const buttonStyles = {
        ...customDropdownStyles,
        backgroundColor: isHovered ? "#113681" : "transparent",
        fontFamily: 'SolaimanLipi',
        fontSize:"20px",
        paddingLeft:"8px",
        paddignRight:"8px"
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <div
                style={buttonStyles}
                onClick={toggleDropdown}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                অন্যান্য
            </div>
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "1000",
                        minWidth: "10rem",
                        backgroundColor: "#3458a0",
                        border: "none",
                        borderRadius: "0.25rem",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                    }}
                >
                    <a href="#/action-1" style={dropdownItemStyles}>
                        Action
                    </a>
                    <a href="#/action-2" style={dropdownItemStyles}>
                        Another action
                    </a>
                    <a href="#/action-3" style={dropdownItemStyles}>
                        Something else
                    </a>
                </div>
            )}
        </div>
    );
}

export default CustomDropdown;
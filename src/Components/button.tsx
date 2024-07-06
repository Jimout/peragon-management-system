import React from 'react';

interface ButtonProps {
    onClick?: () => void; // Optional onClick handler
    children: React.ReactNode; // Content of the button (can be text or other elements)
}
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

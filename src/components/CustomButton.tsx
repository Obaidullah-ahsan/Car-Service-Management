import React, { FC } from 'react';

// Define the prop types
interface CustomButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

// Use FC (Functional Component) to define the component type
const CustomButton: FC<CustomButtonProps> = ({ title, onClick, className = '', type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            className={`${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default CustomButton;

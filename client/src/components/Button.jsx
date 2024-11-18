import React from 'react';

export function Button({ variant, className, children, ...props }) {
    const baseStyle = 'px-4 py-2 rounded focus:outline-none';
    let variantStyle = '';

    switch (variant) {
        case 'outline':
            variantStyle = 'border border-gray-300 text-gray-700';
            break;
        case 'link':
            variantStyle = 'text-blue-500 hover:underline';
            break;
        default:
            variantStyle = 'bg-blue-500 text-white hover:bg-blue-600';
            break;
    }

    return (
        <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
            {children}
        </button>
    );
}

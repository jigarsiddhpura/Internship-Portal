import React from 'react';

export function Input({ className, ...props }) {
    return (
        <input
            className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 ${className}`}
            {...props}
        />
    );
}
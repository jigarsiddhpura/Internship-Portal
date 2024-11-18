import React from 'react';

export function Avatar({ className, children }) {
    return (
        <div className={`relative inline-block rounded-full overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export function AvatarImage({ src, alt }) {
    return (
        <img className="w-full h-full object-cover" src={src} alt={alt} />
    );
}

export function AvatarFallback({ children }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            {children}
        </div>
    );
}

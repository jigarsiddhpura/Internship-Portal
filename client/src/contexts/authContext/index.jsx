import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext) || false;
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    // this useEffect will help maintaining the user session ⭐
    useEffect(() => {
        initializeUser();
    }, []); 

    async function initializeUser() {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/api/auth/status", {
                credentials: "include", // Include (SEND/RECEIVE) cookies for session management
            });
            if (response.ok) {
                const user = await response.json();
                setCurrentUser(user);
                setUserLoggedIn(true);
                console.log("Logged in user:", user);
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
        } catch (error) {
            console.error("Error fetching user status:", error);
            setCurrentUser(null);
            setUserLoggedIn(false);
        } finally {
            setLoading(false);
        }
    }

    async function signOut() {
        try {
            const response = await fetch("http://localhost:8080/api/auth/signout", {
                method: "POST",
                credentials: "include",
            });
            if (response.ok || response.status === 204) {
                setCurrentUser(null);
                setUserLoggedIn(false);
                console.log("User signed out successfully.");
            } else {
                console.error("Error signing out:", response.statusText);
            }
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        initializeUser,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

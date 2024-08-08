import React from "react";
import { AuthProvider } from "./authContext";
import { createContext, useContext } from "react";
import AppContext, { AppProvider } from "./AppContext";
import { useCalendar } from "@nextui-org/react";
import { useAuth } from "./authContext";

export const ContextProviders = ({ children }) => {
    return (
        <AppProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </AppProvider>
    )
}
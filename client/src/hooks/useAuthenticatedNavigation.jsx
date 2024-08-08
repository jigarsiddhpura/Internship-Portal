import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const useAuthenticatedNavigation = () => {
    const {userLoggedIn} = useAuth();
    const navigate = useNavigate();

    const navigateIfAuthenticated = (destination) => {
        if (userLoggedIn){
            navigate(destination);
        } else {
            navigate("/Login");
        } 
    }

    return navigateIfAuthenticated;
}
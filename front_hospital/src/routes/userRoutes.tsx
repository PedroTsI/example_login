import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../screens/auth/login";
import SignupForm from "../screens/auth/signup";
import Home from "../screens/home/home";
import ListMedic from "../screens/medic/list-medic";
import RegisterMedic from "../screens/medic/register-medic";

export const userRoutes = createBrowserRouter([
    {path: "/login", element: <LoginForm/>},
    {path: "/register", element: <SignupForm/>},
    {path: "/", element: <Home/>},
    {path: "/list-medic", element: <ListMedic/>},
    {path: "/register-medic", element: <RegisterMedic/>},
]);
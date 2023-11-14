import { RouterProvider, Routes } from "react-router-dom";
import { userRoutes } from "./userRoutes";

export const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={userRoutes} />;
};
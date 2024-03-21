import { createBrowserRouter } from "react-router-dom";
import GuestLayout from './components/GuestLayout';
import ProtectedLayout from './components/ProtectedLayout';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <SignIn />
            },
            {
                path: '/register',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/home',
        element: <ProtectedLayout/>,
        children: [
            {
                path: '/home',
                element: <Home />
            }
        ]
    },
]);

export default router;

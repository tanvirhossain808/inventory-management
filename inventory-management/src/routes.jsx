import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Hi from "./components/Hi/Hi";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: 'hi',
                element: <Hi></Hi>
            }
        ]
    },
    // {
    //     path: '/home',
    //     element: <Home></Home>
    // }

]
)
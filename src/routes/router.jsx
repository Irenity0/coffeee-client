import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root';
import AddCoffee from '../pages/addCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
import RootLayout from '../Layout/RootLayout';
import ErrorPage from '../error-page';



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Root></Root>
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updatecoffee',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])

export default router;
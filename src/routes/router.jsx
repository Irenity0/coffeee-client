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
                element: <Root></Root>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])

export default router;
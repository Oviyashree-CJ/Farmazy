import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Login from '../pages/login'; 
import Faq from '../pages/faq';
import Terms from '../pages/terms';
import LogoutConfirmationModal from '../pages/confirm';
import ForgotPinModal from './forgot';
import Cart from '../pages/cart';
import ProductsPage from '../pages/products';
import PaymentPage from '../pages/payment';

const AppRoutes = () => {
    const routes = [
        { path: "/", element: <Navigate to="/home" /> }, 
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/faq", element: <Faq /> },
        { path: "/terms", element: <Terms /> },
        { path: "/confirm", element: <LogoutConfirmationModal /> },
        { path: "/forgot", element: <ForgotPinModal /> },
        { path: "/cart", element: <Cart/> },
        { path: "/products", element: <ProductsPage/> },
        { path: "/payment", element: <PaymentPage/>},
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRoutes;

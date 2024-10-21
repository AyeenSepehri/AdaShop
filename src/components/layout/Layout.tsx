import React from 'react';
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon";
import BagIcon from "../../assets/icons/BagIcon";
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const Layout = ({children}: { children: React.ReactNode }) => {
    const location = useLocation();
    const products = useSelector((state: RootState) => state.products);

    //calculate the total number of the selected products
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);

    const isHomePage = location.pathname === "/";
    const isCartPage = location.pathname === "/cart";

    return (
        <div className="container mx-auto py-10 px-10 text-center w-2/3">
            <h1 className="text-4xl font-bold mb-8 text-purple-700">ADA SHOP</h1>
            <div className="flex justify-end gap-4 mt-16 mb-4">
                <Link
                    to={"/"}
                    className={`${
                        isHomePage ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-700'
                    } py-2 px-4 rounded flex justify-center items-center gap-2`}
                >
                    محصولات
                    <BagIcon color={isHomePage ? '#ffffff' : '#8e03d0'}/>
                </Link>
                <Link
                    to={"/cart"}
                    className={`${
                        isCartPage ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-700'
                    } py-2 px-4 rounded flex justify-center items-center gap-2 relative`}
                >
                    سبد خرید
                    <ShoppingCartIcon color={isCartPage ? '#ffffff' : '#8e03d0'}/>
                    {totalItems !== 0 &&
                        <div
                            className="bg-fuchsia-500 rounded text-white absolute top-1 left-7 w-4 h-4 flex justify-center items-center text-xs">
                            {totalItems}
                        </div>
                    }
                </Link>
            </div>
            {children}
        </div>
    );
};

export default Layout;
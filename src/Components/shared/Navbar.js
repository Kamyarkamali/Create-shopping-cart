import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//ICONS
import shop from "../../Icon/shop.svg";

//Style
import style from "../shared/Navbar.module.css";

const Navbar = () => {
    const {state}=useContext(CartContext)
    return (
        <div className={style.mainContaner}>
            <div className={style.Container}>
                <Link to="/products" className={style.prodoctLink}>Prodocts</Link>
                <div className={style.iconContainer}>
                <Link to="/cart"><img src={shop} alt='shop'/></Link>
                <span>{state.itemsCounter}</span>
                </div>
                </div>
        </div>
    );
};

export default Navbar;
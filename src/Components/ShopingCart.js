import React,{ useContext } from 'react';

//Context
import { CartContext } from '../context/CartContextProvider';

//Components
import Cart from './Cart';

import { Link } from 'react-router-dom';

//Style
import style from "./ShopingCart.module.css";

const ShopingCart = () => {
    const {state,dispatch}=useContext(CartContext)
    return (
        <div className={style.Container}>
            <div className={style.cartcontainer}>
                {state.selectedItems.map(item=> <Cart key={item.id} data={item}/>)}
                </div>
                {
                    state.itemsCounter > 0 && <div className={style.payment}>
                        <p><span>Total Items:</span>{state.itemsCounter}</p>
                        <p><span>Total payment:</span>{state.itemsCounter}</p>
                        <div className={style.buttoncontainer}>
                            <button className={style.checkout} onClick={()=>dispatch({type:"CHECKOUT"})}>checkout</button>
                            <button className={style.cleare} onClick={()=>dispatch({type:"CLEARE"})}>Clear</button>
                        </div>
                    </div>
                }
                {
                    state.checkout && <div className={style.comlated}>
                        <h3>Checkout out sucsseuflly</h3>
                        <Link to="/products">Go To Shop</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemsCounter=== 0 && <div>
                        <h3>Whant To Buy?</h3>
                        <Link to="/products">Go To Shop</Link>
                    </div>
                }
        </div>
    );
};

export default ShopingCart;
import React,{ useContext } from 'react';

//Context
import { CartContext } from '../context/CartContextProvider';

///Founctions
import { shorten } from '../helper/function';

//ICON
import trash from "../Icon/trash.svg";

//Style
import style from "../Components/Cart.module.css";

const Cart = (props) => {
    const {dispatch}=useContext(CartContext)
    const {image,title,price,quantity}=props.data
    return (
        <div className={style.container}>
                <img className={style.productImage} src={image} alt="shop"/>
                <div className={style.data}>
                    <h3>{shorten(title)}</h3>
                    <p>{price} $</p>
                </div>
                <div>
                    <span className={style.quantity}>{quantity}</span>
                </div>
                <div className={style.buttonContainer}>
                    {
                        quantity >1 ?
                        <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>:
                        <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}>{<img src={trash} alt="trash"/>}</button>
                    }
                    <button onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>
                </div>
            </div>
    );
};

export default Cart;
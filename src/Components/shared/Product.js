import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

//ICON
import icon from "../../Icon/icon.png";

//function
import { shorten ,isInCart , quantityCount} from '../../helper/function';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Style
import style from "../shared/Product.module.css"

const Product = ({productData}) => {
    const {state,dispatch}=useContext(CartContext)
    const { image,price,title }=productData
    return (
        <div className={style.container}>
            <img className={style.cartImage} src={image} alt='prodoct'/>
            <h3>{shorten(title)}</h3>
            <p>{price}</p>
            <div className={style.linkContainer}>
                <Link to={`/products/${productData.id}`}>detailes</Link>
                <div className={style.butoonContainer}>
                {quantityCount(state,productData.id)===1 && <button className={style.smalButton} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img src={icon}/></button>}
                {quantityCount(state,productData.id)>1 && <button className={style.smalButton} onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
                {quantityCount(state,productData.id)>0 && <span className={style.counter}>{quantityCount(state,productData.id)}</span>}
                {
                    isInCart(state,productData.id)?
                    <button className={style.smalButton} onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>:
                    <button onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>Add To Cart</button>
                    
                }
                </div>
            </div>
        </div>
    );
};

export default Product;
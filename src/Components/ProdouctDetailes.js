import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProdouctsContext } from '../context/ProductscontextProvider';

///style
import style from "./shared/ProdouctDetailesStyle.module.css";

const ProdouctDetailes = (props) => {
    const id=props.match.params.id
    const data=useContext(ProdouctsContext)
    const product=data[id-1]
    const {image,title,description,price,category}=product;
    return (
       <div className={style.container}>
        <img className={style.image} src={image} alt="detailess"/>
        <div className={style.textContainer}>
            <h3>{title}</h3>
            <p className={style.description}>{description}</p>
            <p className={style.category}><span>Category:</span>{category}</p>
        <div className={style.buttonContainer}>
            <span className={style.price}>{price} $</span>
            <Link to="/products">Back To Home</Link>
        </div>
        </div>
       </div>
    );
};

export default ProdouctDetailes;
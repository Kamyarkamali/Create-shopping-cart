import React,{useContext} from 'react';

///Context
import { ProdouctsContext } from '../context/ProductscontextProvider';

///Components
import Product from './shared/Product';

///Style
import style from "./Store.module.css";

const Store = () => {
    const prodoct=useContext(ProdouctsContext)
    return (
        <div className={style.container}>
            {
                prodoct.map(product=> <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;
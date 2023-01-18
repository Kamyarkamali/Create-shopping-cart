import React,{ useState,useEffect } from 'react';

//API
import { getProducts } from '../services/Api';

///Context
export const ProdouctsContext=React.createContext()

const ProductsContextProvider = ({children}) => {
    const [prodoucts,seProdoucts]=useState([])

    useEffect(()=>{
        const fetchApi=async()=>{
            seProdoucts(await getProducts())
        }
        fetchApi()
    },[])

    return (
        <ProdouctsContext.Provider value={prodoucts}>
            {children}
        </ProdouctsContext.Provider>
    );
};

export default ProductsContextProvider;
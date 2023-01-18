import React,{ useReducer } from 'react';

const inisitaState={
    selectedItems:[],
    itemsCounter:0,
    totla:0,
    checkout:false
}

const sunmItems=(item)=>{
    const itemsCounter=item.reduce((totla,product)=>totla+product.quantity,0)
    const total=item.reduce((total,product)=>total+product.price*product.quantity,0).toFixed(2)
    return{itemsCounter,total}
}

const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item=>item.id===action.payload.id)){
            state.selectedItems.push({
                ...action.payload,
                quantity:1,
            })
        }
            return{
                ...state,
                selectedItems:[...state.selectedItems],
                ...sunmItems(state.selectedItems),
                checkout:false
            }
        case "REMOVE_ITEM":
            const newSelectedItems=state.selectedItems.filter(item=>item.id!==action.payload.id);
            return{
                ...state,
                selectedItems:[...newSelectedItems],
                ...sunmItems(newSelectedItems)
            }
        case "INCREASE":
            const indexI=state.selectedItems.findIndex(item=>item.id===action.payload.id)
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...sunmItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD=state.selectedItems.findIndex(item=>item.id===action.payload.id)
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...sunmItems(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                totla:0,
                checkout:true
            }
        case "CLEARE":
            return{
                selectedItems:[],
                itemsCounter:0,
                totla:0,
                checkout:false
            }
        default:
            return state
        }
    }


export const CartContext=React.createContext()

const CartContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,inisitaState);
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
import { createContext,useContext,useReducer,useEffect } from "react" ;
import products from "../data/products";
import CartReducer from "../reducer/cartReducer";
const CartContext = createContext()
const initState={
    products:products,
    total:0,
    amount:0
}
export const CartProvider=({children})=>{
    const [state,dispatch]= useReducer(CartReducer,initState)
    
    function removeItem(id){
        dispatch({type:"REMOVE",payload:id})

    }
    function addQuantity(id){
          dispatch({type:"ADD",payload:id})
    }

    function deleteQuantity(id){
        dispatch({type:"DELETE", payload:id})
    }

    useEffect(()=>{
         console.log("ผลรวม")
         dispatch({type:"CALCULATE_TOTAL"})
    },[state.products])
    return(
        <CartContext.Provider value={{...state,removeItem,addQuantity,deleteQuantity}}>
            {children}

        </CartContext.Provider>
    )

}

export const useCart=()=>{
    return useContext(CartContext)
}
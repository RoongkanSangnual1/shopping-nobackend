import { useCart } from "../context/CartContext"
import "./Item.css"
export default function Item(props){
    const {id,name,price,image,quantity}=props
    const {removeItem,addQuantity,deleteQuantity}=useCart()
   
    return(
        <div className="card">
        <img src={image} alt={id}/>
        <div className="product">
            <p className="name">ชื่อสินค้า : {name}</p>
            <p className="price">ราคา : {price}</p>
        </div >
        <div className="quantity">
            <button onClick={()=>addQuantity(id)}> + </button>
            <input type="text" value={quantity} disabled></input>
            <button onClick={()=>deleteQuantity(id)}> - </button>
        </div>
        <div className="total">
            {quantity*price}
        </div>
        <button onClick={()=>removeItem(id)}>ลบสินค้า</button>
        </div>
    )
}
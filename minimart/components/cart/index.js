import { Button } from "../../utility/components";

const Cart = () =>{
    return(
        <>
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-gray-400 mb-2">Subtotal: #999</span>
            <div className="card-actions">
                <Button text="View cart"/>
            </div>
        </>
    )
}

export default Cart;
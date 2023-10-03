import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import { CartItem } from "./CartItem";
import { Currency } from "../utils/Currency"
import Items from "../data/sneacker.json"

type ShoppingCartProps = {
    isOpen:boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps){
    const { closeCart,cartItems} = useShoppingCart()
    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
             Your Orders Here
            </Offcanvas.Title> 
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item=>(
                    <CartItem key={item.id} {...item}/>
                ))}
            </Stack>
            <div className="ms-auto fw-bold fs-5">
                Total: {Currency(
                            cartItems.reduce((total,cartItem)=>{
                            const items = Items.find(e=>e.id===cartItem.id)
                            return total + (items?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
    
            </div>
        </Offcanvas.Body>
    </Offcanvas>
    )
}
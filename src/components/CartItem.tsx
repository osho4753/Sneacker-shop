import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingContext"
import Items from "../data/sneacker.json"
import { Currency } from "../utils/Currency"

type CartItemProps = {
    id:number,
    quantity:number
}

export function CartItem({ id, quantity }:CartItemProps){

    const { removeItem } = useShoppingCart()

    const items = Items.find(e=>e.id===id)

    if( items == null ) return null

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img 
            src={items.imageUrl} 
            style={{width:"125px",height:"75px",objectFit:"cover"}}/>
            <div className="me-auto">
                <div>
                    {items.name}
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize:"13px"}}>
                          {' '}{quantity}x
                        </span>
                    )}

                </div>
                <div className="text-muted" style={{fontSize:"10px"}}>
                {Currency(items.price)}
                </div>
            </div>
            <div style={{fontSize:"14px"}}>
                {Currency(items.price * quantity)} 
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>X</Button>
        </Stack>
    )

}
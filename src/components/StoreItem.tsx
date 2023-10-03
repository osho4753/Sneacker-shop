import { Button, Card } from "react-bootstrap"
import { Currency } from "../utils/Currency"
import { useShoppingCart } from "../context/ShoppingContext"
type StoreItemProps = {
    id:number,
    name:string,
    price:number,
    imageUrl:string,
}


export function StoreItem({id,name,price,imageUrl}:StoreItemProps){
    
    const {getItem,increaseItem,decreaseItem,removeItem} = useShoppingCart()
    
    const quantity = getItem(id);

    return(
        <>
        <Card>
            <Card.Img 
            variant="top" 
            src={imageUrl} 
            height="200px" 
            style={{objectFit:"cover"}}/>
        </Card>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span>{name}</span>
            <span className="ms-2 text-muted">{Currency(price)}</span>
            </Card.Title>
        <div className="mt-auto ">
            {quantity === 0 ? (
                <Button className="w-100" onClick={() => increaseItem(id)}>Add to Card</Button>
            ):(
                <div 
                className="d-flex align-items-center flex-column" 
                style={{gap:".5rem"}}> 
                <div 
                className="d-flex align-items-center justify-content-center"
                style={{gap:".5rem"}}>
                <Button onClick={() => increaseItem(id)}>+</Button>
                <span>{quantity}</span>
                <Button onClick={() => decreaseItem(id)}>-</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeItem(id)}>Remove</Button>
                </div>

            )}
        </div>
        </Card.Body>
        </>
    )
}
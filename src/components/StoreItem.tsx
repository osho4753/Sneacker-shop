import { Button, Card } from "react-bootstrap"
import { Currency } from "../utils/Currency"
type StoreItemProps = {
    id:number,
    name:string,
    price:number,
    imageUrl:string,
}


export function StoreItem({id,name,price,imageUrl}:StoreItemProps){
    const quantity = 1;
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
                <Button className="w-100">Add to Card</Button>
            ):(
                <div 
                className="d-flex align-items-center flex-column" 
                style={{gap:".5rem"}}> 
                <div 
                className="d-flex align-items-center justify-content-center"
                style={{gap:".5rem"}}>
                <Button>+</Button>
                <span>{quantity}</span>
                <Button>-</Button>
                </div>
                <Button variant="danger" size="sm">Remove</Button>
                </div>

            )}
        </div>
        </Card.Body>
        </>
    )
}
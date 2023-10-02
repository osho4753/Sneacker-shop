import {Row,Col} from "react-bootstrap"
import Items from "../data/sneacker.json"
import { StoreItem } from "../components/StoreItem"

export function Store (){
    return (<>
    <h1>  Store  </h1>
    <Row>
        {Items.map(Items=>(
            <Col key={Items.id}>
                <StoreItem {...Items}/>
            </Col>
        ))}
    </Row>
    </>
    )
}
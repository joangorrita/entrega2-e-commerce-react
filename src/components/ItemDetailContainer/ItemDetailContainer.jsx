import { useState, useEffect } from "react";
import {getProductById} from `../../asyncMock`
import ItemDetail from `../ItemDetail/Itemfetail`
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=> {
    const [product, setProduct] = useState(null)

    const {itemId}= useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setProduct(response)
        })
        .catch(error=>{
            console.error(error)
        })

    }, [])

    return(
        <div className="ItemDetailContainer" >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;
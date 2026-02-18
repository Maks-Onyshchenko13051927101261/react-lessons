import {CartComponent} from "../cart-component/CartComponent.tsx";
import {useEffect, useState} from "react";
import type {ICartModel} from "../../../models/CartModel.tsx";
import {cartsServices} from "../../../services/api.service.tsx";
import {useParams} from "react-router-dom";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICartModel[]>([]);
    useEffect(() => {
        if (id) {
            cartsServices.allCartsOfUser(id).then(({carts}) => setCarts(carts));
        }
    }, [id]);
    return (
        <div>{
            carts.map(cart => <CartComponent cart={cart} key={cart.id}/>)
        }</div>
    );
};
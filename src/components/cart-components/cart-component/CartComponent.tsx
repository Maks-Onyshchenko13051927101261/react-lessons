import type {FC} from "react";
import type {ICartModel} from "../../../models/CartModel.tsx";

type CartPropsType = {
    cart: ICartModel;
}
export const CartComponent: FC<CartPropsType> = ({cart:{id, total}}) => {
    return (
        <div>{id} {total}</div>
    );
};
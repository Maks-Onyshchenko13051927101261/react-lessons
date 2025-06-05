import type {CharacterType} from "../../modules/CharacterType.ts";
import type {FC, ReactNode} from "react";
import "./CharacterStyles.css"

type CharacterComponentProps = {
    item: CharacterType,
    children: ReactNode,
}
export const CharacterComponent: FC<CharacterComponentProps> = ({item, children}: CharacterComponentProps) => {
    return (
        <div>
            <h2 className={"m-10"}>{item.name} {item.surname} {item.age}</h2>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};

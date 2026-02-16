import type {IUserGeo} from "./UserGeo.tsx";

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserGeo;
}
import type {IUserCoordinates} from "./UserCoordinates.tsx";

export interface IUserAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUserCoordinates;
    country: string;
}
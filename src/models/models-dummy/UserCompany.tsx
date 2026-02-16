import type {IUserAddress} from "./UsersDummy.tsx";

export interface IUserCompany {
    department: string;
    name: string;
    title: string;
    address: IUserAddress;
}
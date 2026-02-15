import type {IUserAddress} from "./UserAddress.tsx";
import type {IUserCompany} from "./UserCompany.tsx";

export interface IUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}
import type {IAddress} from "./Address.tsx";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress;
}

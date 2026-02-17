import type {ICompany} from "./CompanyModel.tsx";
import type {IHair} from "./HairModel.tsx";
import type {IAddress} from "./Address.tsx";
import type {IBank} from "./BankModel.tsx";
import type {ICrypto} from "./CryptoModel.tsx";

export interface IUserModel {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHair;
    ip: string;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto;
    role: string;
}
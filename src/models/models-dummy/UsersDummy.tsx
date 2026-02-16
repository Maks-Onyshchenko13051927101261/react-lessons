import type {IUserHair} from "./UserHair.tsx";
import type {IUserAddress} from "./UserAddress.tsx";
import type {IUserBank} from "./UserBank.tsx";
import type {IUserCompany} from "./UserCompany.tsx";
import type {IUserCrypto} from "./UserCrypto.tsx";

export interface IUserDummy {
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
    hair: IUserHair;
    ip: string;
    address: IUserAddress;
    macAddress: string;
    university: string;
    bank: IUserBank;
    company: IUserCompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: IUserCrypto;
    role: string;
}
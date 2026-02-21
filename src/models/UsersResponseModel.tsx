import type {IUserModel} from "./UserModel.tsx";

export interface IUsersResponseModel {
    total: number;
    skip: number;
    limit: number;
    users: IUserModel[];
}
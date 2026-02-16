import {urls} from "../constants/urls.ts";
import type {IUserModel} from "../models/models-placeholder/UserModel.tsx";
import type {IUserDummy} from "../models/models-dummy/UsersDummy.tsx";


// export
// export const allUsersDummy =


export const allUsers = {
    placeholder: async (): Promise<IUserModel[]> => await fetch(urls.users.usersPlaceholder)
        .then(res => res.json()),
    dummy: async (): Promise<IUserDummy[]> => await fetch(urls.users.usersDummy)
        .then((res) => res.json()).then(data => data.users),
}
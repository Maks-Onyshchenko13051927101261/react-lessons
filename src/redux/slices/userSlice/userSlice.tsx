import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUserModel} from "../../../models/IUserModel.tsx";
import {endpoint} from "../../../services/api.services.tsx";

type UserSliceType = {
    users: IUserModel[];
    isLoading: boolean;
    error: string | null;
}

const initUserSliceState: UserSliceType = {users: [], isLoading: false, error: null};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await endpoint.users()
    return thunkAPI.fulfillWithValue(users);
})
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUserModel[]>) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong";
        }),
})
export const userActions = {...userSlice.actions, loadUsers}
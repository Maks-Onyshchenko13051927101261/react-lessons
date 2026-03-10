import type {IPostModel} from "../../../models/IPostModel.tsx";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {endpoint} from "../../../services/api.services.tsx";

type PostSliceType = {
    posts: IPostModel[];
    isLoading: boolean;
    error: string | null;
}
const initPostSliceState: PostSliceType = {posts: [], isLoading: false, error: null};

const loadPosts = createAsyncThunk("loadPosts", async (_, thunkAPI) => {
    const posts = await endpoint.posts();
    return thunkAPI.fulfillWithValue(posts);
})
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPostModel[]>) => {
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(loadPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong";
        })
})
export const postActions = {...postSlice.actions, loadPosts};
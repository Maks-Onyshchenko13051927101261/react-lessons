import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ICommentModel} from "../../../models/ICommentModel.tsx";
import {endpoint} from "../../../services/api.services.tsx";

type CommentSliceType = {
    comments: ICommentModel[];
    isLoading: boolean;
    error: string | null;
}
const initCommentSLiceState: CommentSliceType = {comments: [], isLoading: false, error: null};

const loadComments = createAsyncThunk("loadComments", async (_, thunkAPI) => {
    const comments = await endpoint.comments()
    return thunkAPI.fulfillWithValue(comments);
})
export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initCommentSLiceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<ICommentModel[]>) => {
            state.isLoading = false;
            state.comments = action.payload;
        })
        .addCase(loadComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong";
        }),
})

export const commentAction = {...commentSlice.actions, loadComments}
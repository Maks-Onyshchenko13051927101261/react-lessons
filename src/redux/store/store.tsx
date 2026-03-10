import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice/userSlice.tsx";
import {postSlice} from "../slices/postSlice/postSlice.tsx";
import {commentSlice} from "../slices/commentSlice/commentSlice.tsx";


export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
})
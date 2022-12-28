import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'

type State = {
    blogs: any[];
    pages: number;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState: State = {
    blogs: [],
    pages: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// get all blogs
export const getBlogs = createAsyncThunk('blog/getAll', async (page: any, thunkAPI) => {
    try {
        return await blogService.getBlogs(page);
    } catch (error: any) {
        const message = (error.respose && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);

    }
})

// get blog
export const getBlog = createAsyncThunk('blog/getOne', async (slug: any, thunkAPI) => {
    try {
        return await blogService.getBlog(slug);
    } catch (error: any) {
        const message = (error.respose && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);

    }
})

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBlogs.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = action.payload.blogs
                state.pages = action.payload.pages
            })
            .addCase(getBlogs.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = typeof action.payload === "string" ? action.payload : 'Error'
            })
            .addCase(getBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBlog.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = action.payload
            })
            .addCase(getBlog.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = typeof action.payload === "string" ? action.payload : 'Error'
            })
    }
})

export const {reset} = blogSlice.actions;
export default blogSlice.reducer
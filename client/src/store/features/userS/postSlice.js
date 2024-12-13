import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	posts: [],
	loading: false,
}

export const getAllPosts = createAsyncThunk('/post/getAllPosts', async () => {
	try {
		const { data } = await axios.get('http://localhost:8080/api/succes/')
		return data
	} catch (error) {
		console.log(error)
	}
})

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// GetAllPosts
			.addCase(getAllPosts.pending, state => {
				state.loading = true
			})
			.addCase(getAllPosts.fulfilled, (state, action) => {
				state.loading = false
				state.posts = action.payload
			})
			.addCase(getAllPosts.rejected, (state, action) => {
				state.loading = false
			})
	},
})

export default postSlice.reducer

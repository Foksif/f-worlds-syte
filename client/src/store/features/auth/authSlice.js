import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
	access_token: '',
	isLoading: false,
	success: true,
	login: '',
}

export const loginUser = createAsyncThunk('auth/login', async authData => {
	try {
		const { login, password } = authData

		const { data } = await axios.post('http://localhost:8080/api/auth/login', {
			login,
			password,
		})

		// console.log(data.access_token)

		if (data.access_token) {
			window.localStorage.setItem('access_token', data.access_token)
		}

		return data
	} catch (e) {
		console.log(e)
	}
})

export const authSlice = createSlice({
	name: 'auth',

	initialState,

	reducers: {
		logout: state => {
			state.access_token = ''

			state.isLoading = false

			state.success = false

			state.login = ''
		},
	},

	extraReducers: builder => {
		// Login

		builder

			.addCase(loginUser.pending, state => {
				state.isLoading = true
			})

			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false

				state.access_token = action.payload.access_token

				state.login = action.payload.login
			})

			.addCase(loginUser.rejected, state => {
				state.isLoading = false
			})
	},
})

export const checkIsAuth = state => Boolean(state.auth.login)

export const { logout } = authSlice.actions

export default authSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import postSlice from './features/userS/postSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		post: postSlice,
	},
})

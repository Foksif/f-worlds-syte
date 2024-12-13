import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/features/auth/authSlice'

export const Logout = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(logout())
		window.localStorage.removeItem('access_token')
		// window.location.href = '/?id=14'
	}, [])

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					textAlign: 'center',

					fontSize: '40px',
				}}
				className='container'
			>
				Передриссация... Пожалуйста подождите!
			</div>
		</div>
	)
}

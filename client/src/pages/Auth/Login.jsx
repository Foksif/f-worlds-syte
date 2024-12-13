import { NavLink } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import style from './style.module.css'
import { loginUser } from '../../store/features/auth/authSlice'

export const Login = () => {
	const h2 = style.h2
	const inpotbox = style.inputbox

	const access_token = useSelector(state => state.auth.access_token)

	const dispath = useDispatch()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onSubmit',
	})

	useEffect(() => {
		const asFunk = async () => {
			if (access_token) {
				if (!access_token) {
					return toast.error(access_token)
				}
				window.location.href = '/?id=1&message=Авторизация прошла успешно!'
			}
		}
		asFunk()

		console.log(access_token)
	}, [])

	const onSubmit = data => {
		// console.log(JSON.stringify(errors))
		// console.log('subbb')
		if (Object.keys(errors).length > 0) {
			toast.error('Поля заполнены не корректно')
			// reset()
		} else {
			// Check for empty fields

			const emptyFields = []

			for (const key in data) {
				if (data[key] === '') {
					emptyFields.push(key)
				}
			}

			if (emptyFields.length > 0) {
				toast.error('Поля не могут быть пустыми')

				// reset()
			} else {
				successSubmit(data)
				// reset()
			}
		}
	}

	const successSubmit = data => {
		try {
			dispath(loginUser(data))
			// reset()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section className={style.section}>
			<div className={style.form_box}>
				<div className='form_value'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className={h2}>Login</h2>

						<div className={inpotbox}>
							<ion-icon name='person-outline'></ion-icon>
							<input
								{...register('login', {
									required: "Поле 'Login' обязательно для заполнения",
								})}
								type='text'
							/>
							<label htmlFor=''>Login </label>
						</div>
						<div className={inpotbox}>
							<ion-icon name='lock-closed-outline'></ion-icon>
							<input
								{...register('password', {
									required: "Поле 'Password' обязательно для заполнения",
									minLength: {
										value: 5,
										message: 'Пароль должен быть от 5 и до 40 символов',
									},
									maxLength: {
										value: 60,
										message: 'Пароль должен быть от 5 и до 40 символов',
									},
								})}
								type='password'
							/>
							<label htmlFor=''>Password</label>
						</div>
						<input value='Log In' type='submit' className={style.button} />
						<div className={style.register}>
							<h3>Protected with HardMS</h3>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

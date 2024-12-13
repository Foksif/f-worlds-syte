import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'

import api from '../utils/api.js'
import './../styles/success.css'

export const Success = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onSubmit',
	})

	const onSubmit = data => {
		// console.log(JSON.stringify(errors))
		// console.log('subbb')
		if (Object.keys(errors).length > 0) {
			toast.error('Поля заполнены не корректно')
			reset()
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
			}
		}
	}

	const successSubmit = data => {
		const { username, age, whois, plans, experience, telegram } = data
		const postData = {
			username,
			age,
			whois,
			plans,
			experience,
			telegram,
		}
		try {
			axios.post('http://localhost:8080/api/succes/', postData).then(res => {
				if (data) {
					toast.success('Заявка успешно отправлена! Желаем удачи :)')
					reset()
				}
			})
		} catch (err) {
			toast.error('Ошибка отправки данных')
		}
	}

	return (
		<section>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='input__wrapper'>
						<div className='input__wrapper_wrap'>
							<h1>
								Отправить <span>звявку</span> на сервер.
							</h1>
							<div className='input__block'>
								<input
									{...register('username', {
										// required: true,
									})}
									type='text'
									placeholder='Никнейм'
								/>
							</div>
							<div className='input__block'>
								<input
									{...register('age', {
										// required: true,
									})}
									type='text'
									placeholder='Возраст'
								/>
							</div>
							<div className='input__block'>
								<input
									{...register('whois', {
										// required: true,
									})}
									type='text'
									placeholder='Откуда узнали о сервере?'
								/>
							</div>
							<div className='input__block'>
								<textarea
									{...register('plans', {
										// required: true,
									})}
									type='text'
									placeholder='Ваши планы на сервер?'
								/>
							</div>
							<div className='input__block'>
								<input
									{...register('experience', {
										// required: true,
									})}
									type='text'
									placeholder='Играли раньше на подобных серверах?'
								/>
							</div>
							<div className='input__block'>
								<input
									{...register('telegram', {
										// required: true,
									})}
									type='text'
									placeholder='Телеграм'
								/>
							</div>

							<div className='input__block_button'>
								<input type='submit' value='Отправить заявку' />
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

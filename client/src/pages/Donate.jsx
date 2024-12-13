import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Slider from '@mui/material/Slider'

import './../styles/donate.css'
import Modal from '../components/Moddal/Modal'

import MVP from './../img/donate-P/mvp.png'
import MVPpls from './../img/donate-P/mvp+.png'
import Star from '../img/donate-P/star.png'

function DonatePage() {
	// USE

	const [userName, setUserName] = useState('')

	const [modalAccessActive, setModalAccessActive] = useState(false)

	const [sliderValue, setSliderValue] = useState(25)

	// Forms

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onSubmit',
	})

	if (errors?.userName) {
		toast.error('Поле UserName не должно быть пустым')
	}

	// Slider

	const handleSliderChange = (event, newValue) => {
		setSliderValue(newValue)
	}

	// ByuItems

	const byItemP = data => {
		const itemId = 858930

		const userName = data.userName
		const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=${itemId}:1`
		try {
			axios.get(tradeAPIByUrl).then(resp => {
				toast.info('Ещё пару секунд..')
				try {
					const CardIDdata = resp.data.response.cart_id
					const payAPI =
						'https://pay.trademc.org/?success_url=https%3A%2F%2Ff-worlds.net%2Fsucces&pending_url=https%3A%2F%2Ff-worlds.net%2Fsucces&fail_url=https%3A%2F%2Ff-worlds.net%2Fsucces&cart_id=' +
						CardIDdata

					toast.success('Перенаправляю.')

					window.location.href = payAPI
				} catch (err) {
					toast.error('Ошибка запроса')
				}
			})
		} catch (err) {
			toast.error('Ошибка запроса')
		}
	}

	const byItemFwPlus1 = data => {
		const itemId = 858930

		const userName = data.userName
		const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=${itemId}:1`
		try {
			axios.get(tradeAPIByUrl).then(resp => {
				try {
					const CardIDdata = resp.data.response.cart_id
					const payAPI =
						'https://pay.trademc.org/?success_url=https%3A%2F%2Ff-worlds.net%2Fsucces&pending_url=https%3A%2F%2Ff-worlds.net%2Fsucces&fail_url=https%3A%2F%2Ff-worlds.net%2Fsucces&cart_id=' +
						CardIDdata

					window.location.href = payAPI
				} catch (err) {
					toast.error('Ошибка запроса')
				}
			})
		} catch (err) {
			toast.error('Ошибка запроса')
		}
	}

	const byItemFwPlus2 = data => {
		const itemId = 858930

		const userName = data.userName
		const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=${itemId}:1`
		try {
			axios.get(tradeAPIByUrl).then(resp => {
				try {
					const CardIDdata = resp.data.response.cart_id
					const payAPI =
						'https://pay.trademc.org/?success_url=https%3A%2F%2Ff-worlds.net%2Fsucces&pending_url=https%3A%2F%2Ff-worlds.net%2Fsucces&fail_url=https%3A%2F%2Ff-worlds.net%2Fsucces&cart_id=' +
						CardIDdata

					window.location.href = payAPI
				} catch (err) {
					toast.error('Ошибка запроса')
				}
			})
		} catch (err) {
			toast.error('Ошибка запроса')
		}
	}

	const byItemFwPlus3 = data => {
		const itemId = 858930

		const userName = data.userName
		const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=${itemId}:1`
		try {
			axios.get(tradeAPIByUrl).then(resp => {
				try {
					const CardIDdata = resp.data.response.cart_id
					const payAPI =
						'https://pay.trademc.org/?success_url=https%3A%2F%2Ff-worlds.net%2Fsucces&pending_url=https%3A%2F%2Ff-worlds.net%2Fsucces&fail_url=https%3A%2F%2Ff-worlds.net%2Fsucces&cart_id=' +
						CardIDdata

					window.location.href = payAPI
				} catch (err) {
					toast.error('Ошибка запроса')
				}
			})
		} catch (err) {
			toast.error('Ошибка запроса')
		}
	}

	// Client
	return (
		<>
			<section className='donate-P__intro'>
				<div className='container'>
					<h1 className='donate-P__title'>
						Хочешь <span className='about__title-colored'>поддержать</span>{' '}
						сервер?
					</h1>

					<div className='donate__card-grid'>
						<div className='donate__card-card'>
							<div className='donate__card-img-wrap'>
								<img src={MVP} alt='picture' />
							</div>
							<div className='donate__card-content-wrap'>
								<p className='donate__card-price'>120 &#8381;</p>
								<h3 className='donate__card-title'>Проходка на сервер</h3>
								<p className='donate__card-description'>
									Проходка на сервер покупается 1 раз и будет доступна
									постоянно.
								</p>

								<button
									onClick={() => setModalAccessActive(true)}
									className='donate__card-button'
									type='button'
								>
									{' '}
									Купить
								</button>
							</div>
						</div>
						<div className='donate__card-card'>
							<div className='donate__card-img-wrap'>
								<img src={MVP} alt='picture' />
							</div>
							<div className='donate__card-content-wrap'>
								<p className='donate__card-price'>150 &#8381;</p>
								<h3 className='donate__card-title'>FW+ (14 дней)</h3>
								<p className='donate__card-description'>
									Данная подписка выдаётся лишь на месяц и каких-то пеимуществ
									над игроками не даёт.
								</p>

								<button className='donate__card-button' type='button'>
									{' '}
									Купить
								</button>
							</div>
						</div>
						<div className='donate__card-card'>
							<div className='donate__card-img-wrap'>
								<img src={MVP} alt='picture' />
							</div>
							<div className='donate__card-content-wrap'>
								<p className='donate__card-price'>300 &#8381;</p>
								<h3 className='donate__card-title'>FW+ (1 месяц)</h3>
								<p className='donate__card-description'>
									Данная подписка выдаётся лишь на месяц и каких-то пеимуществ
									над игроками не даёт.
								</p>

								<button className='donate__card-button' type='button'>
									{' '}
									Купить
								</button>
							</div>
						</div>
						<div className='donate__card-card'>
							<div className='donate__card-img-wrap'>
								<img src={MVP} alt='picture' />
							</div>
							<div className='donate__card-content-wrap'>
								<p className='donate__card-price'>600 &#8381;</p>
								<h3 className='donate__card-title'>FW+ (3 месяца)</h3>
								<p className='donate__card-description'>
									Данная подписка выдаётся лишь на месяц и каких-то пеимуществ
									над игроками не даёт.
								</p>

								<button className='donate__card-button' type='button'>
									{' '}
									Купить
								</button>
							</div>
						</div>
					</div>
					{/* <div className='donate__stars'>
						<div className='donate__star_left'>
							<img src={Star} className='image'></img>
						</div>

						<div className='donate__star_right'>
							<h3>
								Выберите количество <span className='colored'>звёзд</span> для
								покупки.
							</h3>

							<Slider
								value={typeof sliderValue === 'number' ? sliderValue : 5}
								min={5}
								max={500}
								onChange={handleSliderChange}
								valueLabelDisplay='auto'
								color='warning'
							/>
							<div className='donate__star_right-block'>
								<div className='star__sub'>
									<div className='star__right_subblock'>
										<h1>
											Сумма в рублях:{' '}
											<span className='colored'>
												{sliderValue * 10} &#8381;
											</span>
										</h1>
									</div>
									<div className='star__right_subblock'>
										<h1>
											Вы получите:{' '}
											<span className='colored'>{sliderValue} &#9733;</span>
										</h1>
									</div>
									<button className='star__button' type='button'>
										{' '}
										Купить
									</button>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</section>

			{/* Modals */}

			<Modal active={modalAccessActive} setActive={setModalAccessActive}>
				<div className='donate__modal_wrapper'>
					<div style={{ width: '100%' }}>
						<h1 style={{ fontSize: '24px', fontWeight: 600 }}>
							Оформление заказа:
						</h1>

						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								'margin-top': '20px',
							}}
						>
							<div className='donate__modal_left'>
								<h1>Проходка на сервер</h1>
								<div className='outline'></div>
								<h2>Вы получаете:</h2>
								<p>
									<i class='ri-checkbox-circle-line'></i>
									Доступ на сервер
								</p>
								<p>
									<i class='ri-checkbox-circle-line'></i>
									Поддержку по вопросам сервера
								</p>
							</div>

							<div className='donate__modal_right'>
								{/* FORM */}

								<form onSubmit={handleSubmit(byItemP)}>
									<div className='modal__right_block'>
										<div className='modal__input_wrapper'>
											<div className='modal__input_box'>
												<input
													{...register('userName', {
														required: true,
													})}
													type='text'
													placeholder='Ваш никнейм'
												/>
												<label htmlFor=''>Username:</label>
											</div>
											<div className='modal__input_box'>
												<input type='text' placeholder='Промокод (если есть)' />
												<label htmlFor=''>Промокод:</label>
											</div>
										</div>
									</div>
									<div className='modal__right_block'>
										<div className='modal__right_bottom-content'>
											<h1>Оформление платежа:</h1>
											<div className='modal__bottom_sub'>
												<h2>Стоимость товаров</h2>
												<h2></h2>
												<h3>120.00</h3>
											</div>
											<input
												value='Оплатить'
												className='modal__bottom_button'
												type='submit'
											/>
										</div>
									</div>
								</form>

								{/* END FORM */}
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}

export { DonatePage }

// API

// const byItemMVP = e => {
// 	setErrors('')
// 	e.preventDefault()
// 	const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=863923:1`
// 	try {
// 		axios.get(tradeAPIByUrl).then(resp => {
// 			try {
// 				const CardIDdata = resp.data.response.cart_id
// 				const payAPI =
// 					'https://pay.trademc.org/?success_url=https%3A%2F%2Ffoksf.fun%2Fsucces&pending_url=https%3A%2F%2Ffoksf.fun%2Fsucces&fail_url=https%3A%2F%2Ffoksf.fun%2Fsucces&cart_id=' +
// 					CardIDdata
// 				console.log(payAPI)
// 				console.log(userName)

// 				console.log('Succes обработка данных завершенна!')

// 				setErrors('')

// 				window.location.href = payAPI
// 			} catch (err) {
// 				console.log(err)
// 				setErrors('Error: Ошибка обработки данных!')
// 			}
// 		})
// 	} catch (err) {
// 		console.log(err)
// 		setErrors('Error: Ошибка обработки данных!')
// 	}
// }

// const byItemMVPpls = e => {
// 	setErrors('')
// 	e.preventDefault()
// 	const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=863924:1`
// 	try {
// 		axios.get(tradeAPIByUrl).then(resp => {
// 			try {
// 				const CardIDdata = resp.data.response.cart_id
// 				const payAPI =
// 					'https://pay.trademc.org/?success_url=https%3A%2F%2Ffoksf.fun%2Fsucces&pending_url=https%3A%2F%2Ffoksf.fun%2Fsucces&fail_url=https%3A%2F%2Ffoksf.fun%2Fsucces&cart_id=' +
// 					CardIDdata
// 				console.log(payAPI)
// 				console.log(userName)

// 				console.log('Succes обработка данных завершенна!')

// 				setErrors('')

// 				window.location.href = payAPI
// 			} catch (err) {
// 				console.log(err)
// 				setErrors('Error: Ошибка обработки данных!')
// 			}
// 		})
// 	} catch (err) {
// 		console.log(err)
// 		setErrors('Error: Ошибка обработки данных!')
// 	}
// }

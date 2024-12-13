import React from 'react'
import style from './style.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

export const UserItem = ({ post }) => {
	const { id, username, age, whois, plans, experience, telegram } = post
	const request = `http://localhost:8080/api/succes/${id}`

	const remItem = () => {
		try {
			axios.delete(request).then(data => {
				if (!data) {
					window.location.href = '/admin/dashboard?id=0'
				}
				window.location.href = '/admin/dashboard?id=1'
			})
		} catch (err) {
			console.log(err)
		}
	}

	const succesItem = () => {
		try {
			axios.patch(request).then(data => {
				if (!data) {
					return (window.location.href = '/admin/dashboard?id=0')
				}
				if (data.data.status) {
					return (window.location.href = '/admin/dashboard?id=2')
				}
				// console.log(data.data.status)
				window.location.href = '/admin/dashboard?id=3'
			})
		} catch (err) {
			console.log(err)
		}
	}

	if (!post) {
		return (
			<div>
				<h1>заявок не обнаружено :(</h1>
			</div>
		)
	}

	return (
		<div className={style.main}>
			<div className={style.main__area}>
				<h1>ID Заявки:</h1>
				<h2>{id}</h2>
			</div>
			<span className={style.main__line}></span>
			<div className={style.main__area}>
				<h1>Никнейм:</h1>
				<h2>{username}</h2>
			</div>
			<span className={style.main__line}></span>
			<div className={style.main__area}>
				<h1>Возраст:</h1>
				<h2>{age}</h2>
			</div>
			<span className={style.main__line}></span>
			<div className={style.main__area}>
				<h1>Откуда узнали:</h1>
				<h2>{whois}</h2>
			</div>
			<span className={style.main__line}></span>
			<div className={style.main__area}>
				<h1>Планы на сервер:</h1>
				<h2>{plans}</h2>
			</div>
			<span className={style.main__line}></span>
			<div className={style.main__area}>
				<h1>Опыт игры на серверах:</h1>
				<h2>{experience}</h2>
			</div>
			<span className={style.main__line}></span>
			<div className={style.main__area}>
				<h1>Ваш Telegram:</h1>
				<h2>{telegram}</h2>
			</div>

			<div className={style.main__area}>
				<button onClick={succesItem} className={style.button}>
					Принять
				</button>
				<button onClick={remItem} className={style.button2}>
					Отказать
				</button>
			</div>
		</div>
	)
}

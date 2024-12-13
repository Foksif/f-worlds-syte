import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import hardLogo from '../../../img/hardLogo.png'
import { toast } from 'react-toastify'
import { getAllPosts } from '../../../store/features/userS/postSlice'
import { UserItem } from '../../../components/UserItem/UserItem'

export const Dashboard = () => {
	const st_text = style.text + ' ' + style.header_text
	const st_icon = 'bx bx-chevron-right' + ' ' + style.toggle
	const st_navtext = style.text + ' ' + style.nav_text

	const [close, setClose] = useState(true)

	const [userData, setUserData] = useState([])

	const dispatch = useDispatch()
	const { posts } = useSelector(state => state.post)

	const filtresPosts = posts.filter(item => item.isdone === false)

	const searchParamsId = new URLSearchParams(window.location.search)
	const paramid = searchParamsId.get('id')

	const checkData = () => {
		if (paramid == 0) {
			toast.error('Произошла непредвиденная ошибка')
		} else if (paramid == 1) {
			toast.success('Заявка успешно отклонена!')
		} else if (paramid == 2) {
			toast.error('Игровой сервер не отвечает')
		} else if (paramid == 3) {
			toast.success('Заявка успешно принята')
		} else {
		}
	}

	useEffect(() => {
		dispatch(getAllPosts())

		checkData()
	}, [dispatch])

	return (
		<>
			{/* NavBar */}
			<nav
				className={close ? style.sidebar + ' ' + style.close : style.sidebar}
			>
				<header>
					<div className={style.image_text}>
						<span className={style.image}>
							<img src={hardLogo} alt='HardGroup' />
						</span>
						<div className={st_text}>
							<span className={style.name}>FishWorlds</span>
							<span className={style.profession}>Site version: 0.1</span>
						</div>
					</div>

					<i onClick={() => setClose(!close)} className={st_icon}></i>
				</header>

				<div className={style.menu_bar}>
					<div className={style.menu}>
						<ul className={style.menu_links}>
							<li className={style.nav_link}>
								<a href='/admin/dashboard'>
									<i className={'bx bxs-dashboard' + ' ' + style.icon}></i>
									<span className={st_navtext}>Dashboard</span>
								</a>
							</li>
						</ul>
					</div>

					<div className={style.bottom_content}>
						<li className={style.nav_link}>
							<a href='/'>
								<i className={'bx bx-log-out' + ' ' + style.icon}></i>
								<span className={st_navtext}>Home</span>
							</a>
						</li>
					</div>
				</div>
			</nav>
			{/* Home */}

			<section className={style.home}>
				<main>
					<div class={style.header}>
						<div class={style.left}>
							<h1>Dashboard</h1>
							<ul class={style.breadcrumb}>
								<li>Analytics</li>
							</ul>
						</div>
					</div>

					<ul className={style.insights}>
						<li>
							<i className={'bx bx-user-plus' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>{posts.length}</h3>
								<p>Всего заявок</p>
							</span>
						</li>
						<li>
							<i className={'bx bx-server' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>ERR</h3>
								<p>Game online</p>
							</span>
						</li>
						<li>
							<i className={'bx bx-news' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>ERR</h3>
								<p>News</p>
							</span>
						</li>
						<li>
							<i className={'bx bx-dollar-circle' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>ERR</h3>
								<p>Total Sales</p>
							</span>
						</li>
					</ul>

					<h5 className={style.wrap__index}>Users success</h5>
					<div className={style.wrap}>
						<div className={style.wrapper}>
							{filtresPosts?.map((post, idx) => (
								<UserItem key={idx} post={post} />
							))}
						</div>
					</div>
				</main>
			</section>
		</>
	)
}

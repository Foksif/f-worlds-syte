import React from 'react'
import './../styles/info.css'

import foks from '../img/users/foks.jpg'
import KISELEK from './../img/users/kiselek.gif'
import FOW from './../img/users/fow.png'
import nyatex from './../img/users/nyatex.jpg'
import myka from './../img/users/myka.jpg'
import sabday from './../img/users/sabday.jpg'
import angel from './../img/users/angel.jpg'
import kivit from './../img/users/kivit.jpg'
import santi from './../img/users/santy.jpg'

import draginIMG from './../img/infoPage/dragon.png'
import oneSeasonIMG from './../img/infoPage/oneSeason.png'

const InfoPage = () => {
	return (
		<>
			<section className='main-about'>
				<div className='container'>
					<div className='main-about__intro'>
						<h1 className='main-about__title'>
							О <span className='about__title-colored'>проекте</span>
						</h1>

						<div className='main-about__block'>
							<div className='main-about__block-img'>
								<img className='main-about__img' src={draginIMG} alt='' />
								<img className='main-about__img' src={oneSeasonIMG} alt='' />
							</div>
							<div className='main-about__block-text'>
								<p>
									<span className='about__title-colored'>F-WORLDS </span> - или
									FishWorlds раньше это было 2 отдельных сервера: FishCraft и
									F-Worlds однако в сентябре 2024 года всё изменилось.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='about-users'>
				<div className='container'>
					<div className='main-about__intro-one'>
						<h1 className='main-about__title-one'>
							Наши <span className='about__title-colored'>разработчики</span>
						</h1>
					</div>

					<h1 className='user__spacer'>Высшая Администрация:</h1>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={foks} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Foks_f</span>
									<div className='user__roles user__roles-founder'>
										<h3 className='user__roles__names-txt'>Основатель</h3>
									</div>
									<div className='user__roles user__roles-teamlid'>
										<h3 className='user__roles__names-txt'>Team Leader</h3>
									</div>
									<div className='user__roles user__roles-backend'>
										<h3 className='user__roles__names-txt'>
											SoftWare developer
										</h3>
									</div>
									<div className='user__roles user__roles-administrator'>
										<h3 className='user__roles__names-txt'>Administrator</h3>
									</div>
								</div>
								<div className='user__line role-founder'></div>
								<div className='user__text-content'>
									<span>Let me die.</span>
								</div>
							</div>
						</div>
					</div>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={KISELEK} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>_Kiselek_</span>
									<div className='user__roles user__roles-founder'>
										<h3 className='user__roles__names-txt'>Основатель</h3>
									</div>
									<div className='user__roles user__roles-administrator'>
										<h3 className='user__roles__names-txt'>Administrator</h3>
									</div>
								</div>
								<div className='user__line role-founder'></div>
								<div className='user__text-content'>
									<span>Нам ничего не известно об этом пользователе :(</span>
								</div>
							</div>
						</div>
					</div>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={nyatex} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Nyatex</span>
									<div className='user__roles user__roles-founder'>
										<h3 className='user__roles__names-txt'>Основатель</h3>
									</div>
									<div className='user__roles user__roles-administrator'>
										<h3 className='user__roles__names-txt'>Administrator</h3>
									</div>
								</div>
								<div className='user__line role-founder'></div>
								<div className='user__text-content'>
									<span>{'><> ><> ><>'}</span>
								</div>
							</div>
						</div>
					</div>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={myka} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Мука</span>
									<div className='user__roles user__roles-frontend'>
										<h3 className='user__roles__names-txt'>Доверенное лицо</h3>
									</div>
									<div className='user__roles user__roles-java'>
										<h3 className='user__roles__names-txt'>Тех. админ</h3>
									</div>
								</div>
								<div className='user__line role-founder'></div>
								<div className='user__text-content'>
									<span>Нам ничего не известно об этом пользователе :(</span>
								</div>
							</div>
						</div>
					</div>

					<h1 className='user__spacer'>Персонал:</h1>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={FOW} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Иоанн(Fow)</span>
									<div className='user__roles user__roles-flow'>
										<h3 className='user__roles__names-txt'>Художник</h3>
									</div>
									<div className='user__roles user__roles-design'>
										<h3 className='user__roles__names-txt'>Дизайнер</h3>
									</div>
								</div>
								<div className='user__line role-other'></div>
								<div className='user__text-content'>
									<span>Где мой чай?</span>
								</div>
							</div>
						</div>
					</div>

					{/* <div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={FOW} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>KAVIK</span>
									<div className='user__roles user__roles-design'>
										<h3 className='user__roles__names-txt'>Дизайнер</h3>
									</div>
								</div>
								<div className='user__line role-other'></div>
								<div className='user__text-content'>
									<span>Нам ничего не известно об этом пользователе :(</span>
								</div>
							</div>
						</div>
					</div> */}

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={sabday} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>SabDay</span>
									<div className='user__roles user__roles-design'>
										<h3 className='user__roles__names-txt'>СММ</h3>
									</div>
									<div className='user__roles user__roles-moderator'>
										<h3 className='user__roles__names-txt'>Модератор</h3>
									</div>
								</div>
								<div className='user__line role-other'></div>
								<div className='user__text-content'>
									<span>Нам ничего не известно об этом пользователе :(</span>
								</div>
							</div>
						</div>
					</div>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={angel} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Angel</span>
									<div className='user__roles user__roles-moderator'>
										<h3 className='user__roles__names-txt'>Модератор</h3>
									</div>
								</div>
								<div className='user__line role-other'></div>
								<div className='user__text-content'>
									<span>Нам ничего не известно об этом пользователе :(</span>
								</div>
							</div>
						</div>
					</div>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={kivit} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Kivit</span>
									<div className='user__roles user__roles-moderator'>
										<h3 className='user__roles__names-txt'>Модератор</h3>
									</div>
								</div>
								<div className='user__line role-other'></div>
								<div className='user__text-content'>
									<span>Нам ничего не известно об этом пользователе :(</span>
								</div>
							</div>
						</div>
					</div>

					<div className='user__group'>
						<div className='user__content'>
							<img className='user__avatar' src={santi} alt='' />
							<div className='user__wrapper'>
								<div className='user__roles-name'>
									<span className='user__name'>Santy</span>
									<div className='user__roles user__roles-moderator'>
										<h3 className='user__roles__names-txt'>СТ. Модератор</h3>
									</div>
								</div>
								<div className='user__line role-other'></div>
								<div className='user__text-content'>
									<span>Хотеть недостаточно, надо действовать</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export { InfoPage }

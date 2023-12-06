import React from 'react';
import './../styles/info.css';
import Foks from './../img/users/foks.png'
import KISELEK from './../img/users/kiselek.gif'
import FOW from './../img/users/fow.png'
import draginIMG from './../img/infoPage/dragon.png'
import oneSeasonIMG from './../img/infoPage/oneSeason.png'


const InfoPage = () => {
  return (
    <>
      <section className='main-about'>
        <div className="container">
          <div className="main-about__intro">
            <h1 className='main-about__title'>О <span className="about__title-colored">проекте</span></h1>

            <div className='main-about__block'>
              <div className="main-about__block-img">
                <img className='main-about__img' src={draginIMG} alt="" />
                <img className='main-about__img' src={oneSeasonIMG} alt="" />
              </div>
              <div className="main-about__block-text">
                <p><span className="about__title-colored">F-WORLDS </span> - Сервер с упором на ванильное выживание и щепотку RolePlay'a <br />
                  На сервере нет таких команд как: /spawn, /home, /kit и тд. <br />
                  Сервер работает без лицензии но для входа на сервер вам необходимо приобрести проходку.
                  Также на сервере отсутствуют приваты, так как всё нацелено на доверии игроков, даже если что-то и произойдёт, то решается это через суд, а не наказанием и баном. <br />
                  Лицензия не требуется, но проходка платная дабы уменьшить число грифов и естественно подержать сервер.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className='about-users'>
        <div className="container">
          <div className="main-about__intro-one">
            <h1 className='main-about__title-one'>Наши <span className="about__title-colored">разработчики</span></h1>
          </div>

          <div className="user__group">
            <div className="user__content">
              <img className='user__avatar' src={Foks} alt="" />
              <div className="user__wrapper">
                <div className="user__roles-name">
                  <span className="user__name">Foks_f</span>
                  <div className="user__roles user__roles-founder"><h3 className="user__roles__names-txt">Основатель</h3></div>
                  <div className="user__roles user__roles-teamlid"><h3 className="user__roles__names-txt">Team Leader</h3></div>
                  <div className="user__roles user__roles-frontend"><h3 className="user__roles__names-txt">FrontEnd-разработчик</h3></div>
                  <div className="user__roles user__roles-backend"><h3 className="user__roles__names-txt">BackEnd-разработчик</h3></div>
                  <div className="user__roles user__roles-java"><h3 className="user__roles__names-txt">Java-разработчик</h3></div>
                  <div className="user__roles user__roles-administrator"><h3 className="user__roles__names-txt">Administrator</h3></div>
                </div>
                <div className="user__line role-founder">
                </div>
                <div className="user__text-content">
                  <span>
                    Хочу спат... Дайте кофе
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="user__group">
            <div className="user__content">
              <img className='user__avatar' src={KISELEK} alt="" />
              <div className="user__wrapper">
                <div className="user__roles-name">
                  <span className="user__name">_KISELEK_</span>
                  <div className="user__roles user__roles-founder"><h3 className="user__roles__names-txt">Основатель</h3></div>
                  <div className="user__roles user__roles-red"><h3 className="user__roles__names-txt">Project Manager</h3></div>
                  <div className="user__roles user__roles-administrator"><h3 className="user__roles__names-txt">Administrator</h3></div>
                </div>
                <div className="user__line role-founder">
                </div>
                <div className="user__text-content">
                  <span>
                    Я был в Анапе..
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="user__group">
            <div className="user__content">
              <img className='user__avatar' src={FOW} alt="" />
              <div className="user__wrapper">
                <div className="user__roles-name">
                  <span className="user__name">Иоанн(Fow)</span>
                  <div className="user__roles user__roles-flow"><h3 className="user__roles__names-txt">Художник</h3></div>
                  <div className="user__roles user__roles-design"><h3 className="user__roles__names-txt">Дизайнер</h3></div>
                </div>
                <div className="user__line role-other">
                </div>
                <div className="user__text-content">
                  <span>
                    Где мой чай?
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export { InfoPage };

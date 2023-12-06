// Imports

import React from 'react';
import './../styles/home.css';
import './../styles/flickity.css';
import Modal from '../components/Moddal/Modal';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { redirect } from "react-router-dom";


function HomePage() {

  // API
  const byItem = (e) => {
    setErrors('');
    e.preventDefault();
    const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=858930:1`;
    try {

      axios.get(tradeAPIByUrl).then((resp) => {

        try {
          const CardIDdata = resp.data.response.cart_id;
          const payAPI = 'https://pay.trademc.org/?success_url=https%3A%2F%2Ff-worlds.net%2Fsucces&pending_url=https%3A%2F%2Ff-worlds.net%2Fsucces&fail_url=https%3A%2F%2Ff-worlds.net%2Fsucces&cart_id=' + CardIDdata;
          console.log(payAPI);
          console.log(userName);

          console.log("Succes обработка данных завершенна!")

          setErrors('');

          window.location.href = payAPI;
        } catch (err) {
          console.log(err)
          setErrors('Error: Ошибка обработки данных!');
        }
      });


    } catch (err) {
      console.log(err);
      setErrors('Error: Ошибка обработки данных!');
    }
  }

  // Use

  const [userName, setUserName] = useState('');
  const [userDirty, setUserDirtu] = useState(false);
  const [userError, setUserError] = useState('User-Name Не должен быть пустым!');
  const [formValid, setFormValid] = useState(false);
  const [Errors, setErrors] = useState('');


  const [modalActive, setModalActive] = useState(false);


  // Base
  const cliced = () => {
    console.log("Succes.");
    navigator.clipboard.writeText("mc.f-worlds.net");
    var element = document.querySelector("#alert");
    element.classList.add('active');
    setTimeout(() => element.classList.remove("active"), 2000);
  }

  // Valid 

  const userNameHandler = (e) => {
    setUserName(e.target.value);

    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setUserError('User-Name От 3х до 10 символов!')
      if (!e.target.value) {
        setUserError('User-Name Не должен быть пустым!')
      }
    } else {
      setUserError("")
    }
  }

  const blurHandle = (e) => {
    switch (e.target.name) {
      case 'user-name':
        setUserDirtu(true);
        break
    }
  }

  useEffect(() => {
    if (userError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [userError])



  // Client HTML

  return (
    <>
      <div id="alert" >
        <i className='bx bxs-copy'></i> IP скопирован!
      </div>
      <section className="intro">
        <div className="container">

          <h1 className="intro__title">F-WORLDS - Сервер с упором на <span className="intro__title-colored">ванильное выживание и щепотку RolePlay'a.</span></h1>
          <div className="intro__subinner">
            <h2 className='intro__subtitle'>Пространство с идеальными условиями для раскрытия собственного творческого потенциала в среде ванильного выживания</h2>
          </div>
          <div className='btn-intr-wrap'>
            <div className='intro__buttons'>
              <button onClick={() => setModalActive(true)} className='button'><i className='bx bxs-wallet-alt'> </i> Приобрести проходку на сервер</button>
              <button onClick={cliced} className='button gray' ><i className='bx bxs-copy' ></i> Скопировать Ip</button>
            </div>
          </div>

          <div className="intro__suptitle">
            <div><p>Minecraft: Java Edition 1.20.1</p></div>
            <div className='curcle'></div>
            <div><p>Лицензия не требуется</p></div>
          </div>


        </div>
      </section>
      {/* () => setModalActive(true) */}
      <section className='about'>
        <div className="containerTX">
          <h1 className="about__title">
            Наши <span className="about__title-colored">преимущества</span>
          </h1>
          <div className="wrap">
            <div className="informBlock">
              <i className='bx bxs-server'></i>
              <h5 className="mainText">Стабильный TPS</h5>
              <div className="underlineBlock"></div>
              <p className="secondText">Имеем стабильный ТПС в Minecraft, что дает нашим игрокам игру без инпут лагов</p>
            </div>
            <div className="informBlock">
              <i className='bx bxs-book-open'></i>
              <h5 className="mainText">Администрация</h5>
              <div className="underlineBlock"></div>
              <p className="secondText">Команда администрации поможет вам в любое время и ответит на любой вопрос.</p>
            </div>
            <div className="informBlock">
              <i className='bx bxs-user'></i>
              <h5 className="mainText">Комьюнити</h5>
              <div className="underlineBlock"></div>
              <p className="secondText">Игроки дружелюбные что дает полное сохранность ваших построек, вещей, имуществ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="server-a" id='serverBy'>
        <div className="container">
          <h1 className="about__title mt-30" >
            Готовы <span className="about__title-colored">присоединится?</span>
          </h1>
          <div className="server-wrap">
            <div className="server__block">
              <div className="server__block-one">
                <h3><span className="about__title-colored">30 &#8381;</span></h3>
                <p>На всё время</p>
                <div className="server__but-pos">
                  <div className='intro__buttons'>
                    <button onClick={() => setModalActive(true)} className='button'><i className='bx bxs-wallet-alt'> </i> Приобрести вход на сервер</button>
                  </div>
                </div>
              </div>

              <div className="server__block-two">
                <div className="server__text-block">
                  <div className="server__icon">
                    <i className='bx bxs-time-five'></i>
                    <h6>
                      Доступ на всё время
                    </h6>
                  </div>
                  <div className='server__text'>
                    <p>
                      После приобретения, вы получаете доступ на всё время, никаких скрытых платежей.
                    </p>
                  </div>
                </div>

                <div className="server__text-block">
                  <div className="server__icon">
                    <i className='bx bx-support' ></i>
                    <h6>
                      Проблеммы?
                    </h6>
                  </div>
                  <div className='server__text'>
                    <p>
                      Если у вас возникли какие-то проблемы с оплатой или появились вопросы вы можете обратится в тех поддержку в нашем дискорде!
                    </p>
                  </div>
                </div>

                <div className="server__text-block">
                  <div className="server__icon">
                    <i className='bx bx-package'></i>
                    <h6>
                      Только Minecraft: Java Edition
                    </h6>
                  </div>
                  <div className='server__text'>
                    <p className='tst'>
                      Для игры на сервере лицензия Minecraft: Java Edition не требуется!
                    </p>
                    <p className='tst'>
                      Bedrock Edition и Windows 10 Edition не поддерживаются!
                    </p>
                    <p>
                      Версия сервера только 1.20.1
                    </p>
                  </div>
                </div>

                <div className="server__text-block">

                  <div className="server__text">

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Modal active={modalActive} setActive={setModalActive}>
        <form className='donate-form'>
          <div className='donate-form-wrap'>
            <h2>Вы почти у цели!</h2>
            <div className="inputbox">
              <input
                value={userName}
                onChange={e => userNameHandler(e)}
                onBlur={blurHandle}

                type="text"
                required
                name='user-name'
              />
              <label>User-Name</label>
            </div>

            <button disabled={!formValid} onClick={byItem} className='form-btn'>Приобрести</button>

            {(userDirty && userError) && <div style={{ color: 'red', marginTop: '15px' }}>{userError}</div>}
            {(userDirty && Errors) && <div style={{ color: 'red', marginTop: '15px' }}>{Errors}</div>}
          </div>
        </form>
      </Modal>

    </>



  )
}

export { HomePage };
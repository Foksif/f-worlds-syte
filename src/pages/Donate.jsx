import './../styles/donate.css';
import MVP from './../img/donate-P/mvp.png'
import MVPpls from './../img/donate-P/mvp+.png'
import { Link } from 'react-router-dom';
import Modal from '../components/Moddal/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';


function DonatePage() {

  // USE

  const [userName, setUserName] = useState('');
  const [userDirty, setUserDirtu] = useState(false);
  const [userError, setUserError] = useState('User-Name Не должен быть пустым!');
  const [formValid, setFormValid] = useState(false);
  const [Errors, setErrors] = useState('');


  const [modalActive, setModalActive] = useState(false);
  const [modalTwoActive, setModalTwoActive] = useState(false);

  // API

  const byItemMVP = (e) => {
    setErrors('');
    e.preventDefault();
    const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=863923:1`;
    try {

      axios.get(tradeAPIByUrl).then((resp) => {

        try {
          const CardIDdata = resp.data.response.cart_id;
          const payAPI = 'https://pay.trademc.org/?success_url=https%3A%2F%2Ffoksf.fun%2Fsucces&pending_url=https%3A%2F%2Ffoksf.fun%2Fsucces&fail_url=https%3A%2F%2Ffoksf.fun%2Fsucces&cart_id=' + CardIDdata;
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

  const byItemMVPpls = (e) => {
    setErrors('');
    e.preventDefault();
    const tradeAPIByUrl = `https://api.trademc.org/shop.buyItems?shop=213364&v=3&buyer=${userName}&items=863924:1`;
    try {

      axios.get(tradeAPIByUrl).then((resp) => {

        try {
          const CardIDdata = resp.data.response.cart_id;
          const payAPI = 'https://pay.trademc.org/?success_url=https%3A%2F%2Ffoksf.fun%2Fsucces&pending_url=https%3A%2F%2Ffoksf.fun%2Fsucces&fail_url=https%3A%2F%2Ffoksf.fun%2Fsucces&cart_id=' + CardIDdata;
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


  // Client
  return (
    <>
      <section className="donate-P__intro">
        <div className="container">
          <h1 className="donate-P__title">
            Хочешь приобрести <span className="about__title-colored">подписку</span>?
          </h1>

          <div className='donate__card-grid'>
            <div className="donate__card-card">
              <div className="donate__card-img-wrap">
                <img src={MVP} alt="picture" />
              </div>
              <div className="donate__card-content-wrap">
                <p className="donate__card-price">200 &#8381;</p>
                <h3 className="donate__card-title">MVP (1 месяц)</h3>
                <p className="donate__card-description">Данная подписка выдаётся лишь на месяц и каких-то пеимуществ над игроками не даёт.</p>

                <button className="donate__card-button" onClick={() => setModalActive(true)} type="button"> Купить</button>

              </div>
            </div>
            <div className="donate__card-card">
              <div className="donate__card-img-wrap">
                <img src={MVP} alt="picture" />
              </div>
              <div className="donate__card-content-wrap">
                <p className="donate__card-price">500 &#8381;</p>
                <h3 className="donate__card-title">MVP+ (1 месяц)</h3>
                <p className="donate__card-description">Данная подписка выдаётся лишь на месяц и каких-то пеимуществ над игроками не даёт.</p>

                <button className="donate__card-button" onClick={() => setModalTwoActive(true)} type="button"> Купить</button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}

      <Modal active={modalActive} setActive={setModalActive}>
        <form className='donate-form'>
          <div className='donate-form-wrap'>
            <h2>MVP - 200р</h2>
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

            <button disabled={!formValid} onClick={byItemMVP} className='form-btn'>Приобрести</button>

            {(userDirty && userError) && <div style={{ color: 'red', marginTop: '15px' }}>{userError}</div>}
            {(userDirty && Errors) && <div style={{ color: 'red', marginTop: '15px' }}>{Errors}</div>}
          </div>
        </form>
      </Modal>

      <Modal active={modalTwoActive} setActive={setModalTwoActive}>
        <form className='donate-form'>
          <div className='donate-form-wrap'>
            <h2>MVP+ - 500р</h2>
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

            <button disabled={!formValid} onClick={byItemMVPpls} className='form-btn'>Приобрести</button>

            {(userDirty && userError) && <div style={{ color: 'red', marginTop: '15px' }}>{userError}</div>}
            {(userDirty && Errors) && <div style={{ color: 'red', marginTop: '15px' }}>{Errors}</div>}
          </div>
        </form>
      </Modal>
    </>
  )
}



export { DonatePage };
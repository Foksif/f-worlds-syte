import './../styles/rules.css'

function RulesPage() {
  return (
    <>

      <section className="rules__intro">
        <div className="container">
          <div className='rules__intro-block'>
            <h1 className="rules__title">Правила <span className="about__title-colored">Minecraft</span> сервера</h1>
            <h3 className='rules__sub-title'>Не знание правил не освобождает от ответственности!</h3>
            <h3 className='rules__sup-title'>Последнее обновление было: 13.10.2023</h3>
          </div>


        </div>
      </section>

      <section className="rules__block">
        <div className="container">
          <div className="rules__block-content">
            <h3><span className="about__title-colored">Пункт 1.</span> Общие правила</h3>

            <h4>1.1</h4>
            <p>Общие Правила являются обязательными к соблюдению всеми лицами, использующими любые технические ресурсы Проекта.</p>

            <h4>1.1.1</h4>
            <p>Незнание настоящих Правил не освобождает от ответственности.</p>

            <h4>1.2</h4>
            <p>Любой обход правил карается баном.</p>

            <h4>1.3</h4>
            <p>Настоящие правила могут обновляться/изменяться без оповещения игроков.</p>

            <h4>1.4</h4>
            <p>Действия команды HYPERTEAM не оспариваются.</p>

            <h4>1.5</h4>
            <p>Заходя на сервер вы автоматически соглашаетесь со всеми политиками и правилами проекта.</p>
          </div>
        </div>
      </section>

      <section className="rules__block">
        <div className="container">
          <div className="rules__block-content">
            <h3><span className="about__title-colored">Пункт 2.</span> Взаимодействие с игровым миром</h3>

            <h4>2.1</h4>
            <p>Игрокам запрещается модифицировать не принадлежащую им территорию без согласия её владельца.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>2.2</h4>
            <p>Запрещено занимать Общие Территории, большие и редкие участки игрового мира без Согласия Сообщества.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>2.3</h4>
            <p>Игрокам запрещается находиться на не принадлежащей им территории без согласия её владельца.</p>


            <h4>2.3.1</h4>
            <p>Запрет на нахождение на таких территориях считается недействительным, если возможный нарушитель не был каким-либо образом предупреждён о его установлении.</p>

            <h4>2.3.2</h4>
            <p>Любой запрет на нахождение на Общих Территориях считается недействительным.</p>


            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>2.4</h4>
            <p>Игрокам запрещается взаимодействовать с не принадлежащими им мобами без согласия их владельца.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>2.5</h4>
            <p>Игрокам запрещается брать предметы из контейнеров без согласия владельца этих предметов.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>2.6</h4>
            <p>Игрокам запрещается хранить/передавать/использовать предметы, полученные в ходе нарушения правил.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 3х дней.
                </div>
              </div>
            </div>

            <h4>2.7</h4>
            <p>Игрокам запрещается строить и/или использовать механизмы/фермы, сильно нагружающие сервер, без Согласия Администрации.</p>


            <h4>2.7.1</h4>
            <p>Разрешено строительство любых ферм, если их использование не противоречит правилам сервера. Помните, что Ваша ферма может вызывать лаги. Администрация настоятельно рекомендует делать на Ваших фермах возможность их включения/выключения по мере необходимости.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 90 дней.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="rules__block">
        <div className="container">
          <div className="rules__block-content">
            <h3><span className="about__title-colored">Пункт 3.</span> Взаимодействие с игроками</h3>

            <h4>3.1</h4>
            <p>Игрокам запрещается атаковать других игроков, создавать условия для нанесения урона другим игрокам, без согласия игроков, подверженных нанесению урона.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>3.2</h4>
            <p>Игрокам запрещается безвозмездно передавать большое количество предметов неограниченной по размеру группе игроков, а также обогащаться путём получения ресурсов в ходе таких передач.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления или бан от 30 месяца
                </div>
              </div>
            </div>

            <h4>3.3</h4>
            <p>Запрещена продажа и покупка чего-либо из игры за реальные деньги.</p>


            <h4>3.3.1</h4>
            <p>За нарушение правила 3.3 наказание выдаётся, как и продавцу и покупателю.</p>


            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 180 дней.
                </div>
              </div>
            </div>

            <h4>3.4</h4>
            <p>Игрокам запрещается любым образом блокировать появление других игроков.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 3х дней.
                </div>
              </div>
            </div>

            <h4>3.5</h4>
            <p>Запрещается препятствовать проведению RP мероприятий.</p>

            <h4>3.5.1</h4>
            <p>Исключение нескольких RP моментов.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>

            <h4>3.6</h4>
            <p>Запрещено принуждать игроков участвовать в RP мероприятиях, либо отыгрывать роль в целом.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  предупреждение, в последствии бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 7 дней.
                </div>
              </div>
            </div>

            <h4>3.7</h4>
            <p>Запрещено обманывать игроков с целью получения собственной выгоды.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или сообщества.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В зависимости от тяжести преступления.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rules__block">
        <div className="container">
          <div className="rules__block-content">
            <h3><span className="about__title-colored">Пункт 4.</span> Чат</h3>

            <h4>4.1</h4>
            <p>Правила чата действительны исключительно в чатах и голосовых чатах, видимых/слышимых для неограниченных по размеру групп людей, включая, но не ограничиваясь: глобальный и локальный чаты но при этом не распространяются на личные сообщения и групповые чаты.</p>
            

            <h4>4.2</h4>
            <p>Запрещены разжигающие конфликт проявление ненависти и враждебности, агрессивное, неадекватное и токсичное поведение (в т.ч. оскорбления игроков и их родственников), ксенофобия, угнетение и дискриминация в любой форме.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Мут.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 8 часов.
                </div>
              </div>
            </div>

            <h4>4.3</h4>
            <p>Запрещено часто отправлять сообщения, если они похожи по своему содержанию или не несут смысловой нагрузки.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Мут.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 3х часов.
                </div>
              </div>
            </div>

            <h4>4.4</h4>
            <p>Запрещена реклама сторонних ресурсов без согласования с администрацией.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  Навсегда.
                </div>
              </div>
            </div>

            <h4>4.5</h4>
            <p>Запрещено обсуждение политики, религии.</p>

            <h4>4.5.1</h4>
            <p>Правило распространяется только на реальный мир.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 30 дней.
                </div>
              </div>
            </div>

            <h4>4.6</h4>
            <p>Запрещено выдавать себя за других игроков сервера, известных личностей, Discord ботов и т.п. без их согласия.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 30 дней.
                </div>
              </div>
            </div>

            <h4>4.7</h4>
            <p>Запрещено получение и разглашение находящейся в закрытом доступе информации о проекте, а также конфиденциальной информации игроков.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан/Мут.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 7 дней.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rules__block">
        <div className="container">
          <div className="rules__block-content">
            <h3><span className="about__title-colored">Пункт 5.</span> Технические средства</h3>

            <h4>5.1</h4>
            <p>Запрещено регистрировать несколько аккаунтов или получать аккаунты от третьих лиц с целью обхода блокировки или нарушения порядка, предусмотренного настоящими Правилами, а также содействовать вышеописанному.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  Навсегда.
                </div>
              </div>
            </div>

            <h4>5.2</h4>
            <p>Запрещено использовать чужие аккаунты в любом виде.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  Навсегда.
                </div>
              </div>
            </div>

            <h4>5.3</h4>
            <p>Игрокам запрещается использовать сторонние программы/модификации, дающие им явное преимущество.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 30 дней.
                </div>
              </div>
            </div>

            <h4>5.4</h4>
            <p>Запрещено использовать недоработки/уязвимости сервера/игры в личных целях.</p>

            <h4>5.4.1</h4>
            <p>На данный момент на сервере разрешено использование следующих багов: дюп активированного динамита не для добычи валюты, дюп ковров, ломание коренной породы.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  От 90 дней.
                </div>
              </div>
            </div>

            <h4>5.5</h4>
            <p>Запрещено создавать помехи в работе систем Проекта.</p>
            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  Навсегда.
                </div>
              </div>
            </div>

            <h4>4.6</h4>
            <p>Запрещено читерство в любой форме.</p>

            <div className="rules__ress-wrap">
              <div className='rules__ress'>
                <h4>Наказание:</h4>
                <div className='rules__ress-block'>
                  Решение суда или бан.
                </div>
              </div>
              <div className='rules__ress'>
                <h4>Время:</h4>
                <div className='rules__ress-block'>
                  В  зависимости от тяжести преступления.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rules__block">
        <div className="container">
          <div className="rules__block-content">
            <h3><span className="about__title-colored">Пункт 6.</span> Наказания</h3>

            <h4>6.1</h4>
            <p>Наказание может быть не выдано нарушителю при согласии на то пострадавшего в результате данного нарушения настоящих Правил.</p>

            <h4>6.2</h4>
            <p>В случае, если игрок совершил нарушение правил под давлением другого игрока, наказание выдаётся как нарушителю, так и подстрекателю.</p>

            <h4>7.3</h4>
            <p>В зависимости от обстоятельств, наказание может быть отменено или изменено в любую сторону.</p>

            <h4>7.4</h4>
            <p>Игроку может быть выдано наказание за нарушение порядка, не предусмотренного настоящими Правилами в случае, если был проведён RolePlay суд, который обоснованно признал виновным данного игрока.</p>
          </div>
        </div>
      </section>

      <div className="rules--f"></div>

    </>

  )
}



export { RulesPage };
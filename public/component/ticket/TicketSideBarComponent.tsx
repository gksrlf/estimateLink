import style from '@style/geonjeok_ticket.module.css'
const TicketSideBarComponent = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__wrap}>
        <div className={style.sidebar__profile}>
          <div className={style.sidebar__profile__img}>
            <img src="images/img_profile.png" alt="profile" className={style.sidebar__profile__img__photo} />
            <a href="#!" className={style.sidebar__profile__img__setting}>
              <img src="images/btn_setting.png" alt="img_setting" />
            </a>
          </div>
          <div className={style.sidebar__profile__info}>
            <span className={style.sidebar__profile__info__name}>이재욱</span>
            <span className={style.sidebar__profile__info__num}>사업자 번호 0000-00-00000</span>
          </div>
        </div>
        <div className={style.search}>
          <form className={style.search__form} name="form" method="get" action="/server/program">
            <input className={style.search__input} type="text" name="search_input" placeholder="검색" />
            <button className={style.search__btn} type="submit" title="검색">
              <span>검색 아이콘</span>
            </button>
          </form>
        </div>

        <ul className={style.sidebar__menu}>
          <li>
            <a href="#">
              <img src="images/icon_write_off.png" alt="icon_write" className={style.topImg} />
              <img src="images/icon_write_on.png" alt="icon_write" className={style.bottomImg} />
              <span>작성하기</span>
            </a>
          </li>
          <li>
            <a href="#" className="on">
              <img src="images/icon_manage_off.png" alt="icon_write" className={style.topImg} />
              <img src="images/icon_manage_on.png" alt="icon_write" className={style.bottomImg} />
              <span>관리하기</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icon_myPage_off.png" alt="icon_write" className={style.topImg} />
              <img src="images/icon_myPage_on.png" alt="icon_write" className={style.bottomImg} />
              <span>마이페이지</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icon_ticket_off.png" alt="icon_write" className={style.topImg} />
              <img src="images/icon_ticket_on.png" alt="icon_write" className={style.bottomImg} />
              <span>이용권 관리</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TicketSideBarComponent

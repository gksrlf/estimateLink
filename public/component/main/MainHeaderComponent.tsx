import style from '@style/gyeonjeok_main.module.css'

const MainHeaderComponent = () => {
  return (
    // <div className={`${style.header_con}`}>
    <div className={style.headerCon}>
      <header className={style.header}>
        <div className={style.header_wrap}>
          <a href="index.html" className={style.logo}>
            <img src="images/img_logo_115px.png" alt="logo" className={style.logo__img} />
          </a>
          <span className={style.toggle}>
            <input type="checkbox" className={style.toggle__input} />
            <label htmlFor="toggle" className={style.toggle__label}></label>
          </span>
          <div className={style.loginWrap}>
            <button className={style.loginWrap__btn}>
              <span className={style.loginWrap__btn__Text}>로그인</span>
            </button>
          </div>
        </div>
      </header>
      {/* <!-- /.header --> */}
      <span className={`${style.m_toggle}`}>
        <input type="checkbox" className={`${style.m_toggle__input}`} />
        <label htmlFor="toggle" className={`${style.m_toggle__label}`}></label>
      </span>
      {/*  <!-- /.header-con -->*/}
    </div>
  )
}

export default MainHeaderComponent

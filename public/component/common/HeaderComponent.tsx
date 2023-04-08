import '../../css/commonHeader.css'
const HeaderComponent = () => {
  const nologin = false
  return (
    <>
      {nologin ? (
        <div className="header-con">
          <header className="header">
            <div className="header_wrap">
              <a href="index.html" className="logo">
                <img src="images/img_logo_115px.png" alt="logo" className="logo__img" />
              </a>
              <span className="toggle">
                <input type="checkbox" className="toggle__input" />
                <label htmlFor="toggle" className="toggle__label" />
              </span>
              <div className="loginCom-wrap">
                <button className="loginCom-wrap__btn">
                  <span className="loginCom-wrap__btn__Text" />
                </button>
              </div>
            </div>
          </header>
        </div>
      ) : (
        <div className="header-con">
          <header className="header">
            <div className="header_wrap">
              <a href="index.html" className="logo">
                <img src="images/img_logo_115px.png" alt="logo" className="logo__img" />
              </a>
              <span className="toggle">
                <input type="checkbox" className="toggle__input" />
                <label htmlFor="toggle" className="toggle__label"></label>
              </span>
              <div className="loginCom-wrap">
                <button className="loginCom-wrap__btn">
                  <span className="loginCom-wrap__btn__Text" />
                </button>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  )
}

export default HeaderComponent

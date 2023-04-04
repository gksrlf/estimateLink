import '../../css/reset.css';
import '../../css/gyeonjeok_main.css';

const MainHeaderComponent = () => {
  return (
    <div className="header-con">
      <header className="header">
        <div className="header_wrap">
          <a href="index.html" className="logo">
            <img
              src="images/img_logo_115px.png"
              alt="logo"
              className="logo__img"
            />
          </a>
          <span className="toggle">
            <input type="checkbox" className="toggle__input" />
            <label htmlFor="toggle" className="toggle__label"></label>
          </span>
          <div className="login-wrap">
            <button className="login-wrap__btn">
              <span className="login-wrap__btn__Text">로그인</span>
            </button>
          </div>
        </div>
      </header>
      <span className="m_toggle">
        <input type="checkbox" className="m_toggle__input" />
        <label htmlFor="toggle" className="m_toggle__label"></label>
      </span>
    </div>
  );
};

export default MainHeaderComponent;

import style from '@style/gyeonjeok_login.module.css'
const LoginContentComponent = () => {
  return (
    <>
      <div className={style.contents}>
        <div className={style.login__boxWrap}>
          <div className={style.login__box}>
            <h1>로그인</h1>
            <div className={style.login__idWrap}>
              <input type="email" name="memId" className={`${style.input__text_id} ${style.error}`} placeholder="아이디(이메일)" />
            </div>
            <div className={style.login__passwordWrap}>
              <input type="password" name="memPassword" className={`${style.input__text_password} ${style.error}`} placeholder="비밀번호" />
            </div>
            <button className={style.btnLogin}>
              <span>로그인하기</span>
            </button>
            <div className={style.login__findWrap}>
              <a href="#" className={`${style.login__find} id`}>
                <span>아이디 찾기</span>
              </a>
              <a href="#" className={`${style.login__find} password`}>
                <span>비밀번호 찾기</span>
              </a>
            </div>
            <div className={style.login__joinWrap}>
              <a href="#">
                <span>
                  계정이 없으신가요? <strong>회원가입</strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className={style.login__termsWrap}>
          <button className={`${style.login__terms__btn} bar`}>
            <span>이용약관</span>
          </button>
          <button className={style.login__terms__btn}>
            <span>개인정보처리방침</span>
          </button>
        </div>
      </div>
      <div className={`${style.toastPopup}`}>
        <span>아이디와 비밀번호를 입력해 주세요.</span>
      </div>
      <div className={`${style.toastPopup}`}>
        <span>아이디 또는 비밀번호를 다시 확인해 주세요.</span>
      </div>
    </>
  )
}
export default LoginContentComponent

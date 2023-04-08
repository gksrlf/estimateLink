import style from '@style/gyeonjeok_join.module.css'

const JoinContentComponent = () => {
  return (
    <div className={style.contents}>
      <div className={style.login__boxWrap}>
        <div className={style.login__box}>
          <h1>회원가입</h1>
          <div className={style.login__idWrap}>
            <input type="email" name="memId" className={`${style.input__text_id} ${style.error}`} placeholder="아이디(이메일)" />
            <span className={style.error_message}>아이디를 입력해 주세요.</span>
          </div>
          <div className={style.login__paswordContainer}>
            <div className={`${style.login__passwordWrap} ${style.fCheck}`}>
              <input type="password" name="memPassword" className={`${style.input__text_password} ${style.error}`} placeholder="비밀번호" />
            </div>
            <div className={`${style.login__passwordWrap}`}>
              <input type="password" name="memPasswordCheck" className={`${style.input__text_passwordCheck} ${style.error}`} placeholder="비밀번호 확인" />
            </div>
            <span className={style.error_message}>비밀번호를 입력해 주세요.</span>
          </div>
          <div className={style.phoneCertificationWrap}>
            <h2>휴대폰 인증하기</h2>
            <div className={style.phoneCertification_box}>
              <input type="text" name="phoneCertification" className={`${style.input__text_phone} ${style.error}`} placeholder="'-' 제외한 11자리 숫자" />
              <button className={style.btn_certification}>
                <span>PASS 인증</span>
              </button>
            </div>
            <span className={style.error_message}>휴대폰 번호 인증은 필수입니다.</span>
          </div>
          <div className={style.businessNumWrap}>
            <h2>사업자 등록번호</h2>
            <div>
              <input type="text" name="businessNum" className={`${style.input__text_businessNum} ${style.error}`} placeholder="'-' 제외한 10자리 숫자" />
              <button className={style.btn_businessNum}>
                <span>사업자 인증</span>
              </button>
            </div>
            <span className={style.error_message}>사업자 등록번호 인증은 필수입니다.</span>
          </div>
          <button className={style.btnLogin}>
            <span>로그인하기</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinContentComponent

import style from '@style/geonjeok_myPage.module.css'
const MyPageContentComponent = () => {
  return (
    <div className={style.contents__container}>
      <div className={style.contents}>
        <div className={style.contents_wrap}>
          <h1 className={style.contents__title}>마이페이지</h1>
          <div className="myPage__info">
            <div className={`${style.myPage__info__id} ${style.each__wrap}`}>
              <h2 className={style.myPage__info__title}>아이디</h2>
              <span>gjw04079@naver.com</span>
            </div>
            <div className={`myPage__info__password ${style.each__wrap}`}>
              <h2 className={style.myPage__info__title}>기존 비밀번호</h2>
              <input type="password" name="memPassword" className={`${style.memPassword} ${style.error}`} placeholder="" />
            </div>
            <div className={`memNewPassword__box ${style.each__wrap}`}>
              <h2 className={style.myPage__info__title}>새 비밀번호</h2>
              <input type="password" name="memNewPassword" className={`${style.memPassword} ${style.error}`} placeholder="" />
            </div>
            <div className={`memNewPasswordCheck__box ${style.each__wrap}`}>
              <h2 className={style.myPage__info__title}>새 비밀번호 확인</h2>
              <input type="password" name="memNewPasswordCheck" className={`${style.memPassword} ${style.error}`} placeholder="" />
            </div>
            <div className={`${style.myPage__info__phone} ${style.each__wrap}`}>
              <h2 className={`${style.myPage__info__title}`}>휴대폰 번호</h2>
              <span>010-1234-5678</span>
              <button className={`${style.btn__change} memPhone`}>
                <span>번호 변경</span>
              </button>
            </div>
            <div className={`myPage__info__business ${style.each__wrap}`}>
              <h2 className={style.myPage__info__title}>사업자 번호</h2>
              <span>000-00-00000</span>
              <button className={`${style.btn__change} businessNum`}>
                <span>번호 변경</span>
              </button>
            </div>
          </div>

          <div className={style.myPage__completeBtn__wrap}>
            <button className={`${style.btn__complete} ${style.cancle}`}>
              <span>취소</span>
            </button>
            <button className={`${style.btn__complete} ${style.save}`}>
              <span>저장</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPageContentComponent

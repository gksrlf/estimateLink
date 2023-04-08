import style from '@style/gyeonjeok_main.module.css'

const MainContentComponent = () => {
  return (
    <div className={`${style.contents}`}>
      <h1 className={`${style.contents__slogan}`}>견적링크로 숙소 링크를 간편하게 만들어 보세요!</h1>
      <ul className={`${style.contetns__mainIcons}`}>
        <li>
          <a href="#!">
            <span />
            모텔
          </a>
        </li>
        <li>
          <a href="#!">
            <span />
            호텔
          </a>
        </li>
        <li>
          <a href="#!">
            <span />
            펜션
          </a>
        </li>
        <li>
          <a href="#!">
            <span />
            쉐어하우스
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MainContentComponent

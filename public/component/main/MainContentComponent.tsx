import '../../css/reset.css';
import '../../css/gyeonjeok_main.css';

const MainContentComponent = () => {
  return (
    <div className="contents">
      <h1 className="contents__slogan">
        견적링크로 숙소 링크를 간편하게 만들어 보세요!
      </h1>
      <ul className="contetns__main-icons">
        <li>
          <a href="#">
            <span></span>
            모텔
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            호텔
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            펜션
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            쉐어하우스
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainContentComponent;

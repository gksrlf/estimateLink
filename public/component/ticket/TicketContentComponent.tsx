import style from '@style/geonjeok_ticket.module.css'
import TicketSideBarComponent from './TicketSideBarComponent'

const TicketContentComponent = () => {
  return (
    <div className={style.contents__container}>
      <TicketSideBarComponent />
      <div className={style.contents}>
        <div className={style.contents_wrap}>
          <h1 className={style.contents__title}>이용권 관리</h1>
          <div className={style.myTicketList}>
            <table className={style.myTicketList__table}>
              <thead>
                <tr>
                  <th>이용권</th>
                  <th>구매일</th>
                  <th>만료일</th>
                  <th>결제금액</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody className="haveTicket">
                <tr>
                  <td>1개월 이용권</td>
                  <td>2022-12-30</td>
                  <td>2023-01-29</td>
                  <td>11,000원</td>
                  <td className="myTicketList__btn">
                    <button className={style.btn_ticketDelete}>
                      <span>이용권 취소</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3개월 이용권</td>
                  <td>2022-03-28</td>
                  <td>2022-06-27</td>
                  <td>29,700원</td>
                  <td className="myTicketList__btn">
                    <button className={style.btn_ticketEnd}>
                      <span>이용권 만료</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={style.noTicket}>
              <span>현재 이용중이신 이용권이 없습니다.</span>
            </div>
          </div>

          <div className="ticket-sale__wrap">
            <h2 className={style.ticketSale__title}>이용권 구매</h2>
            <ul className={style.ticketType__wrap}>
              <li>
                <a href="#!" className={style.ticketPrice__wrap}>
                  <span className={style.ticketPrice}>
                    <span className={style.ticketName}>·1개월 이용권·</span>
                    <strong className={style.ticketPrice__num}>11,000원</strong>
                    <span className={style.ticketPrice__txt}>일단 부담없이 한달 이용해보기!</span>
                  </span>
                  <span className={style.ticket__btn}>구매하기</span>
                </a>
              </li>
              <li>
                <a href="#!" className={`${style.ticketPrice__wrap} ${style.recommend}`}>
                  <span className={`${style.ticketPrice} ${style.recommend}`}>
                    <span className={style.ticketName}>·3개월 이용권·</span>
                    <strong className={style.ticketPrice__num}>
                      9,900원<small>/월</small>
                    </strong>
                    <span className={style.ticketPrice__txt}>부담없는 가격, 부담없는 기간!</span>
                  </span>
                  <span className={style.ticket__btn}>구매하기</span>
                </a>
              </li>
              <li>
                <a href="#!" className={style.ticketPrice__wrap}>
                  <span className={style.ticketPrice}>
                    <span className={style.ticketName}>·6개월 이용권·</span>
                    <strong className={style.ticketPrice__num}>
                      8,900원<small>/월</small>
                    </strong>
                    <span className={style.ticketPrice__txt}>20% 할인, 13200원 절약!</span>
                  </span>
                  <span className={style.ticket__btn}>구매하기</span>
                </a>
              </li>
              <li>
                <a href="#!" className={style.ticketPrice__wrap}>
                  <span className={style.ticketPrice}>
                    <span className={style.ticketName}>·12개월 이용권·</span>
                    <strong className={style.ticketPrice__num}>
                      7,700원<small>/월</small>
                    </strong>
                    <span className={style.ticketPrice__txt}>매달 햄버거 가격으로 1년 이용!</span>
                  </span>
                  <span className={style.ticket__btn}>구매하기</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketContentComponent

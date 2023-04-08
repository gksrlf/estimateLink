import style from '@style/geonjeok_write.module.css'
import WriteSideBarComponent from './WriteSideBarComponent'

const WriteContentComponent = () => {
  return (
    <>
      <WriteSideBarComponent />
      <div className={style.contents__container}>
        <div className={style.contents}>
          <div className={style.contents_wrap}>
            <h1 className={style.contents__title}>작성하기</h1>
            <div className="write__info">
              <div className={style.write__lodgingInfo__wrap}>
                <h2 className={style.write__category}>숙소 정보</h2>
                <div className={`${style.write__lodgingInfo} name`}>
                  <h3 className={style.lodgingInfo__title}>
                    숙소명 <small className={style.essential}> (필수)</small>
                  </h3>
                  <input type="text" name="lodgingName" className={style.input__lodgingInfo} />
                </div>
                <div className={`${style.write__lodgingInfo} address`}>
                  <h3 className={style.lodgingInfo__title}>
                    주소 <small className={style.essential}> (필수)</small>
                  </h3>
                  <div className={style.lodgingInputTxt__wrap}>
                    <input type="text" name="lodgingAddress" className={style.input__lodgingInfoBtn} />
                    <button className={style.btn__inputTxt}>
                      <span>주소 검색</span>
                    </button>
                  </div>
                  <input type="text" name="lodgingName" className={style.input__lodgingInfo} />
                </div>
              </div>
              <div className={style.write__lodgingInfo__wrap}>
                <h2 className={style.write__category}>숙소 소개</h2>
                <div className={`${style.write__lodgingInfo} intro-oneLine`}>
                  <h3 className={style.lodgingInfo__title}>숙소 한 줄 소개</h3>
                  <input type="text" name="lodgingIntroOneLine" className={style.input__lodgingInfo} />
                </div>
                <div className={`${style.write__lodgingInfo} ${style.rPicture__wrap}`}>
                  <h3 className={style.lodgingInfo__title}>대표 사진</h3>
                  <ul className={style.rPicture__con}>
                    <li className={`${style.rPicture} ${style.add}`}>
                      <a href="#!" />
                    </li>
                    <li className={style.rPicture}>
                      <a href="#!">
                        <img src="images/img_rPicture_1.png" alt="대표사진" />
                      </a>
                    </li>
                    <li className={style.rPicture}>
                      <a href="#!">
                        <img src="images/img_rPicture_2.png" alt="대표사진" />
                      </a>
                    </li>
                    <li className={style.rPicture}>
                      <a href="#!">
                        <img src="images/img_rPicture_3.png" alt="대표사진" />
                      </a>
                    </li>
                    <li className={style.rPicture}>
                      <a href="#!">
                        <img src="images/img_rPicture_4.png" alt="대표사진" />
                      </a>
                    </li>
                    <li className={style.rPicture}>
                      <a href="#!">
                        <img src="images/img_rPicture_4.png" alt="대표사진" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`${style.write__lodgingInfo} intro-full`}>
                  <h3 className={style.lodgingInfo__title}>소개글 작성</h3>
                  <input type="text" name="lodgingIntroFull" className={style.input__lodgingInfo__full} style={{ verticalAlign: top }} />
                </div>
              </div>
              <div className={style.write__lodgingInfo__wrap}>
                <div className={style.closedDay__title__wrap}>
                  <h2 className={style.write__category}>지정 휴무일</h2>
                  <div className={`${style.closedDay__radio} ${style.title}`}>
                    <div className={`${style.radioTxt} ${style.left} ${style.left1}`}>
                      <label className={style.radioTxt__label}>
                        <div className={style.radio}>
                          <input type="radio" className={style.radio__input} name="radio" checked={true} />
                          <div className={style.radio__btn} />
                        </div>
                        <div className={style.radioTxt__txt}>휴무일 없음</div>
                      </label>
                    </div>
                    <div className={`${style.radioTxt} ${style.left}`}>
                      <label className={style.radioTxt__label}>
                        <div className={style.radio}>
                          <input type="radio" className={style.radio__input} name="radio" />
                          <div className={style.radio__btn} />
                        </div>
                        <div className={style.radioTxt__txt}>휴무일 있음</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={style.write__lodgingInfo}>
                  <h3 className={style.lodgingInfo__title}>공휴일 포함 (주말 제외)</h3>
                  <div className={style.closedDay__radio}>
                    <div className={`${style.radio} ${style.left} ${style.left1}`}>
                      <label className={style.radioTxt__label}>
                        <div className={style.radio}>
                          <input type="radio" className={style.radio__input} name="radio" checked={true} />
                          <div className={style.radio__btn} />
                        </div>
                        <div className={style.radioTxt__txt}>공유일 포함</div>
                      </label>
                    </div>
                    <div className={`${style.radioTxt} ${style.left}`}>
                      <label className={style.radioTxt__label}>
                        <div className={style.radio}>
                          <input type="radio" className={style.radio__input} name="radio" />
                          <div className={style.radio__btn} />
                        </div>
                        <div className={style.radioTxt__txt}>공휴일 미포함</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={style.write__lodgingInfo}>
                  <h3 className={style.lodgingInfo__title}>지정 요일 휴일</h3>
                  <div className={style.option_box}>
                    <span>ex)매주 월요일, 매주 목요일</span>
                  </div>
                  <ul className={`${style.closedDay__optionList} ${style.listPopup}`}>
                    <li>월</li>
                    <li>화</li>
                    <li>수</li>
                    <li>목</li>
                    <li>금</li>
                    <li>토</li>
                    <li>일</li>
                  </ul>
                </div>
                <div className={style.write__lodgingInfo}>
                  <h3 className={style.lodgingInfo__title}>지정 주 휴일</h3>
                  <div className={style.option_box}>
                    <span>ex)매주 월요일, 매주 목요일</span>
                  </div>
                  <div className={`${style.everyWeekWrap} ${style.listPopup}`}>
                    <div className={style.everyWeek__line01}>
                      <ul className={style.closedDay__optionListWeek}>
                        <li>첫째주</li>
                        <li>둘째주</li>
                        <li>셋째주</li>
                        <li>넷째주</li>
                      </ul>
                    </div>
                    <div className={style.everyWeek__line02}>
                      <div>
                        <ul className={`${style.closedDay__optionListChild} ${style.on}`}>
                          <li>월</li>
                          <li>화</li>
                          <li>수</li>
                          <li>목</li>
                          <li>금</li>
                          <li>토</li>
                          <li>일</li>
                        </ul>
                        <ul className={style.closedDay__optionListChild}>
                          <li>월</li>
                          <li>화</li>
                          <li>수</li>
                          <li>목</li>
                          <li>금</li>
                          <li>토</li>
                          <li>일</li>
                        </ul>
                        <ul className={style.closedDay__optionListChild}>
                          <li>월</li>
                          <li>화</li>
                          <li>수</li>
                          <li>목</li>
                          <li>금</li>
                          <li>토</li>
                          <li>일</li>
                        </ul>
                        <ul className={style.closedDay__optionListChild}>
                          <li>월</li>
                          <li>화</li>
                          <li>수</li>
                          <li>목</li>
                          <li>금</li>
                          <li>토</li>
                          <li>일</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.write__lodgingInfo}>
                  <h3 className={style.lodgingInfo__title}>지정 일 휴일</h3>
                  <div className={style.option_box}>
                    <span>ex) 매월 15일</span>
                  </div>
                  <ul className={`${style.closedDay__optionList} ${style.monthly} ${style.listPopup}`}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                  </ul>
                </div>
              </div>
              <div className={style.write__lodgingInfo__wrap}>
                <div className="write__sellerInfo__wrap">
                  <h2 className={style.write__category}>판매자 정보</h2>
                  <div className={`${style.write__sellerInfo} name`}>
                    <h3 className={style.sellerInfo__title}>
                      대표자명 <small className={style.essential}> (필수)</small>
                    </h3>
                    <input type="text" name="sellerName" className={style.input__lodgingInfo} value="이재욱" />
                  </div>
                  <div className={`${style.write__lodgingInfo} email`}>
                    <h3 className={style.sellerInfo__title}>
                      이메일 <small className={style.essential}> (필수)</small>
                    </h3>
                    <input type="text" name="sellerEmail" className={style.input__lodgingInfo} value="gjw04079@naver.com" />
                  </div>
                  <div className={`${style.write__sellerInfo} phoneNum`}>
                    <h3 className={style.sellerInfo__title}>
                      휴대폰 번호 <small className={style.essential}> (필수)</small>
                    </h3>
                    <div className={style.lodgingInputTxt__wrap}>
                      <input type="text" name="sellerPnoneNum" className={style.input__lodgingInfoBtn} value="01012345678" />
                      <button className={style.btn__inputTxt}>
                        <span>번호 변경</span>
                      </button>
                    </div>
                  </div>
                  <div className={`${style.write__sellerInfo} businessNum`}>
                    <h3 className={style.sellerInfo__title}>
                      사업자 등록번호 <small className={style.essential}> (필수)</small>
                    </h3>
                    <div className={style.lodgingInputTxt__wrap}>
                      <input type="text" name="sellerBusinessNum" className={style.input__lodgingInfoBtn} value="000-00-00000" />
                      <button className={style.btn__inputTxt}>
                        <span>번호 변경</span>
                      </button>
                    </div>
                  </div>
                  <div className={`${style.write__sellerInfo} ${style.businessType}`}>
                    <h3 className={style.sellerInfo__title}>
                      사업자 유형 <small className={style.essential}> (필수)</small>
                    </h3>
                    <div className={style.businessType}>
                      <div className={`${style.radioTxt} ${style.left} ${style.left1}`}>
                        <label className={style.radioTxt__label}>
                          <div className={style.radio}>
                            <input type="radio" className={style.radio__input} name="radio" checked={true} />
                            <div className={style.radio__btn} />
                          </div>
                          <div className={style.radioTxt__txt}>간이과세자</div>
                        </label>
                      </div>
                      <div className={`${style.radioTxt} ${style.left} ${style.left1}`}>
                        <label className={style.radioTxt__label}>
                          <div className={style.radio}>
                            <input type="radio" className={style.radio__input} name="radio" />
                            <div className={style.radio__btn} />
                          </div>
                          <div className={style.radioTxt__txt}>일반과세자</div>
                        </label>
                      </div>
                      <div className={`${style.radioTxt} ${style.left} ${style.left1}`}>
                        <label className={style.radioTxt__label}>
                          <div className={style.radio}>
                            <input type="radio" className={style.radio__input} name="radio" />
                            <div className={style.radio__btn} />
                          </div>
                          <div className={style.radioTxt__txt}>법인사업자</div>
                        </label>
                      </div>
                      <div className={`${style.radioTxt} ${style.left} ${style.left1}`}>
                        +
                        <label className={style.radioTxt__label}>
                          <div className={style.radio}>
                            <input type="radio" className={style.radio__input} name="radio" />
                            <div className={style.radio__btn} />
                          </div>
                          <div className={style.radioTxt__txt}>면세사업자</div>
                        </label>
                      </div>
                      <div className={`${style.radioTxt} ${style.left}`}>
                        <label className={style.radioTxt__label}>
                          <div className={style.radio}>
                            <input type="radio" className={style.radio__input} name="radio" />
                            <div className={style.radio__btn} />
                          </div>
                          <div className={style.radioTxt__txt}>기타사업자</div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={`${style.write__sellerInfo} mainBusiness`}>
                    <h3 className={style.lodgingInfo__title}>
                      <small>주업태/주업종</small>
                    </h3>
                    <input type="text" name="mainBusiness" className={style.input__lodgingInfo} />
                  </div>
                  <div className={`${style.write__lodgingInfo} address`}>
                    <div className={`${style.sellerAddress__title__wrap} ${style.checkbox}`}>
                      <h3 className={style.lodgingInfo__title}>
                        사업장 주소<small className={style.essential}> (필수)</small>
                      </h3>
                      <div className={`${style.checkbox__txt} ${style.right}`}>
                        <label className={style.checkbox_txt__label}>
                          <div className={style.checkbox}>
                            <div className={style.checkbox__wrap}>
                              <input type="checkbox" className={style.checkbox__input} />
                              <div className={style.checkbox__btn} />
                            </div>
                          </div>
                          <div className={style.checkbox_txt__txt}>숙소 주소와 동일</div>
                        </label>
                      </div>
                    </div>
                    <div className={style.lodgingInputTxt__wrap}>
                      <input type="text" name="lodgingAddress" className={style.input__lodgingInfoBtn} />
                      <button className={style.btn__inputTxt}>
                        <span>주소 검색</span>
                      </button>
                    </div>
                    <input type="text" name="sellerAddress" className={style.input__lodgingInfo} placeholder="상세주소" />
                  </div>
                  <div className={`${style.write__sellerInfo}`}>
                    <h3 className={style.lodgingInfo__title}>카카오톡 오픈 채팅 링크 URL</h3>
                    <input
                      type="text"
                      name="business-openChat"
                      className={style.input__lodgingInfo}
                      placeholder="고객들에게 숙소 관련 문의를 받을 링크를 등록해 주세요."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.write__completeBtn__wrap}>
              <button className={`${style.btn__complete} ${style.preview}`}>
                <span>미리보기</span>
              </button>
              <button className={`${style.btn__complete} ${style.tSave}`}>
                <span>임시저장</span>
              </button>
              <button className={`${style.btn__complete} ${style.save}`}>
                <span>등록</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.toastPopup} essential-input`}>
        <span>필수사항들을 입력해 주세요.</span>
      </div>
    </>
  )
}
export default WriteContentComponent

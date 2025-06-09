import './Survey.css';

function Survey() {


    function onSubmit() {
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        if (selectedGender) {
            console.log(selectedGender.value);
        }
    }
    //내일 아침에 와서 다른 라디오들 연결하쟈...ㅎㅎ



    return (
        <div className="account-sur-div account-sur-body">
            <div className="account-sur-div account-sur-container" style={{ backgroundColor: '#222222' }}>
                <div>
                    <h1 className='account-sur-h1'>설문조사</h1>
                </div>

                <div className='account-sur-hr'>
                    {/* ===================== 1째줄 ====================== */}
                    <div className='account-sur-div account-sur-q account-sur-line1'>
                        <div className='account-sur-div account-sur-q01'>
                            <h3 className='account-sur-h3'>성별?</h3>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='gender'
                                    value='female'
                                ></input>
                                <span className='account-sur-span'>여성</span>
                            </div>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='gender'
                                    value='male'
                                ></input>
                                <span className='account-sur-span'>남성</span>
                            </div>
                        </div>

                        <div className='account-sur-div account-sur-q01'>
                            <h3 className='account-sur-h3'>연령?</h3>
                            <div className='account-sur-div'>
                                <input className='account-sur-input account-sur-input-text' type='text' placeholder='나이 입력'></input>
                                <span className='account-sur-span'>세</span>
                            </div>
                        </div>
                    </div>

                    {/* ===================== 2째줄 ====================== */}
                    <div className='account-sur-div account-sur-line2'>
                        <div className='account-sur-div account-sur-q02'>
                            <h3 className='account-sur-h3'>키?</h3>
                            <div className='account-sur-div'>
                                <input className='account-sur-input account-sur-input-text' type='text' placeholder='키 입력'></input>
                                <span className='account-sur-span'>cm</span>
                            </div>
                        </div>

                        <div className='account-sur-div account-sur-q02'>
                            <h3 className='account-sur-h3'>몸무게?</h3>
                            <div className='account-sur-div'>
                                <input className='account-sur-input account-sur-input-text' type='text' placeholder='몸무게 입력'></input>
                                <span className='account-sur-span'>kg</span>
                            </div>
                        </div>
                    </div>

                    {/* ===================== 3째줄 ====================== */}
                    <div className='account-sur-div account-sur-line3'>
                        <div className='account-sur-div account-sur-q03'>
                            <h3>체중 증가?</h3>
                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='purpose'
                                    value='purposeIn'
                                ></input>
                                <span className='account-sur-span'>증가 목적</span>
                            </div>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='purpose'
                                    value='purposeRe'
                                ></input>
                                <span className='account-sur-span'>감소 목적</span>
                            </div>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='purpose'
                                    value='purposeMa'
                                ></input>
                                <span className='account-sur-span'>유지 목적</span>
                            </div>

                        </div>

                        <div className='account-sur-div account-sur-q03'>
                            <h3>운동경력?</h3>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='workoutExp'
                                    value='workoutExpO'
                                ></input>
                                <span className='account-sur-span'>O</span>
                            </div>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='workoutExp'
                                    value='workoutExpX'
                                ></input>
                                <span className='account-sur-span'>X</span>
                            </div>

                        </div>

                        <div className='account-sur-div account-sur-q03'>
                            <h3>PT경험?</h3>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='PTExp'
                                    value='PTExpO'
                                ></input>
                                <span className='account-sur-span'>O</span>
                            </div>

                            <div className='account-sur-div'>
                                <input
                                    className='account-sur-input'
                                    type='radio'
                                    name='PTExp'
                                    value='PTExpX'
                                ></input>
                                <span className='account-sur-span'>X</span>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ===================== 버튼 ====================== */}
                <div className='account-sur-div account-sur-btn-div'>
                    <button
                        className='account-sur-btn account-sur-skip'
                        type="button"
                        style={{ backgroundColor: 'white', cursor: 'none', zIndex: -1 }}
                        disabled
                    ></button>

                    <button
                        className='account-sur-btn'
                        type="button"
                        onClick={onSubmit}

                    >제출하기</button>

                    <button
                        className='account-sur-btn account-sur-skip'
                        type="button"
                    >건너뛰기</button>
                </div>

            </div>

        </div>
    );
}

export default Survey;
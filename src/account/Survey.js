import { useSearchParams } from 'react-router';
import './Survey.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Survey({ curAcct, setOpenSurvey, accountData, setAccountData }) {


    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    function onSubmit() {
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        if (selectedGender) {
            console.log(selectedGender.value);
        }

        const selectedPurpose = document.querySelector('input[name="purpose"]:checked');
        if (selectedPurpose) {
            console.log(selectedPurpose.value);
        }

        const selectedWorkoutExp = document.querySelector('input[name="workoutExp"]:checked');
        if (selectedWorkoutExp) {
            console.log(selectedWorkoutExp.value);
        }

        const selectedPTExp = document.querySelector('input[name="PTExp"]:checked');
        if (selectedPTExp) {
            console.log(selectedPTExp.value);
        }

        if (!selectedGender || !selectedPurpose || !selectedWorkoutExp
            || !selectedPTExp || age.trim()=='' || height.trim()=='' || weight.trim()=='') {
            Swal.fire({
                icon: 'error',
                title: '설문조사를 완료 후 제출하기 버튼을 눌러주세요.',
                text: '만약 원하지 않으시면 건너뛰기를 눌러주세요.',
            });
            return;
        }

        //기존 데이터를 새로운 데이터로 교체
        const updatedData = accountData.map(user => {
            if (user.email && user.email === curAcct.email) {
                return {
                    ...user,
                    age: age,
                    height: height,
                    weight: weight,
                    gender: selectedGender.value,
                    purpose: selectedPurpose.value,
                    workoutExp: selectedWorkoutExp.value,
                    PTExp: selectedPTExp.value,
                    surveyComplete: true,
                };
            } else {
                return user;
            }
        });


        console.log(accountData);
        setAccountData(updatedData);
        Swal.fire({
            icon: 'success',
            title: '설문조사 완료',
            text: '개인페이지에서 확인 및 수정이 가능합니다.',
        });
        setOpenSurvey(false);
        console.log(accountData[1].height);
    }


    return (
        <div className='account-sur-display'>
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
                                    <input
                                        className='account-sur-input account-sur-input-text'
                                        type='text'
                                        placeholder='나이 입력'
                                        minLength={14}
                                        maxLength={90}
                                        value={age}
                                        onChange={(e) => { setAge(e.target.value) }}
                                    ></input>
                                    <span className='account-sur-span'>세</span>
                                </div>
                            </div>
                        </div>

                        {/* ===================== 2째줄 ====================== */}
                        <div className='account-sur-div account-sur-line2'>
                            <div className='account-sur-div account-sur-q02'>
                                <h3 className='account-sur-h3'>키?</h3>
                                <div className='account-sur-div'>
                                    <input
                                        className='account-sur-input account-sur-input-text'
                                        type='text'
                                        placeholder='키 입력'
                                        value={height}
                                        onChange={(e) => { setHeight(e.target.value) }}
                                    ></input>
                                    <span className='account-sur-span'>cm</span>
                                </div>
                            </div>

                            <div className='account-sur-div account-sur-q02'>
                                <h3 className='account-sur-h3'>몸무게?</h3>
                                <div className='account-sur-div'>
                                    <input
                                        className='account-sur-input account-sur-input-text'
                                        type='text'
                                        placeholder='몸무게 입력'
                                        value={weight}
                                        onChange={(e) => { setWeight(e.target.value) }}
                                    ></input>
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
                            onClick={() => {
                                setOpenSurvey(false);
                            }}
                        >건너뛰기</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Survey;
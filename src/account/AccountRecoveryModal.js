import { useState } from 'react';
import './AccountRecoveryModal.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function AccountRecoveryModal({ openModal, setOpenModal }) {

    const [userEmail, setUserEmail] = useState(false);
    const [userPass, setUserPass] = useState(false);

    const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태

    const handleEmailSearch = () => {
        Swal.fire({
            icon: 'success',
            title: '귀하의 Email 주소는',
            text: '"00000@gmail.com" 입니다.',
        });
    };

    const passwordChange = () => {
        Swal.fire({
            icon: 'success',
            title: 'Password가 변경되었습니다.',
            text: '확인 버튼을 누르시면 로그인 창으로 돌아갑니다.',
        }).then((result) => {
            if (result.isConfirmed) {
                setUserPass(false); // 예: 컴포넌트 숨기기
                setOpenModal(false);
            }
        });
    };

    const handleClose = () => {
        setIsAnimating(true); // 애니메이션 시작
        setTimeout(() => {
            setOpenModal(false); // 애니메이션 종료 후 모달 닫기
        }, 600); // 애니메이션 시간과 맞춰서 설정
    };

    const handleSubButtonClick = () => {
        setIsAnimating(true); // 애니메이션 시작
        setTimeout(() => {
            // 모달을 닫거나 다른 동작을 할 수 있습니다.
            setOpenModal(false);
        }, 600); // 애니메이션이 끝날 때까지 기다림
    };





    return (
        <div className='account-all'>
            <div className={`account-re-body account-re-div ${isAnimating ? 'fade-out' : ''}`}>
                <div className='account-re-wrapper account-re-div'>
                    <div className='account-re-container'>
                        <div className='account-re-bg'>
                            {/*================== Email 찾기================= */}
                            <div className='account-re-bg-top'>
                                <div className='account-re-email-container account-re-div'>

                                    <form className='account-re-form'>
                                        <h1 className='account-re-h1 account-re-email-h1 account-re-div'>Email 찾기</h1>
                                        <input type='text' placeholder='이름' className='account-re-input'></input>

                                        <div className='account-re-div'>
                                            <input type='text' placeholder='전화번호' className='account-re-input'></input>
                                            <button className='account-re-btn'>인증번호 받기</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input type='text' placeholder='인증번호' className='account-re-input'></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <button className='account-re-sub-btn account-re-emailsub-btn' onClick={handleEmailSearch}>Email 찾기</button>
                                        </div>

                                    </form>
                                </div>

                                {/*================== Password 변경================= */}
                                <div className='account-re-pass-container account-re-div'>
                                    <form className='account-re-form account-re-div'>
                                        <h1 className='account-re-h1'>Password 변경</h1>
                                        <div className='account-re-div'>
                                            <input type='email' placeholder='email' className='account-re-input'></input>
                                            <button className='account-re-btn'>정보 확인</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input type='text' placeholder='전화번호' className='account-re-input'></input>
                                            <button className='account-re-btn'>인증번호 받기</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input type='text' placeholder='인증번호' className='account-re-input'></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <input type='password' placeholder='새로운 비밀번호(8 - 12 자리)' className='account-re-input'></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <input type='password' placeholder='새로운 비밀번호 2차 확인(8 - 12 자리)' className='account-re-input'></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <button className='account-re-sub-btn' onClick={handleSubButtonClick}>Password 변경하기</button>
                                        </div>

                                    </form>
                                </div>
                            </div>


                            <div className='account-re-bg-bottom'>
                                <button className='account-re-modal-close-btn' onClick={handleClose}>로그인 창으로</button>
                                {!openModal ? setOpenModal(true) : null}
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );

}

export default AccountRecoveryModal;
import { useState } from 'react';
import './AccountRecoveryModal.css';
import AccountReModalEmail from './AccountReModalEmail';
import AccountReModalPass from './AccountReModalPass';

function AccountRecoveryModal({ openModal, setOpenModal }) {

    const [userEmail, setUserEmail] = useState(false);
    const [userPass, setUserPass] = useState(false);

    return (
        <>
            <div className='account-re-body account account-re-div'>
                <div className='account-re-wrapper account-re-div'>
                    <div className='account-re-container'>
                        {/*================== Email 찾기================= */}
                        <div className='account-re-email-container account-re-div'>

                            <form className='account-re-form'>
                                <h1 className='account-re-h1 account-re-email-h1'>Email 찾기</h1>
                                <input type='text' placeholder='이름' className='account-re-input'></input>

                                <div className='account-re-div'>
                                    <input type='text' placeholder='전화번호' className='account-re-input'></input>
                                    <button className='account-re-btn'>인증번호 받기</button>
                                </div>

                                <div className='account-re-div'>
                                    <input type='text' placeholder='인증번호' className='account-re-input'></input>
                                </div>

                                <div className='account-re-div'>
                                    <button className='account-re-sub-btn account-re-emailsub-btn'  onClick={()=>{
                                    setUserEmail(true);
                                }}>Email 찾기</button>
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
                                    <button className='account-re-sub-btn' onClick={()=>{
                                    setUserPass(true);
                                }}>Password 변경하기</button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div>
                        <button className='account-re-modal-close-btn' onClick={()=> {
                            setOpenModal(false);
                        }}>로그인 창으로</button>
                        {!openModal ? setOpenModal(true) : null}
                    </div>

                </div>

            </div>
            {userEmail ? <AccountReModalEmail setUserEmail={setUserEmail}/> : null}
            {userPass ? <AccountReModalPass setUserPass={setUserPass} /> : null}
        </>
    );

}

export default AccountRecoveryModal;
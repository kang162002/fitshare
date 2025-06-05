import './Account.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import account_overlay_left from './image/account_overlay_left.jpg';
import account_overlay_right from './image/account_overlay_right.jpg';
import Swal from 'sweetalert2';

import AccountRecoveryModal from './AccountRecoveryModal';
import { Routes, Route, useNavigate } from 'react-router';




function Account() {

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    let navigate = useNavigate();


    // ======================== 모달창 ================================================
    const [openModal, setOpenModal] = useState(false);

    // ======================== 입력 제한 로직 ================================================
    const signInPass = () => {
        Swal.fire({
            icon: 'error',
            title: 'Password가 올바르지 않습니다.',
            text: '8-12자 이내로 입력 후 다시 시도해주세요.',
        });
    };

    const [inputValue, setInputValue] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState('');

    const handleSignIn = (event) => {

        const hasSpecialChar = /[!@#$%^&*?]/.test(inputValue);

        if (!hasSpecialChar) {
            Swal.fire({
                icon: 'error',
                title: '비밀번호 오류',
                text: '8~12자 이내이며 특수문자(!@#$%^&*?)를 포함해야 합니다.',
            });

        }

    }

    const signUpPassCon = (event) => {
        const hasSpecialChar = /[!@#$%^&*?]/.test(inputValue);

        if (!(signUpPassword == signUpPasswordConfirm)) {
            Swal.fire({
                icon: 'error',
                title: '비밀번호 오류',
                text: '2차 비밀번호와 일치하지 않습니다. 다시 입력해주세요.',
            });
        } 
        // else if (!hasSpecialChar) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: '비밀번호 오류',
        //         text: '8~12자 이내이며 특수문자(!@#$%^&*?)를 포함해야 합니다.',
        //     });
        // }
    }




    return (

        <div className='account-all'>
            <div className="account-body account-div">
                <div className="account-wrapper account-div">
                    <span className='account-bg'></span>
                    <span className='account-title' onClick={() => { navigate("/") }}></span>
                    <div className={`account-div account-container ${isRightPanelActive ? 'account-right-panel-active' : ''}`}>
                        {/* ====================회원가입 ================== */}
                        <div className="account-sign-up-container account-div">
                            <form className='account-form'>
                                <h1 className='account-h1'>Sign Up</h1>
                                <input type="text" placeholder="Name" className='account-input'></input>
                                <input type="email" placeholder="Email" className='account-input'></input>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className='account-input'
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                    minLength={8}
                                    maxLength={12}
                                ></input>
                                <input
                                    type="password"
                                    placeholder="2차 비밀번호 입력"
                                    className='account-input'
                                    value={signUpPasswordConfirm}
                                    onChange={(e) => setSignUpPasswordConfirm(e.target.value)}
                                    minLength={8}
                                    maxLength={12}
                                ></input>
                                <button className="account-form-btn account-button" onClick={signUpPassCon}>Sign Up</button>
                                <div className="account-social-links account-div">
                                    <div className='account-div'>
                                        <a href="#"><i className="fab fa-facebook account-a" aria-hidden="true"></i></a>
                                    </div>
                                    <div className='account-div'>
                                        <a href="#"><i className="fab fa-twitter account-a" aria-hidden="true"></i></a>
                                    </div>
                                    <div className='account-div'>
                                        <a href="#"><i className="fab fa-linkedin account-a" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* ====================로그인 ================== */}
                        <div className="account-sign-in-container account-div">
                            <form className='account-form'>
                                <h1 className='account-h1'>Sign In</h1>
                                <input type="email" placeholder="Email" className='account-input'></input>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className='account-input'
                                    value={signInPassword}
                                    onChange={(e) => setSignInPassword(e.target.value)}
                                    minLength={8}
                                    maxLength={12}

                                ></input>

                                <button className="account-form-btn account-button" onClick={handleSignIn} >Sign In</button>
                                <a href="#" className='account-a' onClick={() => {
                                    setOpenModal(true);
                                }}>Forgot your password?</a>
                                <div className="account-social-links account-div">
                                    <div className='account-div'>
                                        <a href="#"><i className="fab fa-facebook account-a" aria-hidden="true"></i></a>
                                    </div>
                                    <div className='account-div'>
                                        <a href="#"><i className="fab fa-twitter account-a" aria-hidden="true"></i></a>
                                    </div>
                                    <div className='account-div'>
                                        <a href="#"><i className="fab fa-linkedin account-a" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* ====================화면전환 문짝 ================== */}
                        <div className="account-overlay-container account-div">

                            <div className="account-overlay-left account-div" style={{ backgroundImage: 'url(' + account_overlay_left + ')' }}>
                                <button className="account-overlay-btn account-button" onClick={handleSignInClick}>Sign In</button>
                            </div>

                            <div className="account-overlay-right account-div" style={{ backgroundImage: 'url(' + account_overlay_right + ')' }}>
                                <button className="account-overlay-btn account-button" onClick={handleSignUpClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {openModal ? <AccountRecoveryModal openModal={openModal} setOpenModal={setOpenModal} /> : null}
        </div>
    );
}

export default Account;
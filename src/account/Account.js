import './Account.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import account_overlay_left from './image/account_overlay_left.jpg';
import account_overlay_right from './image/account_overlay_right.jpg';
import Fitlogo2 from './image/Fitlogo2.png';


import AccountRecoveryModal from './AccountRecoveryModal';


function Account() {

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };



    
    return (


        <div className="account-body">
            <div className="account-wrapper">
                <span className='account-bg'></span>
                <span className='account-title'></span>
                <div className={`account-container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                    {/* ====================회원가입 ================== */}
                    <div className="account-sign-up-container">
                        <form className='account-form'>
                            <h1 className='account-h'>Sign Up</h1>
                            <input type="text" placeholder="Name" className='account-input'></input>
                            <input type="email" placeholder="Email" className='account-input'></input>
                            <input type="password" placeholder="Password" className='account-input'></input>
                            <input type="text" placeholder="인증번호 입력" className='account-input'></input>
                            <button className="account-form-btn account-button">Sign Up</button>
                            <div className="account-social-links">
                                <div>
                                    <a href="#"><i className="fab fa-facebook account-a" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-twitter account-a" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-linkedin account-a" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* ====================로그인 ================== */}
                    <div className="account-sign-in-container">
                        <form className='account-form'>
                            <h1 className='account-h'>Sign In</h1>
                            <input type="email" placeholder="Email" className='account-input'></input>
                            <input type="password" placeholder="Password" className='account-input'></input>

                            <button className="account-form-btn account-button">Sign In</button>
                            <a href="#" className='account-a'>Forgot your password?</a>
                            <div className="account-social-links">
                                <div>
                                    <a href="#"><i className="fab fa-facebook account-a" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-twitter account-a" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-linkedin account-a" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* ====================화면전환 문짝 ================== */}
                    <div className="account-overlay-container">

                        <div className="account-overlay-left" style={{ backgroundImage: 'url(' + account_overlay_left + ')' }}>
                            {/* <h1>Welcome😄</h1> */}
                            <button className="account-overlay-btn account-button" onClick={handleSignInClick}>Sign In</button>
                        </div>

                        <div className="account-overlay-right" style={{ backgroundImage: 'url(' + account_overlay_right + ')' }}>
                            {/* <h1>Hi😉</h1> */}
                            <button className="account-overlay-btn account-button" onClick={handleSignUpClick}>Sign Up</button>
                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
}

export default Account;
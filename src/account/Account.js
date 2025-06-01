import './Account.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';


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
                <div className={`account-container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                    {/* ====================회원가입 ================== */}
                    <div className="account-sign-up-container">
                        <form>
                            <h1>Sign Up</h1>
                            <div className="account-social-links">
                                <div>
                                    <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <span>회원가입 해주면 좋겠네!</span>
                            <input type="text" placeholder="Name"></input>
                            <input type="email" placeholder="Email"></input>
                            <input type="text" placeholder="인증번호 입력"></input>
                            <input type="password" placeholder="Password"></input>
                            <button className="account-form-btn">Sign Up</button>
                        </form>
                    </div>

                    {/* ====================로그인 ================== */}
                    <div className="account-sign-in-container">
                        <form>
                            <h1>Sign In</h1>
                            <div className="account-social-links">
                                <div>
                                    <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <span>로그인 하십셔</span>
                            <input type="email" placeholder="Email"></input>
                            <input type="password" placeholder="Password"></input>
                            <button className="account-form-btn">Sign In</button>
                        </form>
                    </div>

                    {/* ====================화면전환 문짝 ================== */}
                    <div className="account-overlay-container">

                        <div className="account-overlay-left">
                            <h1>Welcome😄</h1>
                            <p></p>
                            <button className="account-overlay-btn" onClick={handleSignInClick}>Sign In</button>
                        </div>

                        <div className="account-overlay-right">
                            <h1>Hi😉</h1>
                            <p></p>
                            <button className="account-overlay-btn" onClick={handleSignUpClick}>Sign Up</button>
                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
}

export default Account;
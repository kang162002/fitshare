import './Account.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';
import account_overlay_left from './image/account_overlay_left.jpg';
import account_overlay_right from './image/account_overlay_right.jpg';
import Swal from 'sweetalert2';

import AccountRecoveryModal from './AccountRecoveryModal';
import { Routes, Route, useNavigate } from 'react-router';




function Account({ setCurAcct, setOpenSurvey, accountData, setAccountData }) {

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


    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpPhone, setSignUpPhone] = useState('');
    const [signUpAuthCode, setSignUpAuthcode] = useState('');
    const [signAuthTF, setSignAuthTF] = useState(false);

    const handleSignIn = () => {

        if (signInEmail == '' || signInPassword == '') {
            Swal.fire({
                icon: 'error',
                title: '공백 오류',
                text: '빈칸을 모두 채워주세요.',
            });
            return;
        }

        const foundUser = accountData.find(user =>
            user.email === signInEmail && user.password === signInPassword);

        if (!foundUser) {
            Swal.fire({
                icon: 'error',
                title: '로그인 실패',
                text: '이메일 또는 비밀번호가 잘못되었습니다.',
            });
            setSignInPassword('');
            return;
        }

        const hasSpecialChar = /[!@#$%^&*?]/.test(signInPassword);
        if (signInPassword.length >= 8 && signInPassword.length <= 12) {
            if (!hasSpecialChar) {
                Swal.fire({
                    icon: 'error',
                    title: '비밀번호 오류',
                    text: '8~12자 이내이며 특수문자(!@#$%^&*?)를 포함해야 합니다.',
                });
                setSignInPassword('');
                return;
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '로그인이 완료되었습니다.',
                    text: '환영합니다.',
                })

                // const loginState = accountData.find(user =>
                //     user.loginState);

                setCurAcct(foundUser);
                setSignInEmail('');
                setSignInPassword('');
                if(!foundUser.surveyComplete) {
                    setOpenSurvey(true);
                }
                navigate("/");
            }
        }
    }

    const signUpPassCon = () => {

        const hasSpecialChar = /[!@#$%^&*?]/.test(signUpPassword);

        if (signUpName == '' || signUpEmail == '' || signUpPassword == '' || signUpPhone == '' || signUpAuthCode == '') {
            Swal.fire({
                icon: 'error',
                title: '공백 오류',
                text: '빈칸을 모두 채워주세요.',
            });
            return;
        }

        if (emailCheck == false || signAuthTF == false) {
            if (emailCheck == false) {
                Swal.fire({
                    icon: 'error',
                    title: '중복확인 오류',
                    text: '이메일 중복확인 절차를 완료해주세요.',
                });
                return;
            }

            if (signAuthTF == false) {
                Swal.fire({
                    icon: 'error',
                    title: '인증 오류',
                    text: '인증 절차를 완료해주세요.',
                });
                return;
            }
        }


        if (signUpPassword.length >= 8 && signUpPassword.length <= 12 && signUpEmail.includes("@")) {

            if (!hasSpecialChar) {
                Swal.fire({
                    icon: 'error',
                    title: '비밀번호 오류',
                    text: '8~12자 이내이며 특수문자(!@#$%^&*?)를 포함해야 합니다.',
                });
                setSignUpPassword('');

            } else if (signUpAuthCode != '1234') {
                Swal.fire({
                    icon: 'error',
                    title: '인증번호 오류',
                    text: '인증번호를 다시 확인해주세요',
                });

            } else {
                Swal.fire({
                    icon: 'success',
                    title: '회원가입이 완료되었습니다.',
                    text: '어서오세요.',
                })
                setSignAuthTF(false);
                setShowTimer(false);
                setSignUpName('');
                setSignUpEmail('');
                setSignUpPassword('');
                setSignUpPhone('');
                setSignUpAuthcode('');
            }
        } else if (!(signUpEmail.includes("@"))) {
            Swal.fire({
                icon: 'error',
                title: '이메일 오류',
                text: '이메일 입력함에 @를 포함한 이메일을 올바르게 입력해주세요.',
            });
        } else if (signUpPassword.length < 8) {
            Swal.fire({
                icon: 'error',
                title: '비밀번호 오류',
                text: '8~12자 이내이며 특수문자(!@#$%^&*?)를 포함해야 합니다.',
            });
        }

        setAccountData([...accountData, { name: signUpName, email: signUpEmail, password: signUpPassword, phone: signUpPhone }]);
        console.log(accountData);
    }

    //================================인증번호 ========================================
    const [showTimer, setShowTimer] = useState(false);
    const [showTimerPass, setShowTimerPass] = useState(false);
    const [timerKey, setTimerKey] = useState(0);

    const handleGetCode = () => {

        setSignAuthTF(true);

        if (signUpPhone == '' || signUpName == '' || signUpEmail == '' || signUpPassword == '') {
            Swal.fire({
                icon: 'error',
                title: '공백 오류',
                text: '이름, 이메일, 비밀번호를 모두 입력 후 인증 절차를 진행해주세요.',
            });
            return;
        }

        setTimerKey(prev => prev + 1);
        setShowTimer(true); // 타이머 표시
    };

    //============= 타이머 function ==============
    function Timer({ duration }) {
        const [timeLeft, setTimeLeft] = useState(duration);

        useEffect(() => {
            if (timeLeft <= 0) {
                return;
            }

            const interval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) { //1 이하일 때 --
                        clearInterval(interval); //타이머 멈추기?
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }, []);

        //============= 전체 초를 전달받아 '분:초'의 형태로 반환 ==============
        const formatTime = (seconds) => {
            const m = String(Math.floor(seconds / 60)).padStart(2, '0');
            const s = String(seconds % 60).padStart(2, '0');
            return `${m}:${s}`;
        };

        //=============  ==============
        if (timeLeft <= 0) {
            alert('⏰ 인증 시간이 만료되었습니다.');
            return null;
        }
        return <span style={{ marginLeft: '10px', color: 'red', fontSize: '14px' }}>{formatTime(timeLeft)}</span>;
    }

    //email 정보 확인 절차 ===========================================
    const [emailCheck, setEmailCheck] = useState(false);

    function emailDoubleCheck() {
        const foundUser = accountData.find(user =>
            user.email === signUpEmail);

        if (signUpEmail.includes("@")) {
            setEmailCheck(true);
            if (foundUser) {
                //기존에 있는 이메일
                Swal.fire({
                    icon: 'info',
                    title: '중복 계정',
                    text: '이미 존재하는 회원입니다. 로그인 절차를 진행해주세요.',
                });
                setSignUpEmail('');
                setIsRightPanelActive(false);
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '새로운 계정',
                    text: '없는 회원입니다. 회원가입 절차를 진행해주세요.',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: '이메일 확인 필요',
                text: '이메일이 올바르게 잘 입력되었는지 확인해주세요.',
            });
        }

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
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className='account-input'
                                    value={signUpName}
                                    onChange={(e) => setSignUpName(e.target.value)}
                                ></input>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className='account-input account-input-phone'
                                        value={signUpEmail}
                                        onChange={(e) => setSignUpEmail(e.target.value)}
                                    ></input>
                                    <button type='button' className='account-form-btn account-btn-phone' onClick={emailDoubleCheck}>중복확인</button>
                                </div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className='account-input'
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                    minLength={8}
                                    maxLength={12}
                                ></input>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="phone-number"
                                        className='account-input account-input-phone'
                                        value={signUpPhone}
                                        onChange={(e) => setSignUpPhone(e.target.value)}
                                        maxLength={11}
                                    ></input>

                                    <button type='button' className='account-form-btn account-btn-phone' onClick={handleGetCode}>인증번호 받기</button>
                                    {showTimer && <Timer duration={180} />}
                                </div>
                                <input
                                    type='text'
                                    placeholder="Authentication number"
                                    className='account-input'
                                    value={signUpAuthCode}
                                    onChange={(e) => setSignUpAuthcode(e.target.value)}
                                ></input>

                                <button type='button' className="account-form-btn account-button" onClick={signUpPassCon}>Sign Up</button>
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
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='account-input'
                                    value={signInEmail}
                                    onChange={(e) => setSignInEmail(e.target.value)}
                                ></input>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className='account-input'
                                    value={signInPassword}
                                    onChange={(e) => setSignInPassword(e.target.value)}
                                    minLength={8}
                                    maxLength={12}

                                ></input>

                                <button type='button' className="account-form-btn account-button" onClick={handleSignIn} >Sign In</button>
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
                                <button type='button' className="account-overlay-btn account-button" onClick={handleSignInClick}>Sign In</button>
                            </div>

                            <div className="account-overlay-right account-div" style={{ backgroundImage: 'url(' + account_overlay_right + ')' }}>
                                <button type='button' className="account-overlay-btn account-button" onClick={handleSignUpClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {openModal ? <AccountRecoveryModal setOpenModal={setOpenModal} accountData={accountData} setAccountData={setAccountData} /> : null}
        </div>
    );
}

export default Account;
import { useEffect, useState } from 'react';
import './AccountRecoveryModal.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function AccountRecoveryModal({ openModal, setOpenModal, accountData, setAccountData }) {

    const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태

    //Email Pannel
    const [userName, setUserName] = useState('');
    const [userPhoneCheck, setUserPhoneCheck] = useState('');


    //Password Pannel
    const [userEmailPass, setUserEmailPass] = useState('');
    const [userPhoneCheckPass, setUserPhoneCheckPass] = useState('');

    //인증번호 Pannel
    const [user, setUser] = useState({});
    const [userAuthCheck, setUserAuthCheck] = useState('');

    const handleEmailSearch = () => {


        const findUser = (key, value) => {
            return accountData.find(user => user[key] === value);
        };

        const foundUser = findUser('name', userName);
        setUser(foundUser);

        if (!user) {
            Swal.fire({
                icon: 'error',
                title: '사용자를 찾을 수 없습니다.',
                text: '입력한 이름을 다시 확인해주세요.',
            });
        } else if (userAuthCheck !== '1234') {
            Swal.fire({
                icon: 'error',
                title: '인증 번호가 일치하지 않습니다.',
                text: '인증 번호를 다시 한번 확인해주세요.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '귀하의 Email 주소는',
                text: foundUser.email,
            });
            setShowTimer(false);
            setUserName('');
            setUserPhoneCheck('');
            setUserAuthCheck('');
        }
    };

    const handleClose = () => {
        setIsAnimating(true); // 애니메이션 시작
        setTimeout(() => {
            setOpenModal(false); // 애니메이션 종료 후 모달 닫기
        }, 600); // 애니메이션 시간과 맞춰서 설정
    };

    // ===================================== input 입력 제한 걸기 =======================================
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordCon, setNewPasswordCon] = useState('');

    const signUpPassCon = () => {

        if (newPasswordCon == '' || newPasswordCon == '') {
            Swal.fire({
                icon: 'error',
                title: '공백 오류',
                text: '빈칸을 모두 채워주세요.',
            });
            return;
        } else if(authCheck == false) {
            Swal.fire({
                icon: 'error',
                title: '인증 오류',
                text: '휴대폰 번호 인증을 진행주세요.',
            });
            return;
        }


        const hasSpecialChar = /[!@#$%^&*?]/.test(newPassword);
        if (newPassword.length >= 8 && newPassword.length <= 12) {

            if (!hasSpecialChar) {
                Swal.fire({
                    icon: 'error',
                    title: '비밀번호 오류',
                    text: '8~12자 이내이며 특수문자(!@#$%^&*?)를 포함해야 합니다.',
                });
                setNewPassword('');
                setNewPasswordCon('');
            } else if (!(newPassword == newPasswordCon)) {
                Swal.fire({
                    icon: 'error',
                    title: '비밀번호 오류',
                    text: '2차 비밀번호와 일치하지 않습니다. 다시 입력해주세요.',
                });
                setNewPassword('');
                setNewPasswordCon('');
            } else if (authCheck == false) {
                Swal.fire({
                    icon: 'error',
                    title: '인증번호 오류',
                    text: '인증절차 후 반드시 확인 버튼을 눌러주세요.',
                });
            } else {

                //기존 데이터를 새로운 데이터로 교체
                const updatedData = accountData.map(user => {
                    if (user.email === userEmailPass) {
                        return {
                            ...user,
                            password: newPassword,
                        };
                    }
                    return user;
                });

                setAccountData(updatedData);

                Swal.fire({
                    icon: 'success',
                    title: 'Password가 변경되었습니다.',
                    text: '확인 버튼을 누르시면 로그인 창으로 돌아갑니다.',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setOpenModal(false);
                    }
                });
            }
        }
    }

    // ===================================== 인증 번호 타이머 =======================================

    const [showTimer, setShowTimer] = useState(false);
    const [showTimerPass, setShowTimerPass] = useState(false);
    const [timerKey, setTimerKey] = useState(0);

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
        return <span style={{ marginLeft: '10px', color: 'red' }}>{formatTime(timeLeft)}</span>;
    }


    //===============Email 찾기 인증번호 로직 ====================
    const handleGetCode = () => {
        const findUser = (key, value) => {
            return accountData.find(user => user[key] === value);
        };

        const foundUser = findUser('name', userName);

        if (!userPhoneCheck) {
            Swal.fire({
                icon: 'error',
                title: '전화번호 미입력',
                text: '전화번호를 입력해주세요.',
            });
            return;
        } else if (foundUser.phone !== userPhoneCheck) {
            Swal.fire({
                icon: 'error',
                title: '전화번호 불일치',
                text: '전화번호가 일치하지 않습니다.',
            });
            return;
        } else {
            Swal.fire({
                icon: 'success',
                title: '인증번호가 전송되었습니다.',
                text: '제한 시간 내에 인증번호를 입력해주세요',
            })
        }

        setTimerKey(prev => prev + 1);
        setShowTimer(true); // 타이머 표시
    };


    //===============Password 변경 인증번호 로직 ====================

    const userEmailCheck = () => {
        const foundUserEmail = accountData.find(user =>
            user.email === userEmailPass);

        if (foundUserEmail) {
            Swal.fire({
                icon: 'success',
                title: '존재하는 이메일 정보입니다.',
                text: '전화번호 인증절차를 진행해주세요.',
            })
            return;
        } else {
            Swal.fire({
                icon: 'error',
                title: '존재하지 않는 이메일 정보입니다.',
                text: '회원가입을 먼저 진행해주세요.',
            })
            setOpenModal(false);
            return;
        }
    }


    const handleGetCodePass = () => {

        const foundUserPhone = accountData.find(user =>
            user.email === userEmailPass && user.phone === userPhoneCheckPass);


        if (userPhoneCheckPass == '') {
            Swal.fire({
                icon: 'error',
                title: '전화번호 미입력',
                text: '전화번호를 입력해주세요.',
            });
            return;
        } else if (!foundUserPhone) {
            Swal.fire({
                icon: 'error',
                title: '전화번호 불일치',
                text: '전화번호가 일치하지 않습니다.',
            });
            return;
        } else {
            Swal.fire({
                icon: 'success',
                title: '인증번호가 전송되었습니다.',
                text: '제한 시간 내에 인증번호를 입력해주세요',
            })
        }

        setTimerKey(prev => prev + 1);
        setShowTimerPass(true); // 타이머 표시
    };

    const [authCheckPass, setAuthCheckPass] = useState('');
    const [authCheck, setAuthCheck] = useState(false);

    const authCheckTF = () => {
        if (authCheckPass == '1234') {
            setShowTimerPass(false);
            setAuthCheck(true);
            Swal.fire({
                icon: 'success',
                title: '인증이 완료되었습니다.',
                text: '새로운 비밀번호를 입력해주세요.',
            })
            return;
        } else {
            Swal.fire({
                icon: 'error',
                title: '인증번호가 일치하지 않습니다..',
                text: '다시 한 번 확인해주세요.',
            })
        }
    }


    return (
        <div className='account-all'>
            <div className={`account-re-body account-re-div ${isAnimating ? 'fade-out' : ''}`}>
                <div className='account-re-wrapper account-re-div'>
                    <div className='account-re-container'>
                        <div className='account-re-bg'>
                            <div className='account-re-close' onClick={handleClose}>X</div>
                            {/*================== Email 찾기================= */}
                            <div className='account-re-bg-top'>
                                <div className='account-re-email-container account-re-div'>

                                    <form className='account-re-form'>
                                        <h1 className='account-re-h1 account-re-email-h1 account-re-div'>Email 찾기</h1>
                                        <input
                                            type='text'
                                            placeholder='이름'
                                            className='account-re-input'
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        ></input>

                                        <div className='account-re-div'>


                                            <input
                                                type='text'
                                                placeholder='전화번호'
                                                className='account-re-input'
                                                value={userPhoneCheck}
                                                onChange={(e) => setUserPhoneCheck(e.target.value)}
                                                maxLength={11}

                                            ></input>{showTimer && <Timer duration={180} />}

                                            <button className='account-re-btn' onClick={handleGetCode}>인증번호 받기</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input
                                                type='text'
                                                placeholder='인증번호'
                                                className='account-re-input'
                                                value={userAuthCheck}
                                                onChange={(e) => setUserAuthCheck(e.target.value)}
                                            ></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <button type='button' className='account-re-sub-btn account-re-emailsub-btn' onClick={handleEmailSearch}>Email 찾기</button>
                                        </div>

                                    </form>
                                </div>

                                {/*================== Password 변경================= */}
                                <div className='account-re-pass-container account-re-div'>
                                    <form className='account-re-form account-re-div'>
                                        <h1 className='account-re-h1'>Password 변경</h1>
                                        <div className='account-re-div'>
                                            <input
                                                type='email'
                                                placeholder='email'
                                                className='account-re-input'
                                                value={userEmailPass}
                                                onChange={(e) => setUserEmailPass(e.target.value)}
                                            ></input>
                                            <button className='account-re-btn' onClick={userEmailCheck}>정보 확인</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input
                                                type='text'
                                                placeholder='전화번호'
                                                className='account-re-input'
                                                value={userPhoneCheckPass}
                                                onChange={(e) => setUserPhoneCheckPass(e.target.value)}
                                                maxLength={11}
                                            ></input>{showTimerPass && <Timer duration={180} />}

                                            <button className='account-re-btn' onClick={handleGetCodePass}>인증번호 받기</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input
                                                type='text'
                                                placeholder='인증번호'
                                                className='account-re-input'
                                                value={authCheckPass}
                                                onChange={(e) => setAuthCheckPass(e.target.value)}
                                            ></input>
                                            <button className='account-re-btn' onClick={authCheckTF}>확인</button>
                                        </div>

                                        <div className='account-re-div'>
                                            <input
                                                type='password'
                                                placeholder='새로운 비밀번호(8 - 12 자리)'
                                                className='account-re-input'
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                minLength={8}
                                                maxLength={12}
                                            ></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <input
                                                type='password'
                                                placeholder='새로운 비밀번호 2차 확인(8 - 12 자리)'
                                                className='account-re-input'
                                                value={newPasswordCon}
                                                onChange={(e) => setNewPasswordCon(e.target.value)}
                                                minLength={8}
                                                maxLength={12}
                                            ></input>
                                        </div>

                                        <div className='account-re-div'>
                                            <button className='account-re-sub-btn' onClick={signUpPassCon} >Password 변경하기</button>
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
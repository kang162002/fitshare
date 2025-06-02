import './AccountRecoveryModal.css';

function AccountRecoveryModal() {

    return (
        <div className='account-re-body account account-re-div'>
            <div className='account-re-wrapper account-re-div'>
                {/*================== Email 찾기================= */}
                <div className='account-re-email-container account-re-div'>
                    <form className='account-re-form'>
                        <h1 className='account-re-h1 account-re-email-h1'>Email 찾기</h1>
                        <input type='text' placeholder='이름' className='account-re-input'></input>

                        <div className='account-re-div'>
                            <input type='text' placeholder='"-"를 제외하고 입력해주세요.' className='account-re-input'></input>
                            <button className='account-re-btn'>인증번호 받기</button>
                        </div>

                        <div className='account-re-div'>
                            <input type='text' placeholder='인증번호' className='account-re-input'></input>
                        </div>

                        <div className='account-re-div'>
                            <button className='account-re-sub-btn'>Email 찾기</button>
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
                            <input type='text' placeholder='"-"를 제외하고 입력해주세요.' className='account-re-input'></input>
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
                            <button className='account-re-sub-btn'>Password 변경하기</button>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    );

}

export default AccountRecoveryModal;
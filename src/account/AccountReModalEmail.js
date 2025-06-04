import AccountReModalPass from "./AccountReModalPass";


function AccountReModalEmail({userEmail, setUserEmail}) {
    return (
        <div className='account-re-body account account-re-div'>
            <div className='account-re-wrapper account-re-div'>
                <div className='account-re-container'>
                    {/*================== Email 찾음================= */}
                    <div className='account-re-email-container account-re-div'>

                        <form className='account-re-form'>
                            <h1 className='account-re-h1 account-re-email-h1'>Email 주소</h1>
                            <span>귀하의 이메일 주소는</span>
                            <span><span className="account-re-userEmail">' 00000@gmail.com '</span> 입니다.</span>

                        </form>
                    </div>

                </div>

                <div>
                    <button className='account-re-modal-close-btn' onClick={() => {
                        setUserEmail(false);
                    }}>창 닫기</button>
                    {!userEmail ? setUserEmail(true) : null}
                </div>

                {

                }
                
            </div>

        </div>
    );
}

export default AccountReModalEmail;
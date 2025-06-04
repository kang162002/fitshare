


function AccountReModalPass({userPass, setUserPass}) {
    return (
        <div className='account-re-body account account-re-div'>
            <div className='account-re-wrapper account-re-div'>
                <div className='account-re-container'>
                    {/*================== Password 찾음================= */}
                    <div className='account-re-email-container account-re-div'>

                        <form className='account-re-form'>
                            <h1 className='account-re-h1 account-re-email-h1'>Password가 <br></br>변경되었습니다.</h1>
                        </form>
                    </div>
                </div>

                <div>
                    <button className='account-re-modal-close-btn' onClick={() => {
                        setUserPass(false);
                    }}>창 닫기</button>
                    {!userPass ? setUserPass(true) : null}
                </div>

            </div>

        </div>
    );
}


export default AccountReModalPass;
import './MyProfile.css';

function MyProfile({ curAcct, setCurAcct }) {


    return (
        <>
            <div className="user-profile-body">
                <div className="user-profile-left">
                    <div className="user-profile-img"
                    ><img src={ curAcct.gender == 'female' ? "/images/female.png" : "/images/male.png"}></img></div>
                    <div className="user-profile-name">{curAcct.name}</div>
                    <div className="user-profile-name"><div>나이</div>{curAcct.age ? curAcct.age:'미입력'}</div>
                    <div className="user-profile-name"><div>키</div>{curAcct.height ? curAcct.age:'미입력'}</div>
                    <div className="user-profile-name"><div>몸무게</div>{curAcct.weight ? curAcct.age:'미입력'}</div>
                </div>
                <div className="user-profile-right">
                    <h1>즐겨찾기 목록</h1>
                    <div className="user-profile-favorites">
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div><div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div><div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                        <div className='user-profile-favoriteBox'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;
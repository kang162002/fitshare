import './MyProfile.css';

function MyProfile(){

    return (
        <>
            <div className="user-profile-body">
                <div className="user-profile-left">
                    <div className="user-profile-img"> 개인 프로필</div>
                    <div className="user-profile-name">이름</div>
                    <div className="user-profile-name">나이</div>
                    <div className="user-profile-name"></div>
                    <div className="user-profile-name"></div>
                    <div className="user-profile-name"></div>
                </div>
                <div className="user-profile-right">
                    <div className="user-profile-info">공개할 정보 목록</div>
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
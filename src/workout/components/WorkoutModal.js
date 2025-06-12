import { useState } from 'react';
import './WorkoutModal.css';
import favorite from './icons/filledStar.png';
import nonFavorite from './icons/unfilledStar.png'


function WorkoutModal({ closeModal, workoutData, curAcct, setCurAcct, accountData, setAccountData }) {

    //
    const [currentTab, setCurrentTab] = useState(0);

    let info_tab = document.getElementById('workout-modal-information-tab');
    let level_tab = document.getElementById('workout-modal-level-tab');

    const [isFavorite, setIsFavorite] = useState(false);

    //즐겨찾기 등록/해제 함수 (접속중인 계정 + 전체 계정 데이터에 접근해서 수정)
    const toggleFavorite = () => {
        const updatedData = accountData.map(user => {
            if (curAcct && user.email === curAcct.email) {
                const currentFavs = Array.isArray(user.favorites) ? user.favorites : [];

                let newFavorites;
                if (currentFavs.includes(workoutData.title)) {
                    newFavorites = currentFavs.filter(item => item !== workoutData.title); // 제거
                } else {
                    newFavorites = [...currentFavs, workoutData.title]; // 추가
                }

                const updatedUser = { ...user, favorites: newFavorites };
                setCurAcct(updatedUser);
                setIsFavorite(!isFavorite);
                console.log(user.favorites);
                return updatedUser;
            }
            return user;
        });

        setAccountData(updatedData);
    };

    return (
        <div className="workout-modal-fullscreen" onClick={closeModal}>
            <div className="workout-modal-box" onClick={(e) => { e.stopPropagation(); }}>
                <div className="workout-modal-header">
                    <h1 className="workout-exercise-title">{workoutData.title}
                        {/* 즐겨찾기 */}
                        <div onClick={toggleFavorite} style={{ fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '15px' }}>
                            {curAcct && Array.isArray(curAcct.favorites) && curAcct.favorites.includes(workoutData.title) ? <img src={favorite} alt='picture1' height='30px' width='30px'></img> : <img src={nonFavorite} alt='picture2' height='30px' width='30px'></img>}
                        </div>
                    </h1>
                    <button className="workout-modal-close-button" onClick={closeModal}>✕</button>
                </div>

                <div className="workout-modal-body">
                    <div className="workout-image-area">
                        <img src={process.env.PUBLIC_URL +  workoutData.imgPath} />
                    </div>

                    <div className="workout-info-area">
                        <div className="workout-tabs">
                            <button
                                className='workout-tab workout-active'
                                id='workout-modal-information-tab'
                                onClick={() => {
                                    info_tab = document.getElementById('workout-modal-information-tab');
                                    level_tab = document.getElementById('workout-modal-level-tab');
                                    if (currentTab == 1)
                                        level_tab.classList.remove('workout-active');
                                    info_tab.classList.add('workout-active');
                                    setCurrentTab(0);
                                }}
                            >
                                운동 설명
                            </button>
                            <button
                                className='workout-tab'
                                id='workout-modal-level-tab'

                                onClick={() => {
                                    info_tab = document.getElementById('workout-modal-information-tab');
                                    level_tab = document.getElementById('workout-modal-level-tab');
                                    if (currentTab == 0)
                                        info_tab.classList.remove('workout-active');
                                    level_tab.classList.add('workout-active');
                                    setCurrentTab(1);
                                }}
                            >
                                필요기구 및 난이도
                            </button>
                        </div>

                        <div className="workout-tab-content">
                            {
                                currentTab == 0 &&
                                (<p className='workout-text-line-break'>{workoutData.content}</p>)
                            }
                            {
                                currentTab == 1 &&
                                (<p>기구: {workoutData.tool}<br />난이도: {workoutData.level}</p>)
                            }
                        </div>

                        <div className="workout-routine">
                            <h3>추천 루틴</h3>
                            <ul>
                                <li>3세트 × 12회</li>
                                <li>세트 간 휴식 60초</li>
                                <li>주 3회 반복</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkoutModal;
import { useState } from 'react';
import './MyProfile.css';
import Survey from './Survey';
import WorkoutModal from '../workout/components/WorkoutModal';
import stretchData from '../workout/data/stretchData';
import workoutData from '../workout/data/workoutData';
import aeroData from '../workout/data/aeroData';

function MyProfile({ curAcct, setCurAcct, setOpenSurvey, accountData, setAccountData, openSurvey }) {

    const [selectedWorkout, setSelectedWorkout] = useState(null); // 선택된 운동
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부

    const allItems = [...stretchData, ...workoutData, ...aeroData];
    const favorites = curAcct.favorites ?? [];
    const matchedItems = allItems.filter(item => favorites.includes(item.title));

    return (
        <>
            <div className="user-profile-body">
                <div className="user-profile-left">
                    <div className="user-profile-img"><img src={curAcct.gender == 'female' ? "/images/female.png" : "/images/male.png"}></img></div>
                    <div className="user-profile-name"><p className='user-profile-info-text-name'>{curAcct.name}</p></div>
                    <div className="user-profile-name"><div className='user-profile-info-text'>나이</div>{curAcct.age ? curAcct.age : '미입력'}</div>
                    <div className="user-profile-name"><div className='user-profile-info-text'>키</div>{curAcct.height ? curAcct.height : '미입력'}</div>
                    <div className="user-profile-name"><div className='user-profile-info-text'>몸무게</div>{curAcct.weight ? curAcct.weight : '미입력'}</div>
                    <div>
                        <button
                            className='user-profile-survey-btn'
                            onClick={() => { setOpenSurvey(true) }}
                        >설문조사 다시하기</button>
                    </div>
                </div>
                <div className="user-profile-right">
                    <h1>즐겨찾기 목록</h1>
                    {
                        !matchedItems[0] && <div className='user-profile-noFav'>즐겨찾기한 운동이 없습니다.</div>
                    }
                    {matchedItems[0] &&
                        <div className="user-profile-favorites">

                            {matchedItems.map(item => (
                                <div className={`workout-card`} onClick={() => {
                                    setSelectedWorkout(item);
                                    setIsModalOpen(true);
                                }}>{item.title}</div>
                            ))}
                        </div>
                    }
                </div>
            </div>

            {isModalOpen && selectedWorkout && (
                <WorkoutModal
                    closeModal={() => {
                        setIsModalOpen(false);
                        setSelectedWorkout(null);
                    }}
                    workoutData={selectedWorkout}
                    curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData}
                />
            )}
            {openSurvey ? <Survey curAcct={curAcct} setCurAcct={setCurAcct} setOpenSurvey={setOpenSurvey} accountData={accountData} setAccountData={setAccountData} /> : null}
        </>
    );
}

export default MyProfile;
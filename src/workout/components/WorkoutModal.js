import React, { useState } from 'react';
import './WorkoutModal.css';

function WorkoutModal({ closeModal, workoutData }) {
    const [currentTab, setCurrentTab] = useState(0);
    //사용할 탭 ( 운동방법, 난이도 )
    // const tabNameArr = ['instruction', 'level'];

    let info_tab = document.getElementById('workout-modal-information-tab');
    let level_tab = document.getElementById('workout-modal-level-tab');


    return (
        <div className="workout-modal-fullscreen">
            <div className="workout-modal-box">
                <div className="workout-modal-header">
                    <h1 className="workout-exercise-title">{workoutData.title}</h1>
                    <button className="workout-modal-close-button" onClick={closeModal}>✕</button>
                </div>

                <div className="workout-modal-body">
                    <div className="workout-image-area">
                        <img src={workoutData.imgPath}/>
                    </div>

                    <div className="workout-info-area">
                        <div className="workout-tabs">
                            <button
                                className='workout-tab workout-active'
                                id='workout-modal-information-tab'
                                onClick={() => {
                                    info_tab = document.getElementById('workout-modal-information-tab');
                                    level_tab = document.getElementById('workout-modal-level-tab');
                                    if(currentTab==1)
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
                                    if(currentTab==0)
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
                                (<p>기구: {workoutData.tool}<br/>난이도: {workoutData.level}</p>)
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
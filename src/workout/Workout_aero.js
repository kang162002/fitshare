import './Workout_aero.css';
import { useEffect, useState } from 'react';
import WorkoutModal from './components/WorkoutModal';
import aeroData from './data/aeroData';

// Workout_gym.js, Workout_stretch.js 파일 구조 동일


function Workout_aero({ curAcct, setCurAcct, accountData, setAccountData }) {

    //모달 띄우기 Boolean
    const [showModal, setShowModal] = useState(false);

    //스트레칭 데이터 useState 가져오기
    let [aeroDatas, setAeroDatas] = useState(aeroData);

    //가져온 데이터 인덱스 번호 저장
    let [dataIndex, setDataIndex] = useState(0);

    //스트레칭 카테고리 구분
    let workout_tags = ['모든 운동'];
    //현재 선택된 카테고리
    let [selectedTag, setSelectedTag] = useState(workout_tags[0]);
    //선택된 카테고리의 그리드 배경 이미지
    let imageUrl = ['/images/aerobic_main.jpg'];
    const [backgroundImage, setBackgroundImage] = useState(imageUrl[0]);

    //화면 전환시 애니메이션 진행여부
    const [animationTrigger, setAnimationTrigger] = useState(false);

    useEffect(() => {
        const index = workout_tags.indexOf(selectedTag);
        setBackgroundImage(imageUrl[index]);
        setAnimationTrigger(true);

        const timer = setTimeout(() => {
            setAnimationTrigger(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [selectedTag]);


    return (
        <>
            {/*================= header =================*/}
            <div className='workout-aero-header'>
                <h1>유산소 운동</h1>
                <p>살이 잘 빠지는 운동 모음</p>
            </div>

            {/*================= body =================*/}
            <div className='workout-container'>
                {/*================= 카테고리 버튼 =================*/}
                <div className='workout-tag-buttons'>
                    {
                        workout_tags.map((name, index) => {
                            return <div key={index} className={`workout-tag ${selectedTag === name ? 'workout-tag-selected' : ''}`} onClick={() => {
                                setSelectedTag(workout_tags[index]);
                            }}>
                                {name}
                            </div>
                        })
                    }
                </div>

                {/*================= 운동 그리드 =================*/}
                <div className='workout-grid' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    {aeroDatas.map((name, index) => {
                        if (selectedTag === "모든 운동") {
                            return <div key={index} className={`workout-card ${animationTrigger ? 'workout-slide-animation' : ''}`} onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }

                        if (aeroDatas[index].tool === selectedTag) {
                            return <div key={index} className={`workout-card ${animationTrigger ? 'workout-slide-animation' : ''}`} onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }
                    })
                    }
                </div>
            </div>

            {/*================= 모달 띄우기 =================*/}
            {showModal && (
                <WorkoutModal closeModal={() => setShowModal(false)} workoutData={aeroDatas[dataIndex]} curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData} />
            )}
        </>
    );
}

export default Workout_aero;
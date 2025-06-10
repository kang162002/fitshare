import './Workout_gym.css';
import { useEffect, useState } from 'react';
import WorkoutModal from './components/WorkoutModal';
import workoutData from './data/workoutData';



function Workout_gym() {

    const [showModal, setShowModal] = useState(false);

    let [workoutDatas, setWorkoutDatas] = useState(workoutData);

    let [dataIndex, setDataIndex] = useState(0);

    let workout_tags = ['모든 운동', '덤벨', '바벨', '스미스머신', '케이블', '맨몸'];
    let [selectedTag, setSelectedTag] = useState(workout_tags[0]);
    let imageUrl = ['/images/gym_main.jpg', '/images/dumbbell_main.png', '/images/barbell_main.jpg', '/images/smithMachine_main.jpg', '/images/cable_main.jpg', '/images/freeweight_main.jpg'];

    const [backgroundImage, setBackgroundImage] = useState(imageUrl[0]);

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
            <div className='workout-gym-header'>
                <h1>근력 운동</h1>
                <p>근육을 키우기 위한 운동 모음</p>
            </div>
            <div className='workout-container'>
                <div className='workout-tag-buttons'>
                    {
                        workout_tags.map((name, index) => {

                            return <div key={index} className={`workout-tag ${selectedTag === name ? 'workout-tag-selected' : ''}`} onClick={() => {
                                setSelectedTag(workout_tags[index]);
                                // let workoutGrid = document.getElementsByClassName('workout-grid')[0];
                                // workoutGrid.style.backgroundImage = "url('" + imageUrl[index] + "')";
                            }}>
                                {name}
                            </div>
                        })
                    }
                </div>

                <div className='workout-grid' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    {workoutDatas.map((name, index) => {
                        if (selectedTag === "모든 운동") {
                            return <div key={index} className={`workout-card ${animationTrigger ? 'workout-slide-animation' : ''}`} onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }

                        if (workoutDatas[index].tool === selectedTag) {
                            return <div key={index} className={`workout-card ${animationTrigger ? 'workout-slide-animation' : ''}`} onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }

                    })

                    }


                </div>
            </div>

            {showModal && (
                <WorkoutModal closeModal={() => setShowModal(false)} workoutData={workoutDatas[dataIndex]} workoutDatas={workoutDatas} setWorkoutDatas={setWorkoutDatas} dataIndex={dataIndex}/>
            )}
        </>
    );
}

export default Workout_gym;
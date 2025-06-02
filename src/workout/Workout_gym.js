import './Workout_gym.css';
import { useState } from 'react';
import WorkoutModal from './components/WorkoutModal';
import workoutData from './data/workoutData';



function Workout_gym() {

    const [showModal, setShowModal] = useState(false);

    let [workoutDatas,setWorkoutDatas] = useState(workoutData);

    let [dataIndex,setDataIndex] = useState(0);

    let workout_tags = ['모든 운동', '덤벨', '바벨', '스미스머신','케이블','맨몸'];

    let [selectedTag, setSelectedTag] = useState(workout_tags[0]);

    let imageUrl = ['/images/gym_main.jpg','/images/dumbbell_main.png','/images/barbell_main.jpg','/images/smithMachine_main.jpg','/images/cable_main.jpg','/images/freeweight_main.jpg'];

    return (
        <>
            <div className='workout-header'>
                <h1>Gym</h1>
                <p>체육관에서 할 수 있는 운동 모음</p>
            </div>
            <div className='workout-container'>
                <div className='workout-tag-buttons'>
                    {
                        workout_tags.map((name, index)=>{
                            
                            return <div className={`workout-tag ${selectedTag === name ? 'workout-tag-selected' : ''}`} onClick={()=>{
                                setSelectedTag(workout_tags[index]);
                                let workoutGrid = document.getElementsByClassName('workout-grid')[0];
                                workoutGrid.style.backgroundImage = "url('" + imageUrl[index] + "')";
                            }}>
                                {name}
                            </div>
                    })
                }
                </div>

                <div className='workout-grid'>
                    {workoutDatas.map((name, index)=>{
                        if (selectedTag === "모든 운동"){
                            return <div className='workout-card' onClick={()=>{
                            setDataIndex(index);
                            setShowModal(true);
                            }}>{name.title}</div>
                        }

                        if (workoutDatas[index].tool===selectedTag){
                            return <div className='workout-card' onClick={()=>{
                            setDataIndex(index);
                            setShowModal(true);
                            }}>{name.title}</div>
                        }
                        
                    })
                        
                    }
                    
                    
                </div>
            </div>

            {showModal && (
                <WorkoutModal closeModal={() => setShowModal(false)} workoutData = {workoutDatas[dataIndex]} />
            )}
        </>
    );
}

export default Workout_gym;
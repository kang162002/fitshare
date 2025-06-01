import './Workout_gym.css';
import { useState } from 'react';
import WorkoutModal from './components/WorkoutModal';
import workoutData from './data/workoutData';

function Workout_gym() {

    const [showModal, setShowModal] = useState(false);

    let [workoutDatas,setWorkoutDatas] = useState(workoutData);

    let [dataIndex,setDataIndex] = useState(0);

    return (
        <>
            <div className='workout-header'>
                <h1>Gym</h1>
                <p>체육관에서 할 수 있는 운동 모음</p>
            </div>
            <div className='workout-container'>
                <div className='workout-grid'>
                    {workoutDatas.map((name, index)=>{
                        return <div className='workout-card' onClick={()=>{
                            setDataIndex(index);
                            setShowModal(true);
                    }}>{name.title}</div>
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
import './Workout_gym.css';
import './Workout_aero.css';
import { useEffect, useState } from 'react';
import WorkoutModal from './components/WorkoutModal';
import aeroData from './data/aeroData';



function Workout_aero() {

    const [showModal, setShowModal] = useState(false);

    let [aeroDatas, setAeroDatas] = useState(aeroData);

    let [dataIndex, setDataIndex] = useState(0);

    let workout_tags = ['모든 운동'];

    let [selectedTag, setSelectedTag] = useState(workout_tags[0]);

    let imageUrl = ['/images/aerobic_main.jpg'];

    const [backgroundImage, setBackgroundImage] = useState(imageUrl[0]);

    useEffect(() => {
        const index = workout_tags.indexOf(selectedTag);
        setBackgroundImage(imageUrl[index]);
    }, [selectedTag]);


    return (
        <>
            <div className='workout-header'>
                <h1>유산소 운동</h1>
                <p>살이 잘 빠지는 운동 모음</p>
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
                    {aeroDatas.map((name, index) => {
                        if (selectedTag === "모든 운동") {
                            return <div key={index} className='workout-card' onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }

                        if (aeroDatas[index].tool === selectedTag) {
                            return <div key={index} className='workout-card' onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }

                    })

                    }


                </div>
            </div>

            {showModal && (
                <WorkoutModal closeModal={() => setShowModal(false)} workoutData={aeroDatas[dataIndex]} />
            )}
        </>
    );
}

export default Workout_aero;
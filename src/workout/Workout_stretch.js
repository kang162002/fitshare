import './Workout_stretch.css';
import { useEffect, useState } from 'react';
import WorkoutModal from './components/WorkoutModal';
import stretchData from './data/stretchData';



function Workout_stretch({ curAcct, setCurAcct, accountData, setAccountData }) {

    const [showModal, setShowModal] = useState(false);

    let [stretchDatas, setStretchDatas] = useState(stretchData);

    let [dataIndex, setDataIndex] = useState(0);

    let workout_tags = ['모든 스트레칭', '허리', '허벅지', '가슴', '등', '어깨', '엉덩이'];
    let [selectedTag, setSelectedTag] = useState(workout_tags[0]);
    let imageUrl = ['/images/stretch_main.jpg', '/images/waist_main.jpg', '/images/thigh_main.jpg', '/images/chest_main.jpg', '/images/back_main.jpg', '/images/shoulder_main.jpg', '/images/hips_main.jpg'];

    const [backgroundImage, setBackgroundImage] = useState(imageUrl[0]);

    const [animationTrigger, setAnimationTrigger] = useState(false);

    useEffect(() => {
        const index = workout_tags.indexOf(selectedTag);
        setBackgroundImage(process.env.PUBLIC_URL +  imageUrl[index]);
        setAnimationTrigger(true);

        const timer = setTimeout(() => {
            setAnimationTrigger(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [selectedTag]);


    return (
        <>
            <div className='workout-stretch-header'>
                <h1>Stretch</h1>
                <p>근육을 유연하게 하는 스트레칭</p>
            </div>
            <div className='workout-container'>
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

                <div className='workout-grid' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    {stretchDatas.map((name, index) => {
                        if (selectedTag === "모든 스트레칭") {
                            return <div key={index} className={`workout-card ${animationTrigger ? 'workout-slide-animation' : ''}`} onClick={() => {
                                setDataIndex(index);
                                setShowModal(true);
                            }}>{name.title}</div>
                        }

                        if (stretchDatas[index].area.includes(selectedTag)) {
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
                <WorkoutModal closeModal={() => setShowModal(false)} workoutData={stretchDatas[dataIndex]} curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData} />
            )}
        </>
    );
}

export default Workout_stretch;
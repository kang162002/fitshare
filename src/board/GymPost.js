import React from"react";

const GymPost = () => {
    return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">GYM 100% 이용하기 – 헬스장 제대로 활용하는 법!</h1>
        <p className="mb-6">
        안녕하세요! 헬스장 등록만 해놓고 제대로 활용 못하는 분들을 위해 제가 GYM을 100% 활용하는 팁을 정리해봤어요.
        등록했으면 제대로 써먹어야죠? 💥
        </p>

    <Section
        title="1. 오리엔테이션은 무조건 참여하기"
        img="https://source.unsplash.com/featured/?gym,instructor"
        desc="대부분 GYM에서는 초보자 대상 오리엔테이션을 제공합니다. 장비 사용법, 루틴 짜는 법, 주의사항 등 꼭 참여하세요."
    />

    <Section
        title="2. 기구는 부위별로 나눠서 사용하기"
        img="https://source.unsplash.com/featured/?workout,routine"
        desc="하루에 전신 다 돌리려고 하지 말고, 월: 가슴 / 화: 등 / 수: 하체 등 분할 루틴으로 운동하세요."
    />

    <Section
        title="3. PT 권유? 부담 느끼지 말고 상담만 받아보기"
        img="https://source.unsplash.com/featured/?gym,trainer"
        desc="트레이너의 PT 권유가 부담된다면 무료 상담만 받아보세요. 비교도 해보고 초보자라면 몇 회는 받아보는 게 좋아요."
    />

    <Section
        title="4. 운동 후 사우나 & 스트레칭 공간도 적극 활용하기"
        img="https://source.unsplash.com/featured/?sauna,stretching"
        desc="헬스장에는 운동 외에도 쉴 수 있는 공간이 많아요. 스트레칭룸, 사우나 등도 적극 이용해 보세요."
    />

    <Section
        title="5. 유산소 기구는 영상 or 오디오 콘텐츠랑 같이!"
        img="https://source.unsplash.com/featured/?treadmill,headphones"
        desc="런닝머신, 싸이클 탈 때 영상이나 음악을 틀어두면 지루하지 않아요. 꾸준함의 비결입니다!"
    />

    <div className="mt-6 text-lg font-semibold">
        결론:<br />
        GYM은 운동만 하는 공간이 아닙니다. 루틴에 맞춰 전략적으로 활용하면, 시간도 아끼고 효과도 극대화됩니다! 💪
    </div>
    </div>
);
};

const Section = ({ title, img, desc }) => (
    <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <img src={img} alt={title} className="w-full h-56 object-cover rounded-lg mb-2" />
    <p>{desc}</p>
    </div>
);

export default GymPost;
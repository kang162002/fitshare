import React from "react";

const TeamPost = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-3xl font-bold-mb-4">BOAT FC 팀원 모집 합니다!</h1>
            <p className="md-6">
                BOAT FC는 청주에서 일주일에 한 번 이상 운동하는 팀입니다. 자유로운 분위기와 20대로 구성되어 있어
                더 열정적이고 에너지 넘치는 팀 입니다! 같이 운동할 팀원 구합니다!
            </p>

            <TeamSection
                title="1. 매너 좋고 열심히 하는 사람"
                img=""
                desc="아무리 실력이 좋다고 해도 매너가 좋지 않으면 같이 팀하기 힘들어요. 실력 보다는 열정,매너만 있다면 OK!"
            />

            <TeamSection
                title="2. 거주 위치(청주)"
                img=""
                desc="저희는 청주에서 운동을 하기 때문에 거주지역이 멀다면 운동하기 힘드실거 같아서 청주 사시는 분들 환영!"
            />

            <TeamSection
                title="3. 매주 일요일 경기(변동 가능성 있음)"
                img=""
                desc="매주 일요일 오전,오후에 경기를 하고 주간 상대 일정에 따라 변동 될 수도 있습니다!"
            />

            <TeamSection
                title="4. 월 회비 만원"
                img=""
                desc="월 회비 만원으로 경기 진행할때 발생하는 비용을 처리 합니다. 회비가 쌓이면 야유회 및 회식비로 사용합니다!"
            />

        <div className="mt-6 text-lg font-semiblod">
            정리:<br />
            실력보다는 인성 매너가 더 중요하고! 20대로 구성 되어 있어 열정가 에너지가 넘치고 친절한 사람들과 같이 운동해요!
        </div>
            </div>
    );
};

const TeamSection = ({ title, img, desc }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <img src={img} alt={title} className="w-full h-56 object-cover rounded-lg mb-2" />
        <p>{desc}</p>
    </div>
);

export default TeamPost;
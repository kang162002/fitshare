
const tips = [
    {
        title: "1. 오리엔테이션은 무조건 참여하기",
        desc: `대부분 GYM에서는 초보자를 위한 오리엔테이션을 제공합니다. 
    장비 사용법, 루틴 짜는 법, 부상 방지 등 기초 지식을 얻을 수 있는 기회이니 꼭 참여해보세요.`,
        img: "",
    },
    {
        title: "2. 기구는 부위별로 나눠서 사용하기",
        desc: `전신 운동을 한 번에 몰아서 하기보다는, 월: 가슴 / 화: 등 / 수: 하체 등으로 분할 루틴을 구성하는 것이 효율적입니다.`,
        img: "https://source.unsplash.com/featured/?workout,routine",
    },
    {
        title: "3. PT 권유? 부담 느끼지 말고 상담만 받아보기",
        desc: `트레이너가 PT를 권유해도 부담스러워하지 마세요. 
    무료 상담만 받아보면서 본인에게 맞는 트레이너인지 판단할 수 있어요.`,
        img: "https://source.unsplash.com/featured/?gym,trainer",
    },
    {
        title: "4. 운동 후 사우나 & 스트레칭 공간도 활용하기",
        desc: `운동만 하지 말고 회복도 챙기세요. 스트레칭룸, 마사지기, 사우나 등 부가 시설도 적극 활용해보세요.`,
        img: "https://source.unsplash.com/featured/?sauna,stretching",
    },
    {
        title: "5. 유산소 기구는 콘텐츠와 함께!",
        desc: `런닝머신이나 싸이클 할 때 유튜브, 넷플릭스, 음악을 틀면 지루함을 줄이고 꾸준함을 유지할 수 있어요.`,
        img: "https://source.unsplash.com/featured/?treadmill,headphones",
    },
];

const GymPostTable = () => {
    return (
        <div className="gym-wrapper">
            <h1 className="gym-title">
                GYM 100% 이용하기 – 헬스장 제대로 활용하는 법!
            </h1>
            <p className="gym-intro">
                헬스장 등록만 해놓고 잘 활용하지 못하고 있다면, 아래 팁들을 참고해보세요!
                GYM을 제대로 써먹을 수 있는 실용적인 전략을 표로 정리했습니다 💪
            </p>

            <table className="gym-table">
                <tbody>
                    {tips.map((tip, idx) => (
                        <tr key={idx} className="gym-row">
                            <td className="gym-text">
                                <h2 className="gym-subtitle">{tip.title}</h2>
                                <p className="gym-description">{tip.desc}</p>
                            </td>
                            <td className="gym-image">
                                <img
                                    src={process.env.PUBLIC_URL +  tip.img}
                                    alt={tip.title}
                                    className="gym-img"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="gym-conclusion">
                <strong className="gym-conclusion-title">✅ 결론</strong>
                GYM은 단순히 운동하는 곳이 아니라, 장비·사우나·루틴 등을 전략적으로
                활용하는 종합적인 공간입니다. <br />
                헬스장을 ‘등록’만 하지 말고 ‘활용’하세요! 꾸준함이 곧 변화입니다.
            </div>
        </div>
    );
};

export default GymPostTable;
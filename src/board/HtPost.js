
const HtPost = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-4">🏠 홈트레이닝 장비 추천 집에서도 제대로 운동하자!</h1>
            <p className="mb-6">
                내돈내산 !!!!!!!!!!!!!!!! <br />
                바쁜 사회 속에서 쉽게 집에서 효과적으로 운동 할 수 있는 장비 추천!
                공간을 많이 차지하지 않으면서 효과적인 홈트 장비를 추천해드립니다.
            </p>

            <HtSection
                title="1. 요가매트(홈트 필수템!)"
                img=""
                desc="충격 흡수, 미끄럼방지
            스트레칭부터 코어운동까지 다양하게 활용"
            />

            <HtSection
                title="2. 미니밴드(엉덩이, 하체 강화)"
                img=""
                desc="사이드 런지, 스쿼트 시 활용
            코어(엉덩이) 자극에 도움을 많이 줌"
            />

            <HtSection
                title="3. 덤벨(상체 운동의 핵심)"
                img=""
                desc="덤벨 컬, 숄더 프레스, 사이드 레터럴 등 다양하게 활용 가능
            고무 코팅 제품 추천 (바닥 보호)"
            />

            <HtSection
                title="4. 슬라이딩 디스크(코어 강화)"
                img=""
                desc="마룻바닥에서 활용 가능
            복부 자극 & 전신 유산소
            다이어트에 도움!!"
            />

            <div className="mt-6 text-lg font-semibold">
                💡 TIP:<br />
                내돈내산 홈트 장비 추천 !!
                처음 하는 홈트레이닝을 보다 더 도와 줄 수 있는 장비 추천해드립니다!
            </div>
        </div>
    );
};

const HtSection = ({ title, img, desc }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <img src={img} alt={title} className="w-full h-56 object-cover rounded-lg mb-2" />
        <pre className="whitespace-pre-wrap">{desc}</pre>
    </div>
);

export default HtPost;
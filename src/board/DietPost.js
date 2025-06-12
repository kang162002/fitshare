
const DietPOst = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-4"> 다이어트 4주 감량 플랜 – 현실적으로 3~5kg 감량 도전!</h1>
            <p className="mb-6">
                다이어트는 단기간이 아닌 꾸준한 습관 만들기가 핵심입니다.
                이 4주 플랜은 누구나 시작할 수 있도록 구성된 기초 + 실천 중심 플랜 입니다.
            </p>

            <DietSection
                title="1주차  몸을 깨우는 준비 주간"
                img=""
                desc=" 아침 기상 후 스트레칭 10분  
        저녁 20분 걷기  
        탄산, 과자 끊고 물 2L 마시기  
        식사 기록 앱 설치 & 매일 기록"
            />

            <DietSection
                title="2주차  식단 조절 + 기본 유산소"
                img=""
                desc=" 아침: 단백질+야채 / 점심: 일반식 / 저녁: 간단식  
        하루 30분 빠르게 걷기 or 실내 자전거  
        외식 1회 이하 유지  
        간식은 견과류로 대체"
            />

            <DietSection
                title="3주차 근력운동 시작 + 식사 타이밍 조절"
                img=""
                desc=" 하체 + 복부 중심 근력운동 (20분)  
        탄수화물 줄이고 단백질 위주 식사  
        야식 금지, 7시 이후 금식 도전  
        하루에 한 번 셀카 찍기 (모니터링)"
            />

            <DietSection
                title="4주차  유지 + 집중 주간"
                img=""
                desc=" 식단 루틴 정착, 주간 메뉴 미리 계획  
        근력+유산소 조합 운동 30~40분  
        체중·인바디 체크  
        성공 보상 준비 (맛있는 단백질 쉐이크나 운동복 구매!)"
            />

            <div className="mt-6 text-lg font-semibold">
                💡 TIP:<br />
                체중보다 중요한 건 습관 입니다.  <br />
                4주 플랜으로 당신의 다이어트 성공하기!
            </div>
        </div>
    );
};

const DietSection = ({ title, img, desc }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <img src={img} alt={title} className="w-full h-56 object-cover rounded-lg mb-2" />
        <pre className="whitespace-pre-wrap">{desc}</pre>
    </div>
);

export default DietPOst;
import React from"react";

const TipPost = () => {
    return(
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-3x1 font-bold mb-4">헬스장 예절 총정리 - 다같이 쓰는 공간, 함께 지켜요!</h1>
            <p className="md-6">
                헬스장은 모두가 함께 사용하는 공간입니다. 기본적인 매너와 예절을 지켜야 모두가 쾌적하게 운동할 수 있어요.  
                다음은 꼭 알아두어야 할 헬스장 에티켓들입니다. 🙏
            </p>

            <TipSection
                title="1. 본인이 사용한 기구 정리"
                img="https://source.unsplash.com/featured/?gym,wipe"
                desc="운동 후 기구에 땀이 묻었다면 티슈나 타월로 한 번 닦아주고 원래 위치에 가져다 놓기!"
            />

            <TipSection
                title="2. 기구 독점하지 않기"
                img="https://source.unsplash.com/featured/?gym,wipe"
                desc="스마트폰이나 다른것들을 보면서 사용하지 않고 휴식시간은 최대한 짧게 가져가기 만약 기구를 기다리는 사람이 있다면 양보 하거나 양해를 구하기!"
            />

            <TipSection
                title="3. 큰 소리로 통화하거나 운동하지 않기"
                img="https://source.unsplash.com/featured/?gym,wipe"
                desc="헬스장에서는 조용히 집중해서 운동하는 곳이기 때문에 큰 소리로 운동 및 통화를 하게 된다면 다른 사람들에게 피해가 갈 수 있습니다. 음악은 헤드셋 및 이어폰 사용, 통화는 가급적 밖에서 하기!"
            />

            <TipSection
                title="4. 정해진 복장 착용하기"
                img="https://source.unsplash.com/featured/?gym,wipe"
                desc="크록스나 슬리퍼를 신지 않기! 청바지나 운동하기에 부적합한 옷은 입지 않기! 운동화 신는건 필수!"
            />

            <TipSection
                title="5. 셀카, 영상 촬영시 주의사항"
                img="https://source.unsplash.com/featured/?gym,wipe"
                desc="운동 기록을 목적으로 촬영하는건 괜찮지만 다른 사람을 촬영하지 않도록 주의하기 촬영시 주위에 피해가 가지 않도록 주의하기!"
            />

        <div className="mt-6 text-lg font-semibold">
        💡 정리:<br />
        헬스장은 내 공간이 아니라 모두의 공간입니다. 기본적인 예절만 지켜도 모두가 더 즐겁게 운동할 수 있어요!
    </div>
    </div>
);
};

const TipSection = ({ title, img, desc }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <img src={img} alt={title} className="w-full h-56 object-cover rounded-lg mb-2" />
        <p>{desc}</p>
    </div>
);


export default TipPost;
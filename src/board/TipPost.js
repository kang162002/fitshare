import React from "react";

const TipPost = ({ post }) => {
    const tips = [
        {
            title: "1. 본인이 사용한 기구 정리",
            img: "https://source.unsplash.com/featured/?gym,wipe",
            desc: "운동 후 기구에 땀이 묻었다면 티슈나 타월로 한 번 닦아주고 원래 위치에 가져다 놓기!",
        },
        {
            title: "2. 기구 독점하지 않기",
            img: "https://source.unsplash.com/featured/?gym,equipment",
            desc: "스마트폰이나 다른 것을 보면서 오래 사용하지 않기. 휴식 시간은 짧게! 기다리는 사람이 있다면 양해를 구하거나 양보하기!",
        },
        {
            title: "3. 큰 소리로 통화하거나 운동하지 않기",
            img: "https://source.unsplash.com/featured/?gym,phone",
            desc: "헬스장에서는 조용히 집중해서 운동하는 곳이에요. 통화는 밖에서, 음악은 이어폰으로!",
        },
        {
            title: "4. 정해진 복장 착용하기",
            img: "https://source.unsplash.com/featured/?gym,shoes",
            desc: "크록스, 슬리퍼, 청바지 등 운동에 부적절한 복장은 피하고, 운동화를 꼭 착용하기!",
        },
        {
            title: "5. 셀카, 영상 촬영 시 주의사항",
            img: "https://source.unsplash.com/featured/?gym,photo",
            desc: "운동 기록은 괜찮지만, 다른 사람을 촬영하지 않도록 주의하고 주변에 피해가 가지 않게 하기!",
        },
    ];

    return (
        <div className="tip-wrapper">
            <h1 className="tip-title">
                {post?.title || "헬스장 예절 총정리 - 다같이 쓰는 공간, 함께 지켜요!"}
            </h1>
            <p className="tip-intro">
                헬스장은 모두가 함께 사용하는 공간입니다. 기본적인 매너와 예절을 지켜야 모두가 쾌적하게 운동할 수 있어요.  
                다음은 꼭 알아두어야 할 헬스장 에티켓들입니다. 🙏
            </p>

            {tips.map((tip, index) => (
                <TipSection key={index} {...tip} />
            ))}

            <div className="tip-table">
                💡 정리:<br />
                헬스장은 내 공간이 아니라 <span className="font-bold">모두의 공간</span>입니다.<br />
                기본적인 예절만 지켜도 모두가 더 즐겁게 운동할 수 있어요!
            </div>
        </div>
    );
};

const TipSection = ({ title, img, desc }) => (
    <div className="tip-title-t1">
        <h2 className="tip-title-t2">{title}</h2>
        <img
            src={img}
            alt={title}
            className="tip-title-t3"
        />
        <p className="text-base">{desc}</p>
    </div>
);

export default TipPost;
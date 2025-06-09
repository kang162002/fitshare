import React, { useState, useEffect } from "react";

const htEquipments = [
    {
    title: "1. 요가매트(홈트 필수템!)",
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_1111841%2F11118419716.2.jpg&type=f372_372",
    desc: `충격 흡수, 미끄럼방지
            스트레칭부터 코어운동까지 다양하게 활용`,
    },
    {
    title: "2. 미니밴드(엉덩이, 하체 강화)",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3578518%2F35785185925.20221112034525.jpg&type=a340",
    desc: `사이드 런지, 스쿼트 시 활용
            코어(엉덩이) 자극에 도움을 많이 줌`,
    },
    {
    title: "3. 덤벨(상체 운동의 핵심)",
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8626447%2F86264479742.1.jpg&type=f372_372",
    desc: `덤벨 컬, 숄더 프레스, 사이드 레터럴 등 다양하게 활용 가능
            고무 코팅 제품 추천 (바닥 보호)`,
    },
    {
    title: "4. 슬라이딩 디스크(코어 강화)",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200514_43%2F1589445298677Olael_JPEG%2F26807632064355887_97181894.jpg&type=a340",
    desc: `마룻바닥에서 활용 가능
            복부 자극 & 전신 유산소
            다이어트에 도움!!`,
    },
];

function HtPostModal({ closeModal }) {
    const [views, setViews] = useState(0);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    useEffect(() => {
        setViews((prev) => prev + 1);
    }, []);

    const handleLike = () => {
        setLiked(!liked);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    const addComment = () => {
        if (commentInput.trim() === "") return;
        setComments([...comments, { id: Date.now(), text: commentInput }]);
        setCommentInput("");
    };

    return (
        <div className="ht-modal-fullscreen">
        <div className="ht-modal-box">
            <div className="ht-modal-header">
            <h1 className="ht-modal-title">🏠 홈트레이닝 장비 추천 집에서도 제대로 운동하자!</h1>
            <button className="ht-modal-close-button" onClick={closeModal}>
                X
            </button>
            </div>

            <div
            style={{
                padding: "0 20px",
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "10px",
            }}
            >
            <span>
                작성자: <strong>내돈내산 홈트러</strong>
            </span>{" "}
            | <span>작성일: {new Date().toLocaleDateString()}</span> |{" "}
            <span>조회수: {views}</span> |{" "}
            <span style={{ cursor: "pointer" }} onClick={handleLike}>
                ❤️ {likes}
            </span>
            </div>

            <div className="ht-modal-body post-style-body">
            <p style={{ marginBottom: "30px", fontSize: "1rem" }}>
                내돈내산 !!!!!!!!!!!!!!!! <br />
                바쁜 사회 속에서 쉽게 집에서 효과적으로 운동 할 수 있는 장비 추천!  
                공간을 많이 차지하지 않으면서 효과적인 홈트 장비를 추천해드립니다.
            </p>

            {htEquipments.map((item, idx) => (
                <div
                key={idx}
                style={{
                    marginBottom: "25px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "15px",
                }}
                >
                <h2>{item.title}</h2>
                {item.img && (
                    <img
                    src={item.img}
                    alt={item.title}
                    style={{
                        width: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        marginBottom: "10px",
                        borderRadius: "8px",
                    }}
                    />
                )}
                <pre className="whitespace-pre-wrap">{item.desc}</pre>
                </div>
            ))}

            <div
                style={{
                marginTop: "30px",
                background: "#f9f9f9",
                padding: "15px",
                borderRadius: "10px",
                }}
            >
                💡 <strong>TIP:</strong>
                <br />
                내돈내산 홈트 장비 추천 !!<br />
                처음 하는 홈트레이닝을 보다 더 도와 줄 수 있는 장비 추천해드립니다!
            </div>

            <div style={{ marginTop: "30px" }}>
                <h3>💬 댓글</h3>
                <input
                type="text"
                placeholder="댓글을 입력하세요"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                style={{ width: "80%", marginRight: "10px", padding: "8px" }}
                />
                <button onClick={addComment}>댓글 추가</button>
                <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
                {comments.map((c) => (
                    <li key={c.id}>- {c.text}</li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
}

export default HtPostModal;
import React, { useState, useEffect } from "react";
import "./GymPostModal.css";

const etiquetteTips = [
    {
        title: "1. 본인이 사용한 기구 정리",
        img: "/images/boardimg/기구정리.webp",
        desc: "운동 후 기구에 땀이 묻었다면 티슈나 타월로 한 번 닦아주고 원래 위치에 가져다 놓기!",
    },
    {
        title: "2. 기구 독점하지 않기",
        img: "/images/boardimg/독점.webp",
        desc: "스마트폰이나 다른것들을 보면서 사용하지 않고 휴식시간은 최대한 짧게! 기다리는 사람이 있다면 양보 또는 양해 구하기!",
    },
    {
        title: "3. 큰 소리로 통화하거나 운동하지 않기",
        img: "/images/boardimg/전화예절.webp",
        desc: "헬스장은 집중해서 운동하는 곳! 통화는 밖에서, 음악은 이어폰으로!",
    },
    {
        title: "4. 정해진 복장 착용하기",
        img: "/images/boardimg/헬스장 복장.webp",
        desc: "슬리퍼, 청바지 ❌ 운동화는 필수입니다!",
    },
    {
        title: "5. 셀카, 영상 촬영 시 주의사항",
        img: "/images/boardimg/촬영.webp",
        desc: "촬영 OK! 단, 다른 사람이 나오지 않도록 주의하세요. 피해 없게 예의 지키기!",
    },
    ];

    function TipPostModal({ closeModal }) {
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
        <div className="tip-modal-fullscreen">
        <div className="tip-modal-box">
            <div className="tip-modal-header">
            <h1 className="tip-modal-title">헬스장 예절 총정리 - 다같이 쓰는 공간, 함께 지켜요!</h1>
            <button className="tip-modal-close-button" onClick={closeModal}>
                X
            </button>
            </div>

            <div style={{ padding: "0 20px", fontSize: "0.9rem", color: "#555", marginBottom: "10px" }}>
            <span>작성자: <strong>GYM매너맨</strong></span> |{" "}
            <span>작성일: {new Date().toLocaleDateString()}</span> |{" "}
            <span>조회수: {views}</span> |{" "}
            <span style={{ cursor: "pointer" }} onClick={handleLike}>
                ❤️ {likes}
            </span>
            </div>

            <div className="tip-modal-body post-style-body">
            <p style={{ marginBottom: "30px", fontSize: "1rem" }}>
                헬스장은 모두가 함께 사용하는 공간입니다. 기본적인 매너와 예절을 지켜야 모두가 쾌적하게 운동할 수 있어요.  
                다음은 꼭 알아두어야 할 헬스장 에티켓들입니다. 🙏
            </p>

            {etiquetteTips.map((tip, idx) => (
                <div key={idx} style={{ marginBottom: "25px", borderBottom: "1px solid #ddd", paddingBottom: "15px" }}>
                <h2>{tip.title}</h2>
                <img
                    src={tip.img}
                    alt={tip.title}
                    style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    }}
                />
                <p>{tip.desc}</p>
                </div>
            ))}

            <div style={{ marginTop: "30px", background: "#f9f9f9", padding: "15px", borderRadius: "10px" }}>
                💡 <strong>정리:</strong><br />
                헬스장은 내 공간이 아니라 모두의 공간입니다. 기본적인 예절만 지켜도 모두가 더 즐겁게 운동할 수 있어요!
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

    export default TipPostModal;
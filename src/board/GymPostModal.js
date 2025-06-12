import React, { useState, useEffect } from "react";
import "./GymPostModal.css";



const tips = [
    {
        title: "1. 오리엔테이션은 무조건 참여하기",
        desc: `대부분 GYM에서는 초보자를 위한 오리엔테이션을 제공합니다. 
                장비 사용법, 루틴 짜는 법, 부상 방지 등 기초 지식을 얻을 수 있는 기회이니 꼭 참여해보세요.`,
        img: "/images/boardimg/Gym 자료.webp",
    },
    {
        title: "2. 기구는 부위별로 나워서 사용하기",
        desc: '전신 운동을 한 번에 몰아서 하기보다는 월: 가슴 / 화: 등 / 수: 하체 등으로 분할 루틴을 구성하는 것이 효율적입니다.',
        img: "/images/boardimg/헬스장 기구.webp",
    },
    {
        title: "3. PT 권유? 부담 느끼지 말고 상담만 받아보기",
        desc: '트레이너가 PT를 권유해도 부담스러워 하지 마세요.',
        img: "/images/boardimg/권유.webp",
    },
    {
        title: "4. 운동 후 사우나 & 스트레칭 공간도 활용하기",
        desc: '운동만 하지 말고 회복도 챙기세요. 스트레칭룸, 마사지기, 사우나 등 부가 시설도 적극 활용하기!',
        img: "/images/boardimg/스트레칭.webp",
    },
    {
        title: "5. 유산소 기구는 콘텐츠와 함께!",
        desc: '런닝머신이나 싸이클 할 때 유튜브, 넷플릭스, 음악을 틀면 지루함을 줄이고 꾸준함을 유지할 수 있어요.',
        img: "/images/boardimg/유튜브.webp",
    },
]

function GymPostModal({ post, closeModal, posts }) {
    const dataPost = posts[65];
    const [views, setViews] = useState(dataPost.views - 1);
    const [likes, setLikes] = useState(dataPost.likesCount);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    useEffect(() => {
        setViews((prev) => prev + 1);

        const savedComments = localStorage.getItem("gym-post-comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    const handleLike = () => {
        setLiked(!liked);
        setLikes((prev) => liked ? prev - 1 : prev + 1);
    };

    const addComment = () => {
        if (commentInput.trim() === "") return;
        const newComments = [...comments, { id: Date.now(), text: commentInput }];
        setComments(newComments);
        setCommentInput("");
        localStorage.setItem("gym-post-comments", JSON.stringify(newComments));
    };

    return (
        <div className="gym-modal-fullscreen" onClick={closeModal}>
            <div className="gym-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="gym-modal-header">
                    <h1 className="gym-modal-title">{post.title}</h1>
                    <button className="gym-modal-close-button" onClick={closeModal}>X</button>
                </div>

                <div style={{ padding: "0 20px", fontSize: "0.9rem", color: "#555", marginBottom: "10px" }}>
                    <span>작성자: <strong>{post.writer}</strong></span> |{" "}
                    <span>작성일: {post.date}</span>
                    <span>조회수: {views}</span> |{" "}
                    <span style={{ cursor: "pointer" }} onClick={handleLike}>
                        ❤️ {likes}
                    </span>
                </div>

                <div className="gym-modal-body post-style-body">
                    <p className="gym-intro" style={{ marginBottom: "30px", fontsize: "1rem" }}>
                        헬스장 등록만 해놓고 잘 활용하지 못하고 있다면, 아래 팁들을 참고해보세요!
                    </p>

                    {tips.map((tip, idx) => (
                        <div key={idx} style={{ marginBottom: "25px", borderBottom: "1px solid #ddd", paddingBottom: "15px" }}>
                            <h2>{tip.title}</h2>
                            <img src={process.env.PUBLIC_URL +  tip.img} alt={tip.title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginBottom: "10px", borderRadius: "8px" }} />
                            <p style={{ whiteSpace: "pre-line" }}>{tip.desc}</p>
                        </div>
                    ))}

                    <div className="gym-conclusion" style={{ marginTop: "30px", background: "#f9f9f9", padding: "15px", borderRadius: "10px" }}>
                        ✅ <strong>결론:</strong><br />
                        헬스장은 ‘등록’만 하지 말고 ‘활용’하세요! 꾸준함이 곧 변화입니다.
                    </div>

                    <div style={{ marginTop: "30px" }}>
                        <h3>💬 댓글</h3>
                        <input
                            type="text"
                            placeholder="댓글을 입력하세요"
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addComment();
                                }
                            }}
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

export default GymPostModal;
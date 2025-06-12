import { useState, useEffect } from "react";

const dietPlans = [
    {
        title: "1주차  몸을 깨우는 준비 주간",
        img: "/images/boardimg/스트레칭1.webp",
        desc: `아침 기상 후 스트레칭 10분  
                저녁 20분 걷기  
                탄산, 과자 끊고 물 2L 마시기  
                식사 기록 앱 설치 & 매일 기록`,
    },
    {
        title: "2주차  식단 조절 + 기본 유산소",
        img: "/images/boardimg/식단조절.webp",
        desc: `아침: 단백질+야채 / 점심: 일반식 / 저녁: 간단식  
                하루 30분 빠르게 걷기 or 실내 자전거  
                외식 1회 이하 유지  
                간식은 견과류로 대체`,
    },
    {
        title: "3주차 근력운동 시작 + 식사 타이밍 조절",
        img: "/images/boardimg/근력운동.webp",
        desc: `하체 + 복부 중심 근력운동 (20분)  
                탄수화물 줄이고 단백질 위주 식사  
                야식 금지, 7시 이후 금식 도전  
                하루에 한 번 셀카 찍기 (모니터링)`,
    },
    {
        title: "4주차  유지 + 집중 주간",
        img: "/images/boardimg/집중.webp",
        desc: `식단 루틴 정착, 주간 메뉴 미리 계획  
                근력+유산소 조합 운동 30~40분  
                체중·인바디 체크  
                성공 보상 준비 (맛있는 단백질 쉐이크나 운동복 구매!)`,
    },
];

function DietPostModal({ post, closeModal }) {
    const [views, setViews] = useState(post.views - 1);
    const [likes, setLikes] = useState(post.likesCount);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    useEffect(() => {
        setViews((prev) => prev + 1);

        const savedComments = localStorage.getItem("diet-post-comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    const handleLike = () => {
        setLiked(!liked);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    const addComment = () => {
        if (commentInput.trim() === "") return;
        const newComments = [...comments, { id: Date.now(), text: commentInput }];
        setComments(newComments);
        setCommentInput("");
        localStorage.setItem("diet-post-comments", JSON.stringify(newComments));
    };

    return (
        <div className="diet-modal-fullscreen" onClick={closeModal}>
            <div className="diet-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="diet-modal-header">
                    <h1 className="diet-modal-title">다이어트 4주 감량 플랜 – 현실적으로 3~5kg 감량 도전!</h1>
                    <button className="diet-modal-close-button" onClick={closeModal}>
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
                        작성자: <strong>다이어트코치</strong>
                    </span>{" "}
                    | <span>작성일: {new Date().toLocaleDateString()}</span> |{" "}
                    <span>조회수: {views}</span> |{" "}
                    <span style={{ cursor: "pointer" }} onClick={handleLike}>
                        ❤️ {likes}
                    </span>
                </div>

                <div className="diet-modal-body post-style-body">
                    <p style={{ marginBottom: "30px", fontSize: "1rem" }}>
                        다이어트는 단기간이 아닌 꾸준한 습관 만들기가 핵심입니다.
                        이 4주 플랜은 누구나 시작할 수 있도록 구성된 기초 + 실천 중심 플랜 입니다.
                    </p>

                    {dietPlans.map((plan, idx) => (
                        <div
                            key={idx}
                            style={{
                                marginBottom: "25px",
                                borderBottom: "1px solid #ddd",
                                paddingBottom: "15px",
                            }}
                        >
                            <h2>{plan.title}</h2>
                            {plan.img && (
                                <img
                                    src={plan.img}
                                    alt={plan.title}
                                    style={{
                                        width: "100%",
                                        maxHeight: "200px",
                                        objectFit: "cover",
                                        marginBottom: "10px",
                                        borderRadius: "8px",
                                    }}
                                />
                            )}
                            <pre className="whitespace-pre-wrap">{plan.desc}</pre>
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
                        체중보다 중요한 건 습관 입니다.
                        4주 플랜으로 당신의 다이어트 성공하기!
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

export default DietPostModal;
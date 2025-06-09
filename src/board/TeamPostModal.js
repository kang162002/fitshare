import React, { useState, useEffect } from "react";


const teamConditions = [
    {
        title: "1. 매너 좋고 열심히 하는 사람",
        img: "/images/boardimg/매너.webp",
        desc: "아무리 실력이 좋다고 해도 매너가 좋지 않으면 같이 팀하기 힘들어요. 실력 보다는 열정, 매너만 있다면 OK!",
    },
    {
        title: "2. 거주 위치(청주)",
        img: "/images/boardimg/청주.webp",
        desc: "저희는 청주에서 운동을 하기 때문에 거주지역이 멀다면 운동하기 힘드실거 같아서 청주 사시는 분들 환영!",
    },
    {
        title: "3. 매주 일요일 경기(변동 가능성 있음)",
        img: "/images/boardimg/일요일.webp",
        desc: "매주 일요일 오전, 오후에 경기를 하고 주간 상대 일정에 따라 변동 될 수도 있습니다!",
    },
    {
        title: "4. 월 회비 만원",
        img: "/images/boardimg/만원.webp",
        desc: "월 회비 만원으로 경기 진행할 때 발생하는 비용을 처리 합니다. 회비가 쌓이면 야유회 및 회식비로 사용합니다!",
    },
    ];

    function TeamPostModal({ closeModal }) {
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
        <div className="team-modal-fullscreen">
        <div className="team-modal-box">
            <div className="team-modal-header">
            <h1 className="team-modal-title">BOAT FC 팀원 모집 합니다!</h1>
            <button className="team-modal-close-button" onClick={closeModal}>
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
                작성자: <strong>BOATFC매니저</strong>
            </span>{" "}
            | <span>작성일: {new Date().toLocaleDateString()}</span> |{" "}
            <span>조회수: {views}</span> |{" "}
            <span style={{ cursor: "pointer" }} onClick={handleLike}>
                ❤️ {likes}
            </span>
            </div>

            <div className="team-modal-body post-style-body">
            <p style={{ marginBottom: "30px", fontSize: "1rem" }}>
                BOAT FC는 청주에서 일주일에 한 번 이상 운동하는 팀입니다. 자유로운
                분위기와 20대로 구성되어 있어 더 열정적이고 에너지 넘치는 팀 입니다!
                같이 운동할 팀원 구합니다!
            </p>

            {teamConditions.map((cond, idx) => (
                <div
                key={idx}
                style={{
                    marginBottom: "25px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "15px",
                }}
                >
                <h2>{cond.title}</h2>
                {cond.img && (
                    <img
                    src={cond.img}
                    alt={cond.title}
                    style={{
                        width: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        marginBottom: "10px",
                        borderRadius: "8px",
                    }}
                    />
                )}
                <p>{cond.desc}</p>
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
                <strong>💡 정리:</strong>
                <br />
                실력보다는 인성 매너가 더 중요하고! 20대로 구성 되어 있어 열정과 에너지가
                넘치고 친절한 사람들과 같이 운동해요!
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

export default TeamPostModal;
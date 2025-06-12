import { useState, useEffect } from "react";
import "./GymPostModal.css";

function PostModal({ closeModal, post }) {
    const [views, setViews] = useState(post.views - 1);
    const [likes, setLikes] = useState(post.likesCount);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");
    const [commentCnt, setCommentCnt] = useState(post.commentsCount);

    useEffect(() => {
        setViews((prev) => prev + 1);

        const savedComments = localStorage.getItem(post.id + "PostComment");
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
        setCommentCnt(commentCnt + 1);
        localStorage.setItem(post.id + "PostComment", JSON.stringify(newComments));
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
                        {post.content}
                    </p>

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

export default PostModal;
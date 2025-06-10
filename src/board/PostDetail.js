// PostDetail.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import allPosts from './Posts';

export default function PostDetail() {
    const { id } = useParams(); // URL에서 글 번호 받기
    const post = allPosts.all.find(p => p.id === Number(id));
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    const handleCommentSubmit = () => {
    if (commentText.trim() === "") return;
    const newComment = {
        id: Date.now(),
        text: commentText,
        writer:"익명",
        date:new Date().toLocaleDateString()
    };

    setComments([...comments, newComment]);
    setCommentText("");
    };

    return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
        <h2>{post.title}</h2>
        <p><strong>작성자:</strong> {post.writer}</p>
        <p><strong>날짜:</strong> {post.date}</p>
        <p><strong>종류:</strong> {post.type}</p>
        <p><strong>내용:</strong></p>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>{post.content}</div>

        <hr />
        <h3>댓글</h3>
        <ul>
            {comments.map(c => (
            <li key={c.id} style={{ marginBottom: '8px' }}><strong>{c.writer}</strong>
                ({c.date}): {c.text}
            </li>
            ))}
        </ul>

        <textarea
            rows="4"
            style={{ width: "100%", marginTop: "10px" }}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 입력하세요"
            onKeyDown={(e) => {
                if(e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleCommentSubmit();
                }
            }}
        />
        <br />
        <button onClick={handleCommentSubmit} style={{ marginTop: "8px" }}>댓글 작성</button>
        </div>
    );
    }
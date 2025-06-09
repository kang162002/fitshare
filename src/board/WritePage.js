import { useState } from "react";
import { useNavigate }  from "react-router";

export default function WritePage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("GYM");

    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    const handleAddComment = () => {
        if(commentInput.trim() === "") return;

        setComments([
            ...comments,{
                id:Date.now(),
                text:commentInput,
            },
        ]);
        setCommentInput("");
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    // 작성된 데이터를 서버에 보내는 코드가 이 자리에 들어감
    console.log("작성된 게시글:", {
        title,
        writer,
        content,
        type,
        date: new Date().toISOString().slice(0, 10),
        views: 0,
        comments,
    });

    // 작성 완료 후 게시판으로 이동
    navigate("/board");
    };

    return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h2>게시글 작성</h2>
        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
            <label>제목: </label><br />
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%" }}
            />
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label>작성자: </label><br />
            <input
            type="text"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
            required
            style={{ width: "100%" }}
            />
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label>종류: </label><br />
            <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="GYM">GYM</option>
            <option value="TIP">TIP</option>
            <option value="TEAM">TEAM</option>
            <option value="DIET">DIET</option>
            <option value="HT">HT</option>
            </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label>내용: </label><br />
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={8}
            style={{ width: "100%" }}
            />
        </div>

        

        <button type="submit" style={{ padding: "8px 16px" }}>등록</button>
        </form>
    </div>
    );
}
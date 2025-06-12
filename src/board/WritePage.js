import { useState } from "react";
import { useNavigate } from "react-router";
import allPosts from "./Posts";

export default function WritePage({ posts, setPosts }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("GYM");

    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    const [hovered, setHovered] = useState(false);



    const handleSubmit = () => {
        if (!title || !writer || !content) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        const newPost = {
            id: posts.length + 1,
            title: title,
            writer: writer,
            content: content,
            type: type,
            date: new Date().toISOString().slice(0, 10),
            views: 0,
            commentsCount: 0,
            likesCount: 0,
        };

        setPosts([...posts, newPost]);
        navigate("/Board_all");
    };

    return (
        <div style={{ width: '100vh', flex: '1', margin: "0 auto", alignContent: 'center' }}>
            <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                <h2>게시글 작성</h2>

                <div style={{ marginBottom: "10px" }}>
                    <label>제목: </label><br />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{ width: "100%", padding: '10px', margin: '8px', borderRadius: '17px' }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>작성자: </label><br />
                    <input
                        type="text"
                        value={writer}
                        onChange={(e) => setWriter(e.target.value)}
                        required
                        style={{ width: "100%", padding: '10px', margin: '8px', borderRadius: '17px' }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>종류: </label><br />
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        style={{ height: '30px', margin: '8px', borderRadius: '5px', padding: '5px', outline: '0 none' }}
                    >
                        <option
                            value="GYM"
                            style={{ backgroundColor: hovered ? 'lightgray' : 'white' }}
                        >GYM게시판</option>
                        <option value="TIP">팁공유게시판</option>
                        <option value="TEAM">운동모임게시판</option>
                        <option value="DIET">다이어트게시판</option>
                        <option value="HT">홈트레이닝게시판</option>
                    </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>내용: </label><br />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={6}
                        style={{ width: "100%", height: '190px', borderRadius: '10px', padding: '10px' }}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    style={{ padding: "8px 16px", background: "#333", color: "white", border: "none", borderRadius: "5px" }}
                >
                    등록
                </button>
            </div>
        </div>

    );
}
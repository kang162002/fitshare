import { useState } from "react";
import { POSTS_PER_PAGE } from './constants';
import { Navigate, useNavigate } from "react-router";
import allPosts from './Posts';





export default function Board_all() {
    const navigate = useNavigate();
            const [selectedBoard, setSelectedBoard] = useState("all");
            const [sortType, setSortType] = useState("id"); // 'id', 'views', 'date'
            const [currentPage, setCurrentPage] = useState(1);



    const filteredPosts = selectedBoard === "all"
        ? allPosts.all
        : allPosts.all.filter(post => {
            if (selectedBoard === "gym") return post.type === "GYM";
            if (selectedBoard === "tips") return post.type === "TIP";
            if (selectedBoard === "sports") return post.type === "TEAM";
            if (selectedBoard === "diet") return post.type === "DIET";
            if (selectedBoard === "ht") return post.type === "HT";
            return false;
        });

    const sortedPosts = [ ...filteredPosts ].sort((a, b) => {
        if (sortType === "views") return b.views - a.views;
        if (sortType === "date") return new Date(b.date) - new Date(a.date);
        return b.id - a.id;
    });



    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const paginatedPosts = sortedPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    const boardTitles = {
        all: "전체게시판",
        gym: "GYM게시판",
        tips: "팁공유게시판",
        sports: "운동모임게시판",
        diet: "다이어트게시판",
        ht: "홈트레이닝게시판"
    };

    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > totalPages) return;
        setCurrentPage(pageNum);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='board-body'>
            <div className='board-header' onClick={() => { setSelectedBoard("all"); setCurrentPage(1); }}>
                <h3 style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Board</h3>
            </div>

            <div className='board-nav'>
                <button onClick={() => setSelectedBoard("all")}>전체게시판</button>
                <button onClick={() => setSelectedBoard("gym")}>GYM게시판</button>
                <button onClick={() => setSelectedBoard("tips")}>팁공유게시판</button>
                <button onClick={() => setSelectedBoard("sports")}>운동모임게시판</button>
                <button onClick={() => setSelectedBoard("diet")}>다이어트게시판</button>
                <button onClick={() => setSelectedBoard("ht")}>홈트레이닝게시판</button>
            </div>

            <div className='board-outer'>
                <br />
                <h2>{boardTitles[ selectedBoard ]}</h2>

                <div style={{ marginBottom: '10px' }}>
                    <button onClick={() => { setSortType("views"); setCurrentPage(1); }} style={{ marginRight: '8px' }}>조회수 많은순</button>
                    <button onClick={() => { setSortType("date"); setCurrentPage(1); }}>최신순</button>
                </div>

                <table className='board-list-table'>
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>번호</th>
                            <th style={{ width: "35%" }}>제목</th>
                            <th style={{ width: "20%" }}>작성자</th>
                            <th style={{ width: "20%" }}>작성일</th>
                            <th style={{ width: "10%" }}>종류</th>
                            <th style={{ width: "10%" }}>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>※</td>
                            <td>공지사항</td>
                            <td>FITSHARE 운영자</td>
                            <td>-</td>
                            <td>-</td>
                            <td>98961</td>
                        </tr>
                        <tr>
                            <td>※</td>
                            <td>글 작성 가이드</td>
                            <td>FITSHARE 운영자</td>
                            <td>-</td>
                            <td>-</td>
                            <td>120000</td>
                        </tr>
                        {paginatedPosts.length === 0 && (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center' }}>게시글이 없습니다.</td>
                            </tr>
                        )}
                        {paginatedPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.writer}</td>
                                <td>{post.date}</td>
                                <td>{post.type}</td>
                                <td>{post.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 페이지네이션 */}
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{ cursor: currentPage === 1 ? 'default' : 'pointer' }}
                    >
                        이전
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            style={{
                                backgroundColor: currentPage === index + 1 ? '#666' : '#ccc',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                padding: '6px 12px',
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{ cursor: currentPage === totalPages ? 'default' : 'pointer' }}
                    >
                        다음
                    </button>
                </div>

                <button
                    onClick={() => Navigate("/write")}
                    style={{
                        marginTop: '16px',
                        padding: '10px 20px',
                        backgroundColor: '#888',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    글쓰기</button>
            </div>
        </div>
    );
}
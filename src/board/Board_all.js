import './Board_all.css';
import { useState } from "react";
import { POSTS_PER_PAGE } from './constants';
import { Navigate, useNavigate } from "react-router";
import allPosts from './Posts';







export default function Board_all() {
    const navigate = useNavigate();
            const [selectedBoard, setSelectedBoard] = useState("all");
            const [sortType, setSortType] = useState("id"); // 'id', 'views', 'date'
            const [currentPage, setCurrentPage] = useState(1);
            const [searchKeyword,setSearchKeyword] = useState("");
            const[appliedKeyword, setAppliedKeyword] = useState("");
            

    

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

    const searchedPosts = sortedPosts.filter(post =>
        post.title.toLowerCase().includes(appliedKeyword.toLowerCase()) ||
        post.writer.toLowerCase().includes(appliedKeyword.toLowerCase())
    );

    const totalPages = Math.ceil(searchedPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = searchedPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

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
    };

    const getPageNumbers = () => {
        const totalButtons = 5;
        const currentGroup = Math.floor((currentPage -1) / totalButtons);
        let start = currentGroup * totalButtons +1;
        let end = Math.min(start + totalButtons -1, totalPages);
        

        
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <div className='board-body'>
            <div className='board-header' onClick={() => { setSelectedBoard("all"); setCurrentPage(1); }}>
                <h3 style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Board</h3>
            </div>

            <div className='board-nav'>
                <button onClick={() => setSelectedBoard("all")}>ALL</button>
                <button onClick={() => setSelectedBoard("gym")}>GYM</button>
                <button onClick={() => setSelectedBoard("tips")}>TIP</button>
                <button onClick={() => setSelectedBoard("sports")}>TEAM</button>
                <button onClick={() => setSelectedBoard("diet")}>DIET</button>
                <button onClick={() => setSelectedBoard("ht")}>HT</button>
            </div>

            <div className='board-outer'>
                <br />
                <h2>{boardTitles[ selectedBoard ]}</h2>
                
        <div className='board-search' style={{margin:'20px 0', textAlign:'right'}}>
            <input
                type='text'
                placeholder='제목 또는 작성자 검색'
                value={searchKeyword}
                onChange={(e)=> setSearchKeyword(e.target.value)}
                onKeyDown={(e) =>{
                    if(e.key === 'Enter') {
                        setAppliedKeyword(searchKeyword);
                        setSearchKeyword("");
                        setCurrentPage(1);
                    }
                }}
                
                style={{
                    padding:'8px 12px',
                    border:'1px solid #ccc',
                    borderRadius: '8px',
                    width:'200px',
                    marginRight:'8px'
                }}
                />
                    <button className='board-button' onClick={()=>{
                        setAppliedKeyword(searchKeyword);
                        setSearchKeyword("");
                        setCurrentPage(1);
                    }}
                        
                        >
                        검색
                    </button>
                </div>

                <div className='board-search' style={ {marginBottom: '16px', textAlign:'right'} }>
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
                <div className="board-page">

                    <button onClick={()=> handlePageChange(1)} disabled={currentPage ===1}>처음</button>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>이전</button>
                    
                    {getPageNumbers().map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={currentPage === pageNum ? 'active-page' : ''}
                        >
                            {pageNum}
                        </button>
                    ))}

                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>다음</button>
                    <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>마지막</button>

                </div>

                <button
                    onClick={() => navigate("/write")}
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
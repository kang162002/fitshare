import { useState } from "react";
import { POSTS_PER_PAGE } from './constants';

const allPosts = {
    all: [
        { id: 1, title: "GYM 추천 드려요~", writer: "PERSONAL TRAINER", date: "2025.05.30", type: "GYM", views: 3250 },
        { id: 2, title: "꿀팁 대방출!", writer: "이승권(물리치료사)", date: "2025.05.30", type: "TIP", views: 8632 },
        { id: 3, title: "축구팀 회원 모집 합니다", writer: "BoatFC(청주)", date: "2025.05.29", type: "TEAM", views: 8500 },
        { id: 4, title: "다이어트 후기(100KG → 53KG)", writer: "다이어트요정", date: "2025.05.29", type: "DIET", views: 2224 },
        { id: 5, title: "홈트 장비 추천!", writer: "홈트레이닝마스터", date: "2025.05.28", type: "HT", views: 33326 },
        { id: 6, title: "GYM 가슴 운동 루틴", writer: "이승권(헬스트레이너)", date: "2025.05.27", type: "GYM", views: 65653 },
        { id: 7, title: "다이어트 유산소 운동 추천", writer: "유산소여왕", date: "2025.05.26", type: "DIET", views: 523 },
        { id: 8, title: "다이어트 근력 운동 추천", writer: "유산소여왕", date: "2025.05.26", type: "DIET", views: 321 },
        { id: 9, title: "축구 입문자를 위한 팁", writer: "손흥민(축구선수)", date: "2025.05.25", type: "TIP", views: 2632 },
        { id: 10, title: "사회인야구팀 회원 모집 합니다", writer: "EAGLES(대전)", date: "2025.05.24", type: "TEAM", views: 10200 },
        { id: 11, title: "쉽게 하는 홈트레이닝", writer: "홈트레이닝입문자", date: "2025.05.22", type: "HT", views: 8523 },
        { id: 12, title: "다이어트를 위한 홈트레이닝", writer: "HT다이어트", date: "2025.05.23", type: "HT", views: 33322 },
        { id: 13, title: "GYM 어깨 운동 루틴", writer: "이승권(헬스트레이너)", date: "2025.05.15", type: "GYM", views: 5001 },
        { id: 14, title: "GYM 등 운동 루틴", writer: "이승권(헬스트레이너)", date: "2025.04.15", type: "GYM", views: 96312 },
        { id: 15, title: "GYM 하체 운동 루틴", writer: "이승권(헬스트레이너)", date: "2025.03.23", type: "GYM", views: 22452 },
        { id: 16, title: "야구 입문자를 위한 팁", writer: "박찬호(야구선수)", date: "2024.12.30", type: "TIP", views: 68963 },
        { id: 17, title: "농구 입문자를 위한 팁", writer: "마이클 조던(농구선수)", date: "2023.09.27", type: "TIP", views: 98963 },
        { id: 18, title: "배구 입문자를 위한 팁", writer: "김연경(배구선수)", date: "2024.03.20", type: "TIP", views: 66532 },
        { id: 19, title: "족구팀 회원 모집 합니다", writer: "JOKBAL(마산)", date: "2023.05.11", type: "TEAM", views: 3039 },
        { id: 20, title: "볼링팀 회원 모집 합니다", writer: "BALLBALL(천안)", date: "2025.01.11", type: "TEAM", views: 693 },
    ],
        gym: [],
        tips: [],
        sports: [],
        diet: [],
        ht: []
    };

        export default function Board_all() {
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

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortType === "views") return b.views - a.views;
        if (sortType === "date") return new Date(b.date) - new Date(a.date);
        return b.id - a.id;
    });

    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
    
    const paginatedPosts = sortedPosts.slice((currentPage -1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

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
        <div className='App'>
        <div className='header' onClick={() => {setSelectedBoard("all"); setCurrentPage(1);}}>
            <h3 style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Board</h3>
        </div>

        <div className='nav'>
            <button onClick={() => setSelectedBoard("all")}>전체게시판</button>
            <button onClick={() => setSelectedBoard("gym")}>GYM게시판</button>
            <button onClick={() => setSelectedBoard("tips")}>팁공유게시판</button>
            <button onClick={() => setSelectedBoard("sports")}>운동모임게시판</button>
            <button onClick={() => setSelectedBoard("diet")}>다이어트게시판</button>
            <button onClick={() => setSelectedBoard("ht")}>홈트레이닝게시판</button>
        </div>

        <div className='outer'>
            <br />
            <h2>{boardTitles[selectedBoard]}</h2>

        <div style={{ marginBottom: '10px' }}>
            <button onClick={()=> {setSortType("views"); setCurrentPage(1);}} style={{ marginRight: '8px' }}>조회수 많은순</button>
            <button onClick={() => {setSortType("date"); setCurrentPage(1);}}>최신순</button>
        </div>

            <table className='list-table'>
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
import './Board_all.css';
import { useEffect, useState } from "react";
import { POSTS_PER_PAGE } from './constants';
import { useNavigate } from "react-router";
import allPosts from './Posts';
import GymPostModal from './GymPostModal';
import TipPostModal from './TipPostModal';
import TeamPostModal from './TeamPostModal';
import DietPostModal from './DietPostModal';
import HtPostModal from './HtPostModal';
import { useLocation } from 'react-router';
import PostModal from './PostModal';







export default function Board_all({posts, setPosts}) {
    const navigate = useNavigate();
    const [ selectedBoard, setSelectedBoard ] = useState("all");
    const [ sortType, setSortType ] = useState("id"); // 'id', 'views', 'date'
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ searchKeyword, setSearchKeyword ] = useState("");
    const [ appliedKeyword, setAppliedKeyword ] = useState("");
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ selectedPost, setSelectedPost ] = useState(null);
    const [ showTipModal, setShowTipModal ] = useState(false);
    const [ showTeamModal, setShowTeamModal ] = useState(false);
    const [ showDietModal, setShowDietModal ] = useState(false);
    const [ showHtModal, setShowHtModal ] = useState(false);
    const [ showPostModal, setShowPostModal ] = useState(false);

    const location = useLocation();
    // const [posts, setPosts] = useState(allPosts.all);

        useEffect(() => {
            if (location.state?.newPost) {
                setPosts(prev => [location.state.newPost, ...prev]);
                
                window.history.replaceState({}, document.title)
                }
        }, [location.state]);




    const filteredPosts = selectedBoard === "all"
        ? posts
        : posts.filter(post => {
            if (selectedBoard === "gym") return post.type === "GYM";
            if (selectedBoard === "tips") return post.type === "TIP";
            if (selectedBoard === "sports") return post.type === "TEAM";
            if (selectedBoard === "diet") return post.type === "DIET";
            if (selectedBoard === "ht") return post.type === "HT";
            return true; 
            });
            
            
        



    const sortedPosts = [ ...filteredPosts ].sort((a, b) => {
        if (sortType === "views") return b.views - a.views;
        if (sortType === "date") return new Date(b.date) - new Date(a.date);
        if (sortType === "comments") return (b.commentsCount || 0) - (a.commentsCount || 0);
        if (sortType === "likes") return (b.likesCount || 0) - (a.likesCount || 0);
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
        const currentGroup = Math.floor((currentPage - 1) / totalButtons);
        let start = currentGroup * totalButtons + 1;
        let end = Math.min(start + totalButtons - 1, totalPages);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <div className='board-body'>
            <div className='board-header' onClick={() => { setSelectedBoard("all"); setCurrentPage(1); }}>
                <h3 style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Board</h3>
            </div>

            <div className='board-nav'>
                <button onClick={() => setSelectedBoard("all")}>ALL게시판</button>
                <button onClick={() => setSelectedBoard("gym")}>GYM게시판</button>
                <button onClick={() => setSelectedBoard("tips")}>팁공유게시판</button>
                <button onClick={() => setSelectedBoard("sports")}>운동모임게시판</button>
                <button onClick={() => setSelectedBoard("diet")}>다이어트게시판</button>
                <button onClick={() => setSelectedBoard("ht")}>홈트레이닝게시판</button>
            </div>

            <div className='board-outer'>
                <br />
                <h2>{boardTitles[ selectedBoard ]}</h2>

                <div className='board-search' style={{ margin: '20px 0', textAlign: 'left' }}>
                    <div>
                        <input
                            type='text'
                            placeholder='제목 또는 작성자 검색'
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setAppliedKeyword(searchKeyword);
                                    setSearchKeyword("");
                                    setCurrentPage(1);
                                }
                            }}

                            style={{
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                width: '250px',
                                marginRight: '8px'
                            }}
                        />
                        <button className='board-button' onClick={() => {
                            setAppliedKeyword(searchKeyword);
                            setSearchKeyword("");
                            setCurrentPage(1);
                        }}

                        >
                            검색
                        </button>

                    </div>
                    {/* </div>

                <div className='board-search' style={ {marginBottom: '16px', textAlign:'right'} }> */}
                    <div>
                        <button className='sort-button' onClick={() => { setSortType("views"); setCurrentPage(1); }} >조회수 많은순</button>
                        <button className='sort-button' onClick={() => { setSortType("date"); setCurrentPage(1); }} >최신순</button>
                        <button className='sort-button' onClick={() => { setSortType("comments"); setCurrentPage(1); }} >댓글 많은순</button>
                        <button className='sort-button' onClick={() => { setSortType("likes"); setCurrentPage(1); }} >추천 많은순</button>
                    </div>
                </div>


                <table className='board-list-table'>
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>번호</th>
                            <th style={{ width: "20%" }}>제목</th>
                            <th style={{ width: "20%" }}>작성자</th>
                            <th style={{ width: "10%" }}>작성일</th>
                            <th style={{ width: "10%" }}>종류</th>
                            <th style={{ width: "10%" }}>조회수</th>
                            <th style={{ width: "10%" }}>댓글</th>
                            <th style={{ width: "10%" }}>추천</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='board-font-red' style={{color:"red"}}>
                            <td>※</td>
                            <td className='tr-cursor'>공지사항</td>
                            <td className='tr-cursor'>FITSHARE 운영자</td>
                            <td>-</td>
                            <td>-</td>
                            <td>98961</td>
                            <td>99999</td>
                            <td>99999</td>
                        </tr>
                        <tr className='board-font-red' style={{color:"red"}} >
                            <td>※</td>
                            <td className='tr-cursor'>글 작성 가이드</td>
                            <td className='tr-cursor'>FITSHARE 운영자</td>
                            <td>-</td>
                            <td>-</td>
                            <td>120000</td>
                            <td>99999</td>
                            <td>99999</td>
                        </tr>
                        {paginatedPosts.length === 0 && (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center' }}>게시글이 없습니다.</td>
                            </tr>
                        )}
                        {paginatedPosts.map((post) => (
                            <tr key={post.id} onClick={() => {
                                if (post.id === 66) {
                                    post.views+=1;
                                    setSelectedPost(post);
                                    setModalOpen(true);
                                } else if (post.id === 78) {
                                    setShowTipModal(true);
                                } else if (post.id === 3) {
                                    setShowTeamModal(true);
                                } else if (post.id === 171) {
                                    setShowDietModal(true);
                                } else if (post.id === 5) {
                                    setShowHtModal(true);
                                } else {
                                    setSelectedPost(post);
                                    setShowPostModal(true);
                                }

                                


                            }}
                              

                            >
                                <td>{post.id}</td>
                                <td className='tr-cursor'>{post.title}</td>
                                <td className='tr-cursor'>{post.writer}</td>
                                <td>{post.date}</td>
                                <td>{post.type}</td>
                                <td>{post.views}</td>
                                <td>{post.commentsCount || 0}</td>
                                <td>{post.likesCount || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                    {modalOpen && selectedPost && (
                        <GymPostModal
                            post={selectedPost}
                            closeModal={() => {
                                setModalOpen(false);
                                setSelectedPost(null);
                            }}
                            posts={posts}
                        />
                    )}

                    {showTipModal && (
                        <TipPostModal closeModal={() => setShowTipModal(false)} posts={posts}/>
                    )}

                    {showTeamModal && (
                        <TeamPostModal closeModal={() => setShowTeamModal(false)} />
                    )}

                    {showDietModal && (
                        <DietPostModal closeModal={() => setShowDietModal(false)} />
                    )}

                    {showHtModal && (
                        <HtPostModal closeModal={() => setShowHtModal(false)} />
                    )}

                    {showPostModal && (
                        <PostModal closeModal={()=> setShowPostModal(false)} post = {selectedPost}/>
                    )}
                </table>



                {/* 페이지네이션 */}
                <div className="board-page">

                    <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>처음</button>
                    <button onClick={() => handlePageChange(Math.max(1, currentPage - 5))} disabled={currentPage <= 5}>이전</button>

                    {getPageNumbers().map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={currentPage === pageNum ? 'active-page' : ''}
                        >
                            {pageNum}
                        </button>
                    ))}

                    <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 5))} disabled={currentPage === totalPages}>다음</button>
                    <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>마지막</button>

                </div>

                <button
                    onClick={() => navigate("/writePage")}
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

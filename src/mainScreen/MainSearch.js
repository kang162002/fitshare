import './MainSearch.css';

import { useEffect, useState } from "react";
import workoutData from "../workout/data/workoutData";
import aeroData from "../workout/data/aeroData";
import stretchData from "../workout/data/stretchData";
import allPosts from "../board/Posts";
import { useNavigate, useSearchParams } from "react-router";
import WorkoutModal from '../workout/components/WorkoutModal';


function MainSearch( {curAcct, setCurAcct, accountData, setAccountData }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [resultsGym, setResultsGym] = useState([]);
  const [resultsAero, setResultsAero] = useState([]);
  const [resultsStretch, setResultsStretch] = useState([]);
  const [resultsBoard, setResultsBoard] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const [selectedWorkout, setSelectedWorkout] = useState(null); // 선택된 운동
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부


  const handleWorkoutClick = (item) => {
    setSelectedWorkout(item);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const currentQuery = searchParams.get("q")?.trim().toLowerCase() || "";

    if (!currentQuery) {
      setResultsGym([]);
      setResultsAero([]);
      setResultsStretch([]);
      setResultsBoard([]);
      setIsSearched(false);
      return;
    }

    const filteredGym = workoutData.filter((item) =>
      (item.title + item.content + item.tool + item.area)
        .toLowerCase()
        .includes(currentQuery)
    );

    const filteredAero = aeroData.filter((item) =>
      (item.title + item.content + item.tool + item.area)
        .toLowerCase()
        .includes(currentQuery)
    );

    const filteredStretch = stretchData.filter((item) =>
      (item.title + item.content + item.tool + item.area)
        .toLowerCase()
        .includes(currentQuery)
    );

    const filteredBoard = allPosts.all.filter((item) =>
      (item.title + item.writer + item.type)
        .toLowerCase()
        .includes(currentQuery)
    );

    // 항상 새로 덮어쓰기
    setResultsGym(filteredGym);
    setResultsAero(filteredAero);
    setResultsStretch(filteredStretch);
    setResultsBoard(filteredBoard);
    setIsSearched(true);
  }, [searchParams]); // URL 변경 감지

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      // 검색어를 URL로 이동
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
    setQuery('');
  };

  return (
    <div className="mainSearch-wrapper">
      <h1 className="mainSearch-title">운동 검색</h1>

      <form onSubmit={handleSearchSubmit} className="mainSearch-form">
        <input
          type="text"
          placeholder="운동명, 도구, 부위 등 입력"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mainSearch-input"
        />
        <button type="submit" className="mainSearch-button">
          검색
        </button>
      </form>

      <hr className="mainSearch-divider" />

      <div className="mainSearch-results">
        {isSearched && <h1 className="mainSearch-section-title">운동 검색 결과</h1>}

        {/* 근력 운동 */}
        {isSearched && <h2 className="mainSearch-subtitle">근력 운동</h2>}
        {resultsGym.length > 0 ? (
          <ul className="mainSearch-list">
            {resultsGym.map((item) => (
              <li key={`${item.id}-${item.title}`} className="mainSearch-item" onClick={() => {
                handleWorkoutClick(item)
              }}>
                <strong>{item.title}</strong> ({item.tool} / {item.area})
              </li>
            ))}
          </ul>
        ) : (
          isSearched && <p className="mainSearch-empty">검색 결과가 없습니다.</p>
        )}

        {/* 유산소 운동 */}
        {isSearched && <h2 className="mainSearch-subtitle">유산소 운동</h2>}
        {resultsAero.length > 0 ? (
          <ul className="mainSearch-list">
            {resultsAero.map((item) => (
              <li key={`${item.id}-${item.title}`} className="mainSearch-item" onClick={() => {
                handleWorkoutClick(item)
              }}>
                <strong>{item.title}</strong> ({item.tool} / {item.area})
              </li>
            ))}
          </ul>
        ) : (
          isSearched && <p className="mainSearch-empty">검색 결과가 없습니다.</p>
        )}

        {/* 스트레칭 */}
        {isSearched && <h2 className="mainSearch-subtitle">스트레칭</h2>}
        {resultsStretch.length > 0 ? (
          <ul className="mainSearch-list">
            {resultsStretch.map((item) => (
              <li key={`${item.id}-${item.title}`} className="mainSearch-item" onClick={() => {
                handleWorkoutClick(item)
              }}>
                <strong>{item.title}</strong> ({item.tool} / {item.area.join(', ')})
              </li>
            ))}
          </ul>
        ) : (
          isSearched && <p className="mainSearch-empty">검색 결과가 없습니다.</p>
        )}

        {/* 게시판 */}
        {isSearched && <h1 className="mainSearch-section-title">게시판 검색 결과</h1>}
        {isSearched && <h2 className="mainSearch-subtitle">모든 게시판</h2>}
        {resultsBoard.length > 0 ? (
          <ul className="mainSearch-list">
            {resultsBoard.map((item) => (
              <li key={`${item.id}-${item.title}`} className="mainSearch-item">
                <strong>{item.title}</strong> ({item.writer} / {item.date})
              </li>
            ))}
          </ul>
        ) : (
          isSearched && <p className="mainSearch-empty">검색 결과가 없습니다.</p>
        )}
      </div>
      {isModalOpen && selectedWorkout && (
        <WorkoutModal
          closeModal={() => {
            setIsModalOpen(false);
            setSelectedWorkout(null);
          }}
          workoutData={selectedWorkout}
          curAcct={curAcct} setCurAcct={setCurAcct} accountData={accountData} setAccountData={setAccountData}
        />
      )}
    </div>
  );

}

export default MainSearch;
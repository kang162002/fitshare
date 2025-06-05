// import { useState } from "react";

// function MainSearch() {

//     const [query, setQuery] = useState("");

//     const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log("검색어:", query);
//     // TODO: 검색 실행 로직 추가
//     };

//     return (
//         <>
//             <form
//                 onSubmit={handleSearchSubmit}
//                 className="mainScreen-search-wrapper"
//             >
//                 <div className="mainScreen-search-container">
//                     <input
//                         type="text"
//                         placeholder="검색하세요.."
//                         spellCheck="false"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         className="mainScreen-search"
//                     />
//                     <button type="submit" className="mainScreen-search-button">
//                         검색
//                     </button>
//                 </div>
//             </form>

//             <hr/>

//             <div>
//                 <h1>운동</h1>
//                 <br/>

//             </div>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import workoutData from "../workout/data/workoutData";
import aeroData from "../workout/data/aeroData";
import stretchData from "../workout/data/stretchData";
import allPosts from "../board/Posts";
import { useNavigate, useSearchParams } from "react-router";


function MainSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);
  const [results3, setResults3] = useState([]);
  const [results4, setResults4] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const currentQuery = searchParams.get("q")?.trim().toLowerCase() || "";

    if (!currentQuery) {
      setResults1([]);
      setResults2([]);
      setResults3([]);
      setResults4([]);
      setIsSearched(false);
      return;
    }

    const filtered1 = workoutData.filter((item) =>
      (item.title + item.content + item.tool + item.area)
        .toLowerCase()
        .includes(currentQuery)
    );

    const filtered2 = aeroData.filter((item) =>
      (item.title + item.content + item.tool + item.area)
        .toLowerCase()
        .includes(currentQuery)
    );

    const filtered3 = stretchData.filter((item) =>
      (item.title + item.content + item.tool + item.area)
        .toLowerCase()
        .includes(currentQuery)
    );

    const filtered4 = allPosts.all.filter((item) =>
      (item.title + item.writer + item.type)
        .toLowerCase()
        .includes(currentQuery)
    );

    // 항상 새로 덮어쓰기
    setResults1(filtered1);
    setResults2(filtered2);
    setResults3(filtered3);
    setResults4(filtered4);
    setIsSearched(true);
  }, [searchParams]); // URL 변경 감지

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      // 검색어를 URL로 이동
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div>
      <h1>운동 검색</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="운동명, 도구, 부위 등 입력"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
      <hr/>


      <div>
        {isSearched &&<h1> 운동 검색 결과 </h1>}
        {isSearched &&<h2> 근력 운동 </h2>}
        {results1.length > 0 ? (
            <>
                <ul>
                    {results1.map((item) => (
                    <li key={`${item.id}-${item.title}`}>
                        <strong>{item.title}</strong> ({item.tool} / {item.area})
                    </li>
                    ))}
                </ul>
            </>
          
        ) : (
          isSearched && <p>검색 결과가 없습니다.</p>
        )}

        {isSearched &&<h2> 유산소 운동 </h2>}
        {results2.length > 0 ? (
            <>
                <ul>
                    {results1.map((item) => (
                    <li key={`${item.id}-${item.title}`}>
                        <strong>{item.title}</strong> ({item.tool} / {item.area})
                    </li>
                    ))}
                </ul>
            </>
          
        ) : (
          isSearched && <p>검색 결과가 없습니다.</p>
        )}

        {isSearched &&<h2> 스트레칭 </h2>}
        {results3.length > 0 ? (
            <>
                <ul>
                    {results3.map((item) => (
                    <li key={`${item.id}-${item.title}`}>
                        <strong>{item.title}</strong> ({item.tool} / {item.area.join(', ')})
                    </li>
                    ))}
                </ul>
            </>
          
        ) : (
          isSearched && <p>검색 결과가 없습니다.</p>
        )}

        {isSearched &&<h1> 게시판 검색 결과 </h1>}
        {isSearched &&<h2> 모든 게시판 </h2>}
        {results4.length > 0 ? (
            <>
                <ul>
                    {results4.map((item) => (
                    <li key={`${item.id}-${item.title}`}>
                        <strong>{item.title}</strong> ({item.writer} / {item.date})
                    </li>
                    ))}
                </ul>
            </>
          
        ) : (
          isSearched && <p>검색 결과가 없습니다.</p>
        )}


      </div>
    </div>
  );
}

export default MainSearch;
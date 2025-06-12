import "./MainEffect.css";

// 마우스 클릭시 동그라미 효과(메인화면에서만)
function MainEffect({ x, y, id }) {


  return (
    <span
      key={id}
      className="ripple"
      style={{
        left: `${x - 5}px`,
        top: `${y - 5}px`,
      }}
    />
  );
}
export default MainEffect;

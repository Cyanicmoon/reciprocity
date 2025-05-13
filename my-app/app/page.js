// import Comment from "../../component/Comment";
import Send from "./component/calc";

export default function Home() {
  return (
    <div>
      <header className="header-container">
        <h1>상반칙불궤 계산기</h1>
        <p>By Lati</p>
      </header>
      <Send></Send>
    </div>
  );
}

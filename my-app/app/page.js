import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header className="header-container">
        <h1>상반칙불궤 계산기</h1>
        <p>By Lati</p>
      </header>
      <div className="main-container">
        <div className="main-left-container">
          <select className="select-film">
            <option value="" selected disabled hidden>필름 종류</option>
            <option value="portra">Kodak Portra 160/400</option>
          </select>
          <select className="select-time">
            <option value="" selected hidden disabled>노출 시간</option>
            <option value="1">1/8000s</option>
            <option value="2">1/4000s</option>
            <option value="3">1/2000s</option>
            <option value="4">1/1000s</option>
            <option value="5">1/500s</option>
            <option value="6">1/250s</option>
            <option value="7">1/125s</option>
            <option value="8">1/60s</option>
            <option value="9">1/30s</option>
            <option value="10">1/15s</option>
            <option value="11">1/8s</option>
            <option value="12">1/4s</option>
            <option value="13">1/2s</option>
            <option value="14">1s</option>
            <option value="15">2s</option>
            <option value="16">4s</option>
            <option value="17">8s</option>
            <option value="18">15s</option>
            <option value="19">30s</option>
            <option value="20">1mn</option>
            <option value="21">2mn</option>
            <option value="22">4mn</option>
            <option value="23">8mn</option>
            <option value="24">16mn</option>
            <option value="25">32mn</option>
            <option value="26">1h4mn</option>
            <option value="27">2h8mn</option>
            <option value="28">4h16mn</option>
            <option value="29">8h32mn</option>
            <option value="30">17h4mn</option>
          </select>
          <select class="select-aperture">
            <option value="" disabled hidden selected>조리개 값</option>
            <option value="2">f/1.4</option>
            <option value="3">f/2</option>
            <option value="4">f/2.8</option>
            <option value="5">f/4</option>
            <option value="6">f/5.6</option>
            <option value="7">f/8</option>
            <option value="8">f/11</option>
            <option value="9">f/16</option>
            <option value="10">f/22</option>
            <option value="11">f/32</option>
          </select>
          <div className="left-temp">
            <button>계산 ➔</button>
          </div>
        </div>
        <div className="main-right-container">
          <h2>계산 결과</h2>
        </div>
      </div>
    </div>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import styled from 'styled-components/native';
import { useState } from 'react';
import "./css/App.css";

export default function App() {
  const [start, setStart] = useState([0,0,0,0,0,0]);
  const [end, setEnd] = useState([0,0,0,0,0,0]);

  const WorkStart = () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let day = today.getDay();  // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    setStart([year,month,day,hours,minutes,seconds]);
  }

  const WorkEnd = () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let day = today.getDay();  // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    setEnd([year,month,day,hours,minutes,seconds]);
  }

  return (
    <div className="Entire">
      <div className ="Section">
        <button className="Button"
        onClick={WorkStart}>근무시작</button>
        <span className="Text">{`📆${start[0]} / ${start[1]} / ${start[2]} ⌚${start[3]} : ${start[4]} : ${start[5]}`}</span>
      </div>
      <div className ="Section">
        <button className="Button"
        onClick={WorkEnd}>근무종료</button>
        <span className="Text">{`📆${end[0]} / ${end[1]} / ${end[2]} ⌚${end[3]} : ${end[4]} : ${end[5]}`}</span>
      </div>
    </div>
  );
}



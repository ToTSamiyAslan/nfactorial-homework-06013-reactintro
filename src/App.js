import { useEffect, useState } from "react";
import first from "./photo/first.jfif";
import second from "./photo/second.jpg";
import third from "./photo/third.jfif";
import fourth from "./photo/fourth.jfif";
import fifth from "./photo/fifth.jfif";
import "./App.css"
import {format, getMinutes, getHours} from 'date-fns'

function App() {
  const date = new Date();
  const formattedDate = format(date, "dd.MM.yyyy");
  let hours = (getHours(date) < 10) ? `0${getHours(date)}` : getHours(date);
  let minutes = (getMinutes(date) < 10) ? `0${getMinutes(date)}` : getMinutes(date);
  const[ctime, setTime] = useState(`${hours}:${minutes}`);
  let checker = true;
  useEffect(() => {
    setInterval(() => {
      const nd = new Date();
      hours = (getHours(nd) < 10) ? `0${getHours(nd)}` : getHours(nd);
      minutes = (getMinutes(nd) < 10) ? `0${getMinutes(nd)}` : getMinutes(nd);
      if(checker){
        setTime(`${hours}:${minutes}`);
      }else{
        setTime(`${hours} ${minutes}`);
      }
      checker = !checker;
    }, 1000);
  }, [])
  return (
    <>
    <div className="date-logo">
    <h3>{formattedDate} {ctime}</h3>
    </div>
    <div className="background">

      <div className="photo">
      <img src = {first} className ="image" />
      <span>HEY</span>
      </div>

      <div className="photo">
      <img src = {second} className ="image" />
      <span>LET'S</span>
      </div>

      <div className="photo">
      <img src = {third} className ="image" />
      <span>GIVE</span>
      </div>

      <div className="photo">
      <img src = {fourth} className ="image" />
      <span>ALL</span>
      </div>
      
      <div className="photo" >
      <img src = {fifth} className ="image" />
      <span id = "last">YOU CAN</span>
      </div>
    </div>
    </>
  );
}

export default App;

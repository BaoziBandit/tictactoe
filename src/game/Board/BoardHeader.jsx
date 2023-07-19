import style from "./BoardHeader.module.css";

import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { Eraser, Restart } from "../../assets/Icons";

const BoardHeader = (props) => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>{props.title}</h1>
      <button className={`${style.button} ${style.eraser}`}onClick={props.onClear}>
        <Eraser/>
      </button>
      <button className={`${style.button} ${style.restart}`} onClick={props.onReset}>
        <Restart/>
      </button>
      <ScoreBoard score={props.score} />
    </div>
  );
};

export default BoardHeader;

import style from './BoardHeader.module.css';

import ScoreBoard from '../ScoreBoard/ScoreBoard';

const BoardHeader = props => {
  return <div className={style.header}>
    <h1 className={style.title}>{props.title}</h1>
    <ScoreBoard score={props.score}/>
  </div>;
}

export default BoardHeader;
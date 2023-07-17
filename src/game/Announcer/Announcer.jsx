import style from './Announcer.module.css';

const Announcer = props => {
  return <div className={style.announcer}>
    <hr/>
    <h1>{`Player ${props.player}${props.gameOver ?' WINS!' :  "'s turn"}`}</h1>
    {props.gameOver && <>
      <button className={style['play-again']} onClick={props.playAgain}>Play Again</button>
      <button className={style.reset} onClick={props.reset}>Reset</button>
    </>}
  </div>
}

export default Announcer;
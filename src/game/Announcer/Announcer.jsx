import style from "./Announcer.module.css";

const Announcer = (props) => {
  return (
    <div className={style.announcer}>
      <hr />
      <>
        { !props.isDraw &&
          <h1>{`Player ${props.player}${
            props.gameOver ? " WINS!" : "'s turn"
          }`}</h1>
        }
        {props.isDraw && <h1>DRAW!</h1>}
        {(props.gameOver || props.isDraw) &&
          <>
            <button className={style["play-again"]} onClick={props.playAgain}>
              Play Again
            </button>
            <button className={style.reset} onClick={props.reset}>
              Reset
            </button>
          </>
        }
      </>
    </div>
  );
};

export default Announcer;

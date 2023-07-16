import style from "./ScoreBoard.module.css";

const ScoreBoard = (props) => {
  return (
    <table className={style.scoreboard}>
      <thead>
          <tr className={style.headers}>
            <th className={style.player1}>P1</th>
            <th></th>
            <th className={style.player2}>P2</th>
          </tr>
        </thead>
      <tbody>
        <tr className={style.scores}>
          <td className={style.player1}>{props.score[0]}</td>
          <td>/</td>
          <td className={style.player2}>{props.score[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScoreBoard;

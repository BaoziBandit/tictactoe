import { useState, useEffect } from 'react'
import './App.css'
import Board from './game/Board/Board'
import BoardHeader from './game/Board/BoardHeader'
import Grid from './game/Board/Grid/Grid'

const SCORE_DEFAULT = [0,0]
const STARTING_DATA = [
  [{player: undefined, symbol: undefined},{player: undefined, symbol: undefined},{player: undefined, symbol: undefined}],
  [{player: undefined, symbol: undefined},{player: undefined, symbol: undefined},{player: undefined, symbol: undefined}],
  [{player: undefined, symbol: undefined},{player: undefined, symbol: undefined},{player: undefined, symbol: undefined}]
]

const App = () => {
  const [score, setScore] = useState(SCORE_DEFAULT);
  const [game, setGame] = useState(STARTING_DATA);
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer] = useState(0);
  const PLAYER_SYMBOL = ['X', 'O'];

  useEffect(() => {
    console.log('FINISH GAME VALIDATION');
  }, [game]);

  const clickHandler = (row, box) => {
    setGame(prev => {
      prev[row][box] = {player: player, symbol: PLAYER_SYMBOL[player]};
      return prev;
    });
    setPlayer(prev => prev === 0 ? 1 : 0);
  };

  return (
    <Board>
      <BoardHeader title='Tic Tac Toe' score={score}/>
      <Grid data={game} onClick={clickHandler}/>
    </Board>
  )
}

export default App

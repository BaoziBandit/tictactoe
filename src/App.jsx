import { useState } from 'react'
import './App.css'
import Board from './game/Board/Board'
import BoardHeader from './game/Board/BoardHeader'
import Grid from './game/Board/Grid/Grid'

const SCORE_DEFAULT = [0,0]

const App = () => {
  const [score, setScore] = useState(SCORE_DEFAULT);

  return (
    <Board>
      <BoardHeader title='Tic Tac Toe' score={score}/>
      <Grid/>
    </Board>
  )
}

export default App

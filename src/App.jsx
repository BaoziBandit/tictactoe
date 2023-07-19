import "./App.css";

import { useState } from "react";
import Announcer from "./game/Announcer/Announcer";
import Board from "./game/Board/Board";
import BoardHeader from "./game/Board/BoardHeader";
import Grid from "./game/Board/Grid/Grid";

const App = () => {
  const PLAYERS = [
    { player: 1, symbol: "X" },
    { player: 2, symbol: "O" }
  ];
  const BOARD_START = [
    [
      { player: 0, symbol: '' },
      { player: 0, symbol: '' },
      { player: 0, symbol: '' },
    ],
    [
      { player: 0, symbol: '' },
      { player: 0, symbol: '' },
      { player: 0, symbol: '' },
    ],
    [
      { player: 0, symbol: '' },
      { player: 0, symbol: '' },
      { player: 0, symbol: '' },
    ],
  ];
  const SCORE_DEFAULT = [0, 0];
  const FRESH_START = {
    score: SCORE_DEFAULT,
    gameOver: false,
    isDraw: false
  };

  const [game, setGame] = useState({...FRESH_START});
  const [board, setBoard] = useState(BOARD_START);
  const [turn, setTurn] = useState(PLAYERS[0]);

  const gridBoxClickHandler = (row, box) => {
    if (!game.gameOver) {
      setBoard((prev) => {
        var data = {...prev};
        data[row][box] = turn;
        if(!didPlayerWin(data, turn.symbol)){
          setTurn(turn.player === 1 ? PLAYERS[1] : PLAYERS[0]);
        }
        return data;
      });
    }
  };

  const didPlayerWin = (boardData, symbol) => {
    const gameOverPairs = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [2, 0],
        [1, 1],
        [0, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
    ];
    var isDraw = true;
    for (var test of gameOverPairs) {
      var count = 0;
      for (var box of test) {
        var boxSymbol = boardData[box[0]][box[1]].symbol;
        if(boxSymbol === ''){
          isDraw = false;
        }
        if( boxSymbol === symbol){
          ++count;
        }
      }
      if (count === 3){
        setGame(prev => ({...prev, gameOver: true}));
        return true;
      }
    }
    setGame(prev => ({...prev, isDraw: isDraw}));
    return false;
  };

  const playAgainHandler = () => {
    if(game.gameOver){
      setGame((prev) => {
        var index = turn.player - 1;
        var updatedScore = prev.score;
        updatedScore[index]++;
        const newGame = {gameOver: false, score: updatedScore};
        return newGame;
      });
    }
    setTurn(PLAYERS[0]);
    setBoard([...BOARD_START]);
  };

  const resetHandler = () => {
    setGame(FRESH_START);
    setTurn(PLAYERS[0]);
    setBoard([...BOARD_START]);
  };

  return (
    <Board>
      <BoardHeader title="Tic Tac Toe" score={game.score} onClear={playAgainHandler} onReset={resetHandler}/>
      <Grid data={board} onClick={gridBoxClickHandler} />
      <Announcer
        player={turn.player}
        gameOver={game.gameOver}
        isDraw={game.isDraw}
        playAgain={playAgainHandler}
        reset={resetHandler}
      />
    </Board>
  );
};

export default App;

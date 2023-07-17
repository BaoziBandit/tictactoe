import "./App.css";

import { useState } from "react";

import Announcer from "./game/Announcer/Announcer";
import Board from "./game/Board/Board";
import BoardHeader from "./game/Board/BoardHeader";
import Grid from "./game/Board/Grid/Grid";

const PLAYERS = [
  { player: 1, symbol: "X" },
  { player: 2, symbol: "O" }
];

const SCORE_DEFAULT = [0, 0];
const STARTING_DATA = [
  [
    { player: 0, symbol: "" },
    { player: 0, symbol: "" },
    { player: 0, symbol: "" },
  ],
  [
    { player: 0, symbol: "" },
    { player: 0, symbol: "" },
    { player: 0, symbol: "" },
  ],
  [
    { player: 0, symbol: "" },
    { player: 0, symbol: "" },
    { player: 0, symbol: "" },
  ],
];

const STARTING_GAME_STATE = {
  turn: PLAYERS[0],
  score: SCORE_DEFAULT,
  data: STARTING_DATA,
  gameOver: false,
};

const App = () => {
  const [game, setGame] = useState(STARTING_GAME_STATE);

  const gridBoxClickHandler = (row, box) => {
    var sinker;
    if (!game.gameOver) {
      setGame((prev) => {
        var data = [...prev.data];
        data[row][box] = prev.turn;
        sinker = didPlayerWin(data, prev.turn.symbol);
        return { ...prev, data: data, gameOver:  sinker, turn: !sinker && prev.turn.player === 1? PLAYERS[1] : PLAYERS[0]};
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

    for (var test of gameOverPairs) {
      var matching = true;
      for (var box of test) {
        var boxSymbol = boardData[box[0]][box[1]].symbol;
        if (boxSymbol !== null && boxSymbol !== symbol) {
          matching = false;
        }
      }
      if (matching === true) return true;
    }
    return false;
  };

  const playAgainHandler = () => {
    if (game.gameOver) {
      setGame((prev) => {
        var index = game.turn.player - 1;
        var updatedScore = prev.score;
        updatedScore[index]++;
        const newGame = {...STARTING_GAME_STATE};
        return newGame;
      });
    } else {
      setGame((prev) => ({...STARTING_GAME_STATE, score: prev.score}));
    }
  };

  const resetHandler = () => {
    setPlayer(PLAYERS[0]);
    setGame(STARTING_GAME_STATE);
  };

  console.log(game);
  return (
    <Board>
      <BoardHeader title="Tic Tac Toe" score={game.score} />
      <Grid data={game.data} onClick={gridBoxClickHandler} />
      <Announcer
        player={game.turn.player}
        gameOver={game.gameOver}
        playAgain={playAgainHandler}
        reset={resetHandler}
      />
    </Board>
  );
};

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import Board from "./game/Board/Board";
import BoardHeader from "./game/Board/BoardHeader";
import Grid from "./game/Board/Grid/Grid";
import Announcer from "./game/Announcer/Announcer";

const PLAYERS = [
  { player: 1, symbol: "X" },
  { player: 2, symbol: "O" },
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
  score: SCORE_DEFAULT,
  data: STARTING_DATA,
  gameOver: false,
};

const App = () => {
  const [game, setGame] = useState(STARTING_GAME_STATE);
  const [init, setInit] = useState(false);
  const [player, setPlayer] = useState(PLAYERS[0]);

  const gridBoxClickHandler = (row, box) => {
    if (!game.gameOver) {
      setGame((prev) => {
        var data = [...prev.data];
        data[row][box] = player;
        return { ...prev, data: data };
      });
    }
  };

  useEffect(() => {
    var match = didPlayerWin(game.data, player.symbol);
    if (match) {
      setGame((prev) => ({ ...prev, gameOver: match }));
      return;
    } else if(init) {
      setPlayer((prev) => (prev.player === 1 ? PLAYERS[1] : PLAYERS[0]));
    } else {
      setInit(true);
    }
  }, [game.data]);

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
      setPlayer(PLAYERS[0]);
      setInit(false);
      setGame((prev) => {
        var index = player.player - 1;
        var updatedScore = prev.score;
        updatedScore[index]++;
        const newGame = {
          score: updatedScore,
          data: STARTING_DATA,
          gameOver: false,
        };
        console.log(newGame);
        return newGame;
      });
    } else {
      setGame((prev) => ({ ...prev, data: STARTING_DATA }));
      setPlayer(PLAYERS[0]);
    }
  };

  const resetHandler = () => {
    setPlayer(PLAYERS[0]);
    setGame(STARTING_GAME_STATE);
  };
  return (
    <Board>
      <BoardHeader title="Tic Tac Toe" score={game.score} />
      <Grid data={game.data} onClick={gridBoxClickHandler} />
      <Announcer
        player={player}
        gameOver={game.gameOver}
        playAgain={playAgainHandler}
        reset={resetHandler}
      />
    </Board>
  );
};

export default App;

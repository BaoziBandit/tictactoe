import style from './Board.module.css';

const Board = (props) => {
  return <div {...props} className={`${style.board} ${props.className}`}>{props.children}</div>
}

export default Board;
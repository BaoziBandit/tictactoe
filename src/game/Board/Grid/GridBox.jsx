import style from './GridBox.module.css';

const GridBox = props => {
  const clickHandler = () => {
    if(!props.data.symbol){
      props.onClick(props.boxIndex);
    }
  };
  return <div onClick={clickHandler}
  className={`${style.box}
    ${props.data.player === 0 ? '' : props.data.player == 1 ? style.p1 : style.p2}
    ${props.position !== undefined && props.position === 'row' ? style.column : style.row}`}>
      {props.data.symbol === undefined ? '' : props.data.symbol}
  </div>;
}

export default GridBox;
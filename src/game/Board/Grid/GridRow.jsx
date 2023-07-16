import GridBox from './GridBox';
import style from './GridRow.module.css';

const GridRow = props => {
  const clickHandler = (boxIndex) => {
    props.onClick(props.rowIndex, boxIndex);
  };
  return <div className={`${style.row} ${props.isCenter && style.center}`}>
    <GridBox boxIndex={0} data={props.data[0]} onClick={clickHandler}/>
    <GridBox boxIndex={1} position={'column'} data={props.data[1]} onClick={clickHandler}/>
    <GridBox boxIndex={2} data={props.data[2]} onClick={clickHandler}/>
  </div>
}

export default GridRow;
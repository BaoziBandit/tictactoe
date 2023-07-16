import style from './Grid.module.css';
import GridRow from './GridRow';

const Grid = props => {
  return <div className={style.grid}>
    <GridRow rowIndex={0} data={props.data[0]} onClick={props.onClick}/>
    <GridRow rowIndex={1} data={props.data[1]} isCenter={true} onClick={props.onClick}/>
    <GridRow rowIndex={2} data={props.data[2]} onClick={props.onClick}/>
  </div>;
}

export default Grid;
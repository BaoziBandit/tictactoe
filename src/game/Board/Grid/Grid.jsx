import style from './Grid.module.css';

const Grid = props => {
  return <table className={style.grid}>
    <tbody>
      <tr>
        <td></td>
        <td className={style.column}></td>
        <td></td>
      </tr>
      <tr className={style.row}>
        <td></td>
        <td className={style.column}></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td className={style.column}></td>
        <td></td>
      </tr>
    </tbody>
  </table>;
}

export default Grid;
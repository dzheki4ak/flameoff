import './Navlist.scss'

const Navlist = ({ listData, classNm }) => {
  return (
    <ul className={`${classNm} nav-list`}>
      {listData.map(text => (
        <li key={text} className={`${classNm}-item nav-list__item`}>
          {text}
        </li>
      ))}
    </ul>
  );
};

export default Navlist;

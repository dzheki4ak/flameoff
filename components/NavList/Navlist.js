import Link from 'next/link';
import './Navlist.scss';

const Navlist = ({ listData, classNm, itemClickFn, pathname }) => {
  return (
    <ul className={`${classNm} nav-list`}>
      {listData.map(data => (
        <li
          key={data.text}
          className={`${classNm}-item nav-list__item`}
          onClick={itemClickFn}
        >
          <Link className="nav-list__item_link" href={data.link}>
            {data.text}
          </Link>
          {data.link === pathname && (
            <div className="nav-list__item_underline"></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navlist;

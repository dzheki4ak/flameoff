import Link from 'next/link';
import './Button.scss';

const Button = ({
  text = 'Button',
  btnType = 'button',
  classNm = '',
  clickFn,
  link,
}) => {
  return (
    <button
      onClick={clickFn}
      type={btnType}
      className={`button ${classNm}`}
    >
      {link ? <Link href={link}>{text}</Link> : text}
    </button>
  );
};

export default Button;

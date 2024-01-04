import './Button.scss';

const Button = ({
  text = 'Button',
  btnType = 'button',
  classNm = '',
  clickFn,
}) => (
  <button
    onClick={clickFn}
    type={btnType}
    className={`button ${classNm}`}
  >
    {text}
  </button>
);

export default Button;

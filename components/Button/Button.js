import './Button.scss';

const Button = ({ text = 'Button', btnType = 'button', classNm='' }) => (
  <button type={btnType} className={`button ${classNm}`}>
    {text}
  </button>
);

export default Button;

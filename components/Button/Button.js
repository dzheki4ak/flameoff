import './Button.scss';

const Button = ({ text = 'Button', btnType = 'button' }) => (
  <button type={btnType} className="button">
    {text}
  </button>
);

export default Button;

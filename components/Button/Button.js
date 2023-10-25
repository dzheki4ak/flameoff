import './Button.scss';

const Button = ({ text = 'Button' }) => (
  <button className="button">{text}</button>
);

export default Button;

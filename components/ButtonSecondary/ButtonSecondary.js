import './ButtonSecondary.scss';

const ButtonSecondary = ({ text, actionFn, classNm }) => {
  return (
    <button
      className={`secondary__button ${classNm}`}
      onClick={actionFn}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;

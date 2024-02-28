import Image from 'next/image';

import './FormInput.scss';

const FormInput = ({
  inputBG = 'grey',
  hasLabel,
  labelText,
  imgSrc,
  imgAltTxt,
  inputType,
  inputName,
  inputPlaceholder,
  inputId,
  inputPattern,
  filesAccepted,
}) => {
  return (
    <div className={`input-area ${inputBG}`}>
      {hasLabel && (
        <label className="input-area__label" htmlFor={inputId}>
          {labelText}
        </label>
      )}
      <div className={`input-area__field ${inputBG}`}>
        {imgSrc && (
          <Image
            loading="eager"
            className="input-area__field_icon"
            src={imgSrc}
            alt={imgAltTxt}
          />
        )}
        {inputName === 'message' ? (
          <textarea
            className={`input-area__field_input ${inputBG} ${inputName}`}
            name={inputName}
            placeholder={inputPlaceholder}
            id={inputId}
          ></textarea>
        ) : (
          <input
            className={`input-area__field_input ${inputBG}`}
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            id={inputId}
            pattern={inputPattern}
            accept={filesAccepted}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;

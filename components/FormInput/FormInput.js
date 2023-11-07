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
}) => {
  return (
    <div className={`input-area ${inputBG}`}>
      {hasLabel && (
        <label className="input-area__label" for={inputId}>
          {labelText}
        </label>
      )}
      <div className={`input-area__field ${inputBG}`}>
        {imgSrc && (
          <Image
            className="input-area__field_icon"
            src={imgSrc}
            alt={imgAltTxt}
          />
        )}
        <input
          className={`input-area__field_input ${inputBG}`}
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          id={inputId | ''}
        />
      </div>
    </div>
  );
};

export default FormInput;

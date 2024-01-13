import Image from 'next/image';
import SuccessIcon from '@/public/images/icons/success_check.svg';
import ButtonSecondary from '@/components/ButtonSecondary/ButtonSecondary';

import './SuccessForm.scss';

const SuccessForm = ({ closeFn }) => {
  return (
    <div className="success__form">
      <Image
        className="success__form_icon"
        src={SuccessIcon}
        alt="green checkmark"
      />
      <h4 className="success__form_title">Success!</h4>
      <p className="success__form_text">
        We have received your request and appreciate your interest.
        Expect our prompt response.
      </p>
      <ButtonSecondary
        classNm="success__form_button"
        text="Close"
        actionFn={closeFn}
      />
    </div>
  );
};

export default SuccessForm;

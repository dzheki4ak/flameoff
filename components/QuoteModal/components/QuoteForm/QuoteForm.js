import { createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@/components/Button/Button';
import FormInput from '@/components/FormInput/FormInput';
import {
  quoteName,
  quoteEmail,
  quoteZip,
  quoteFile,
  quoteMessage,
} from '@/constants/inputData';

import './QuoteForm.scss';

const QuoteForm = () => {
  const recaptchaRef = createRef();

  const handleCaptchaChange = value => {
    // Handle the reCAPTCHA value
    // console.log('reCAPTCHA value:', value);
  };

  return (
    <form className="quote__form">
      <h4 className="quote__form_title">Free Quote</h4>
      <div className="quote__form_creds">
        <FormInput {...quoteName} />
        <FormInput {...quoteEmail} />
      </div>
      <FormInput {...quoteZip} />
      <FormInput {...quoteMessage} />
      <FormInput {...quoteFile} />
      <ReCAPTCHA
        size="normal"
        className="quote__recaptcha"
        ref={recaptchaRef}
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={handleCaptchaChange}
      />
      <Button classNm="quote__form_button" text="send" />
    </form>
  );
};

export default QuoteForm;

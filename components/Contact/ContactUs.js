import Button from '../Button/Button';
import SectionHeading from '../SectionHeading/SectionHeading';
import FormInput from '../FormInput/FormInput';
import { contactDet } from '@/constants/sectionHeadingDetails';
import {
  firstName,
  lastName,
  emailAddress,
  message,
} from '@/constants/inputData';

import './ContactUs.scss';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <SectionHeading {...contactDet} />
      <form className="contact-us__form">
        <div className="contact-us__form_creds">
          <FormInput {...firstName} />
          <FormInput {...lastName} />
        </div>
        <FormInput {...emailAddress} />
        <FormInput {...message} />
        <Button text="send message" btnType="submit" />
      </form>
    </section>
  );
};

export default ContactUs;

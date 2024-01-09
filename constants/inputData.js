import ProfileIcon from '@/public/images/icons/profile.svg';
import Tag from '@/public/images/icons/tag.svg';
import LetterIcon from '@/public/images/icons/letter.svg';

export const firstName = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'First Name',
  imgSrc: ProfileIcon,
  imgAltTxt: 'profile icon',
  inputType: 'text',
  inputName: 'first-name',
  inputPlaceholder: 'First Name...',
  inputId: 'first-name',
};

export const lastName = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'Last Name',
  imgSrc: Tag,
  imgAltTxt: 'tag icon',
  inputType: 'text',
  inputName: 'last-name',
  inputPlaceholder: 'Last Name...',
  inputId: 'last-name',
};

export const emailAddress = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'Email Address',
  imgSrc: LetterIcon,
  imgAltTxt: 'letter icon',
  inputType: 'email',
  inputName: 'email',
  inputPlaceholder: 'Email Here...',
  inputId: 'contact-email',
};

export const message = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'Your Message',
  inputType: 'text',
  inputName: 'message',
  inputPlaceholder: 'Hello...',
  inputId: 'message',
};

export const subscribe = {
  inputBG: 'white',
  hasLabel: false,
  imgSrc: LetterIcon,
  imgAltTxt: 'letter icon',
  inputType: 'email',
  inputName: 'email',
  inputPlaceholder: 'Your email address',
};

export const quoteName = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'text',
  inputName: 'name',
  inputPlaceholder: 'Name',
};

export const quoteEmail = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'email',
  inputName: 'email',
  inputPlaceholder: 'Email',
};

export const quoteMessage = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'text',
  inputName: 'message',
  inputPlaceholder: 'Project information',
};

export const quoteZip = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'text',
  inputName: 'Zip code',
  inputPlaceholder: 'ZIP code for delivery',
};

export const quoteFile = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'file',
  inputPlaceholder: 'Drop files here to upload',
  inputId: 'quote-zip',
};

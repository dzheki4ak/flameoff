import ProfileIcon from '@/public/images/icons/profile.svg';
import Tag from '@/public/images/icons/tag.svg';
import LetterIcon from '@/public/images/icons/letter.svg';

const namePattern = '[A-Za-z ]{1,50}';
const emailPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}';
const messagePattern = '[\s\S]*'

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
  inputPattern: namePattern,
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
  inputPattern: namePattern,
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
  inputPattern: emailPattern,
};

export const message = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'Your Message',
  inputType: 'text',
  inputName: 'message',
  inputPlaceholder: 'Hello...',
  inputId: 'message',
  inputPattern: messagePattern,
};

export const subscribe = {
  inputBG: 'white',
  hasLabel: false,
  imgSrc: LetterIcon,
  imgAltTxt: 'letter icon',
  inputType: 'email',
  inputName: 'email',
  inputPlaceholder: 'Your email address',
  inputPattern: emailPattern,
};

export const quoteName = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'text',
  inputName: 'name',
  inputPlaceholder: 'Name',
  inputPattern: namePattern,
};

export const quoteEmail = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'email',
  inputName: 'email',
  inputPlaceholder: 'Email',
  inputPattern: emailPattern,
};

export const quoteMessage = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'text',
  inputName: 'message',
  inputPlaceholder: 'Project information',
  inputPattern: messagePattern,
};

export const quoteZip = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'number',
  inputName: 'Zip code',
  inputPlaceholder: 'ZIP code for delivery',
  inputPattern: '[A-Za-z0-9 -]{3,15}',
};

export const quoteFile = {
  inputBG: 'white border',
  hasLabel: false,
  inputType: 'file',
  inputPlaceholder: 'Drop files here to upload',
  filesAccepted: '.pdf, .doc, .docx, .jpg, .png',
};

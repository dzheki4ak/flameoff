import ProfileIcon from '@/public/images/icons/profile.svg'
import Tag from '@/public/images/icons/tag.svg'
import LetterIcon from '@/public/images/icons/letter.svg'

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
}

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
}

export const emailAddress = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'Email Address',
  imgSrc: LetterIcon,
  imgAltTxt: 'letter icon',
  inputType: 'email',
  inputName: 'first-name',
  inputPlaceholder: 'Email Here...',
  inputId: 'contact-email',
}

export const message = {
  inputBG: 'grey',
  hasLabel: true,
  labelText: 'Your Message',
  inputType: 'text',
  inputName: 'message',
  inputPlaceholder: 'Hello...',
  inputId: 'message',
}

export const subscribe = {
  inputBG: 'white',
  hasLabel: false,
  imgSrc: LetterIcon,
  imgAltTxt: 'letter icon',
  inputType: 'email',
  inputName: 'email-subscribe',
  inputPlaceholder: 'Your email address',
}
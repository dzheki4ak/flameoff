import links from './links';

export const navlist = [
  { text: 'FR Clear', link: links.frClear },
  {
    text: 'Fire Barrier Paint',
    link: links.fireBarrier,
  },
  { text: 'Contact Us', link: links.contactUs },
];

export const navListMob = [
  { text: 'Home', link: links.home },
  ...navlist,
];

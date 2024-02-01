import Link from 'next/link';
import ICC from '@/public/images/icons/tech_icons/es_icc.svg';
import ULIQ from '@/public/images/icons/tech_icons/ul_iq.svg';
import PDF from '@/public/images/icons/tech_icons/pdf_icon.svg';

const esl1191links = [
  {
    text: 'Wide Flange Steel;',
    href: '',
  },
  {
    text: 'Hollow Steel;',
    href: '',
  },
  {
    text: 'Beams;',
    href: '',
  },
  {
    text: 'Gypsum',
    href: '',
  },
];

const esl1191Details = links =>
  links.map(link => (
    <Link key={link.text} href={link.href}>
      {link.text}
    </Link>
  ));

const fbpTechDataDet = [
  {
    agency: ICC,
    reportN: 'ESL-1191',
    details: esl1191Details(esl1191links),
    file: PDF,
    fileLink: '',
    altTxt: 'agency logo',
  },
  {
    agency: ICC,
    reportN: 'ESL-1192',
    details: 'E-84 Class A',
    file: PDF,
    fileLink: '',
  },
  {
    agency: ICC,
    reportN: 'ESR-3874',
    details: 'ICC-ES Evaluation Service Report',
    file: PDF,
    fileLink: '',
  },
  {
    agency: ULIQ,
    reportN: 'CDWZ.R38327',
    details:
      'Fire-Resistance Ratings -ANSI/UL 263. Steel and Gypsum Report',
    file: PDF,
    fileLink: '',
  },
  {
    agency: ULIQ,
    reportN: 'CDWZ7.R38327',
    details:
      'Fire-Resistance Ratings CAN/ULC-S101 Certified for Canada. Steel and Gypsum Report',
    file: PDF,
    fileLink: '',
    altTxt: 'PDF file icon',
  },
];

export default fbpTechDataDet;

import FlameOffPaint from '@/public/images/flame_off_paint.svg';
import FrClearPaint from '@/public/images/fr_clear_paint.svg';

import links from './links';

const productCardDetails = [
  {
    header: 'Fire Barrier Paint',
    imageSrc: FlameOffPaint,
    descrTextPrime:
      'FlameOFF® Fire Barrier Paint is a white aesthetically pleasing intumescent coating that offers 1-2 hours of fire protection on multiple substrates (Steel, drywall, and wood). It is designated for interior use only; this is a water-based, eco-friendly, latex coating.',
    descrTextSec:
      'This product has been tested to international standards including ASTM and UL. Application is ideal for commercial, residential, and industrial projects',
    imgAltText: 'Fire Barrier Paint',
    rtl: false,
    pageLink: links.fireBarrier,
  },
  {
    header: 'FR Clear',
    imageSrc: FrClearPaint,
    descrTextPrime:
      'A clear fire retardant coating/spray for wood, fabric, and other substrates. This fireproof solution is eco-friendly and water based, intended for interior use with easy application. Ideal use in schools, hospitals, hotels, and other public spaces, preventing flame spread and smoke development.',
    descrTextSec: 'Classified and tested to ASTM and UL standards',
    imgAltText: 'FR Clear',
    rtl: true,
    pageLink: links.frClear,
  },
];

export default productCardDetails;

import React from 'react';

import WebGrid from '@pagerland/icons/src/line/WebGrid';
import BedDouble from '@pagerland/icons/src/line/BedDouble';
import University from '@pagerland/icons/src/line/University';
import CarSideview from '@pagerland/icons/src/line/CarSideview';
import Plane from '@pagerland/icons/src/line/Plane';
import TrainTunnel from '@pagerland/icons/src/line/TrainTunnel';
import ShoppingBag from '@pagerland/icons/src/line/ShoppingBag';
import Bus from '@pagerland/icons/src/line/Bus';
import Metro from '@pagerland/icons/src/line/Metro';
import Beach from '@pagerland/icons/src/line/Beach';
import Trees from '@pagerland/icons/src/line/Trees';
import Flag from '@pagerland/icons/src/line/Flag';
import User from '@pagerland/icons/src/line/User';
import Building from '@pagerland/icons/src/line/Building';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Twitter from '@pagerland/icons/src/line/TwitterAlt';
import Linkedin from '@pagerland/icons/src/line/LinkedinAlt';
import TagAlt from '@pagerland/icons/src/line/TagAlt';
import ThumbsUp from '@pagerland/icons/src/line/ThumbsUp';
import ShieldCheck from '@pagerland/icons/src/line/ShieldCheck';
import Award from '@pagerland/icons/src/line/Award';
import Youtube from '@pagerland/icons/src/line/Youtube';

import Icon from '@pagerland/common/src/components/Icon';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import * as Yup from 'yup';
import background from './assets/header-photo.jpg';
import background2x from './assets/header-photo@2x.jpg';

import about1 from './assets/about/about-1.jpg';
import aboutLarge1 from './assets/about/about-huge-1.jpg';
import about12x from './assets/about/about-1@2x.jpg';
import about2 from './assets/about/about-2.jpg';
import aboutLarge2 from './assets/about/about-huge-2.jpg';
import about22x from './assets/about/about-2@2x.jpg';
import about3 from './assets/about/about-3.jpg';
import aboutLarge3 from './assets/about/about-huge-3.jpg';
import about32x from './assets/about/about-3@2x.jpg';

import exterior1 from './assets/exteriors/exterior-1.jpg';
import exterior12x from './assets/exteriors/exterior-1@2x.jpg';
import exterior2 from './assets/exteriors/exterior-2.jpg';
import exterior22x from './assets/exteriors/exterior-2@2x.jpg';

import interior1 from './assets/interiors/interior-1.jpg';
import interior2 from './assets/interiors/interior-2.jpg';

import surrounding1 from './assets/surroundings/surroundings-1.jpg';
import surrounding2 from './assets/surroundings/surroundings-2.jpg';
import surrounding3 from './assets/surroundings/surroundings-3.jpg';

import gallery1 from './assets/gallery/gallery-1.jpg';
import gallery2 from './assets/gallery/gallery-2.jpg';
import gallery3 from './assets/gallery/gallery-3.jpg';
import gallery4 from './assets/gallery/gallery-4.jpg';
import gallery5 from './assets/gallery/gallery-5.jpg';
import gallery6 from './assets/gallery/gallery-6.jpg';
import gallery7 from './assets/gallery/gallery-7.jpg';
import gallery8 from './assets/gallery/gallery-8.jpg';
import gallery9 from './assets/gallery/gallery-9.jpg';
import gallery10 from './assets/gallery/gallery-10.jpg';
import gallery11 from './assets/gallery/gallery-11.jpg';
import gallery12 from './assets/gallery/gallery-12.jpg';
import gallery13 from './assets/gallery/gallery-13.jpg';
import gallery14 from './assets/gallery/gallery-14.jpg';
import gallery15 from './assets/gallery/gallery-15.jpg';
import gallery1Thumbnail from './assets/gallery/thumbnails/gallery-1.jpg';
import gallery2Thumbnail from './assets/gallery/thumbnails/gallery-2.jpg';
import gallery3Thumbnail from './assets/gallery/thumbnails/gallery-3.jpg';
import gallery4Thumbnail from './assets/gallery/thumbnails/gallery-4.jpg';
import gallery5Thumbnail from './assets/gallery/thumbnails/gallery-5.jpg';
import gallery6Thumbnail from './assets/gallery/thumbnails/gallery-6.jpg';
import gallery7Thumbnail from './assets/gallery/thumbnails/gallery-7.jpg';
import gallery8Thumbnail from './assets/gallery/thumbnails/gallery-8.jpg';
import gallery9Thumbnail from './assets/gallery/thumbnails/gallery-9.jpg';
import gallery10Thumbnail from './assets/gallery/thumbnails/gallery-10.jpg';
import gallery11Thumbnail from './assets/gallery/thumbnails/gallery-11.jpg';
import gallery112xThumbnail from './assets/gallery/gallery-11.jpg';
import gallery12Thumbnail from './assets/gallery/thumbnails/gallery-12.jpg';
import gallery122xThumbnail from './assets/gallery/gallery-12.jpg';
import gallery13Thumbnail from './assets/gallery/thumbnails/gallery-13.jpg';
import gallery132xThumbnail from './assets/gallery/gallery-13.jpg';
import gallery14Thumbnail from './assets/gallery/thumbnails/gallery-14.jpg';
import gallery142xThumbnail from './assets/gallery/gallery-14.jpg';
import gallery15Thumbnail from './assets/gallery/thumbnails/gallery-15.jpg';
import gallery152xThumbnail from './assets/gallery/gallery-15.jpg';

import property1 from './assets/similar-properties/property-1.jpg';
import property12x from './assets/similar-properties/property-1@2x.jpg';
import property2 from './assets/similar-properties/property-2.jpg';
import property22x from './assets/similar-properties/property-2@2x.jpg';
import property3 from './assets/similar-properties/property-3.jpg';
import property32x from './assets/similar-properties/property-3@2x.jpg';

import contactImg from './assets/contact.jpg';
import contactImg2x from './assets/contact@2x.jpg';

export default {
  title: 'Dabar Intl Christian Center',
  navbar: {
    links: [
      {
        to: '',
        'data-to': '',
        label: 'Home',
      },
      {
        to: 'about',
        'data-to': 'about',
        label: 'About',
      },
      {
        to: 'interior',
        'data-to': 'interior',
        label: 'Projects',
      },
      {
        to: 'surroundings',
        'data-to': 'surroundings',
        label: 'Ministry',
      },
      {
        to: 'gallery',
        'data-to': 'gallery',
        label: 'Gallery',
      },
      {
        to: 'contact',
        'data-to': 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href:
          '',
        label: 'Donate',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'DICC',
    },
    title: 'Welcome to Darbar Int Christian Center',
    price: 'DICC',
    features: [
      {
        IconProps: {
          icon: WebGrid,
        },
        title: 'Evangelistic',
      },
      {
        IconProps: {
          icon: BedDouble,
        },
        title: 'Apostolic',
      },
      {
        IconProps: {
          icon: University,
        },
        title: 'Word Based',
      },
      {
        IconProps: {
          icon: CarSideview,
        },
        title: 'Home for all',
      },
    ],
    cta: {
      to: 'about',
      children: 'Learn more',
    },
  },
  about: {
    title: 'Dabar International Christian Centre (DICC) has been operating in the country since 1990 even before it became a registered entity',
    text:
      'Over the years, the Foundation has grown tremendously with great successes in organized village outreaches, conferences, and countless of non-profit initiatives to the benefit of humanity. The foundation has great advantage as a non-denominational group, covering different local churches, denominations and non-denominational assemblies spread across the length and breadth of the nation. Whereas, the primary objective of DICC is to share God’s love in Christ Jesus with all men through preaching, teaching and healing ministries, we also engage in social work to the socially marginalized and provide relief to people in adverse situations.',
    gallery: [
      {
        source: aboutLarge1,
        ImgProps: {
          src: about1,
          srcSet: `${about1} 1x, ${about12x} 2x`,
        },
      },
      {
        source: aboutLarge2,
        ImgProps: {
          src: about2,
          srcSet: `${about2} 1x, ${about22x} 2x`,
        },
      },
      {
        source: aboutLarge3,
        ImgProps: {
          src: about3,
          srcSet: `${about3} 1x, ${about32x} 2x`,
        },
      },
    ],
  },
  location: {
    title: textToMultiline`Incredible location.\nSo close to all ammenities.`,
    text:
      'Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.',
    counters: [
      {
        IconProps: {
          icon: Plane,
        },
        title: 'Airport',
        counter: {
          value: 67,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: TrainTunnel,
        },
        title: 'Train station',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: ShoppingBag,
        },
        title: 'Shopping Centre',
        counter: {
          value: 12,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Bus,
        },
        title: 'Bus Stop',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Metro,
        },
        title: 'Subway',
        counter: {
          value: 18,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Beach,
        },
        title: 'Beach',
        counter: {
          value: 800,
          unit: 'm',
        },
      },
      {
        IconProps: {
          icon: Trees,
        },
        title: 'Park',
        counter: {
          value: 1,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Flag,
        },
        title: 'Golf course',
        counter: {
          value: 3,
          unit: 'km',
        },
      },
    ],
    map: {
      cords: {
        lat: 37.550705,
        lng: -121.980674,
      },
    },
  },
  exterior: {
    sections: [
      {
        ImgProps: {
          src: exterior1,
          srcSet: `${exterior1} 1x, ${exterior12x} 2x`,
        },
        title: 'Modern an minimalistic exterior design',
        text:
          'Vestibulum sit amet consequat lacus. Nulla dapibus dignissim massa, quis mattis ante tempor in. Morbi mollis nibh dictum, eleifend tellus quis, lobortis ex. Donec tempor, massa in consequat pellentesque, nunc arcu tempus ex, nec accumsan sem augue eget urna.',
      },
      {
        ImgProps: {
          src: exterior2,
          srcSet: `${exterior2} 1x, ${exterior22x} 2x`,
        },
        title: 'Pure harmony between space and function',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus. In consectetur velit est.',
      },
    ],
  },
  interior: {
    sections: [
      {
        slides: [
          {
            src: interior2,
            srcSet: `${gallery5} 1x, ${gallery5} 2x`,
          },
          {
            src: interior2,
            srcSet: `${gallery4} 1x, ${gallery4} 2x`,
          },
          {
            src: interior2,
            srcSet: `${gallery13} 1x, ${gallery13} 2x`,
          },
          {
            src: interior2,
            srcSet: `${gallery14} 1x, ${gallery14} 2x`,
          },
          {
            src: interior2,
            srcSet: `${gallery1} 1x, ${gallery1} 2x`,
          },
        ],
        title: 'Interdenominational Faith Meeting',
        text:
          'Ibadan interdenominational faith meeting 2020.',
      },
      {
        slides: [
          {
            src: interior1,
            srcSet: `${gallery1} 1x, ${gallery1} 2x`,
          },
          {
            src: interior1,
            srcSet: `${gallery4} 1x, ${gallery4} 2x`,
          },
          {
            src: interior1,
            srcSet: `${gallery5} 1x, ${gallery5} 2x`,
          },
          {
            src: interior1,
            srcSet: `${gallery13} 1x, ${gallery13} 2x`,
          },
          {
            src: interior1,
            srcSet: `${gallery14} 1x, ${gallery14} 2x`,
          },
        ],
        title: 'Youth Intitiatives Operation ALFA',
        text:
          'Operation ALFA: Abundant Life for All. A program aimed at discovering, transforming and developing youths and vulnerable people in Oyo state, Nigeria',
      },
    ],
  },
  surroundings: {
    sections: [
      {
        ImgProps: {
          src: surrounding1,
          srcSet: `${gallery9} 1x, ${gallery9} 2x`,
        },
        title: 'Music and Drama Ministry',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            '#',
        },
      },
      {
        ImgProps: {
          src: surrounding2,
          srcSet: `${gallery10} 1x, ${gallery10} 2x`,
        },
        title: 'Youth Ministry',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            '#',
        },
      },
      {
        ImgProps: {
          src: surrounding3,
          srcSet: `${gallery12} 1x, ${gallery12} 2x`,
        },
        title: 'Evangelism & Soul Winning',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            '#',
        },
      },
    ],
  },
  gallery: {
    photos: [
      {
        source: gallery1,
        ImgProps: {
          src: gallery1Thumbnail,
          srcSet: `${gallery1Thumbnail} 1x, ${gallery1} 2x`,
        },
      },
      {
        source: gallery2,
        ImgProps: {
          src: gallery2Thumbnail,
          srcSet: `${gallery2Thumbnail} 1x, ${gallery2} 2x`,
        },
      },
      {
        source: gallery3,
        ImgProps: {
          src: gallery3Thumbnail,
          srcSet: `${gallery3Thumbnail} 1x, ${gallery3} 2x`,
        },
      },
      {
        source: gallery4,
        ImgProps: {
          src: gallery4Thumbnail,
          srcSet: `${gallery4Thumbnail} 1x, ${gallery4} 2x`,
        },
      },
      {
        source: gallery5,
        ImgProps: {
          src: gallery5Thumbnail,
          srcSet: `${gallery5Thumbnail} 1x, ${gallery5} 2x`,
        },
      },
      {
        source: gallery6,
        ImgProps: {
          src: gallery6Thumbnail,
          srcSet: `${gallery6Thumbnail} 1x, ${gallery6} 2x`,
        },
      },
      {
        source: gallery7,
        ImgProps: {
          src: gallery7Thumbnail,
          srcSet: `${gallery7Thumbnail} 1x, ${gallery7} 2x`,
        },
      },
      {
        source: gallery8,
        ImgProps: {
          src: gallery8Thumbnail,
          srcSet: `${gallery8Thumbnail} 1x, ${gallery8} 2x`,
        },
      },
      {
        source: gallery9,
        ImgProps: {
          src: gallery9Thumbnail,
          srcSet: `${gallery9Thumbnail} 1x, ${gallery9} 2x`,
        },
      },
      {
        source: gallery10,
        ImgProps: {
          src: gallery10Thumbnail,
          srcSet: `${gallery10Thumbnail} 1x, ${gallery10} 2x`,
        },
      },
      {
        source: gallery11,
        ImgProps: {
          src: gallery11Thumbnail,
          srcSet: `${gallery11Thumbnail} 1x, ${gallery112xThumbnail} 2x`,
        },
      },
      {
        source: gallery12,
        ImgProps: {
          src: gallery12Thumbnail,
          srcSet: `${gallery12Thumbnail} 1x, ${gallery122xThumbnail} 2x`,
        },
      },
      {
        source: gallery13,
        ImgProps: {
          src: gallery13Thumbnail,
          srcSet: `${gallery13Thumbnail} 1x, ${gallery132xThumbnail} 2x`,
        },
      },
      {
        source: gallery14,
        ImgProps: {
          src: gallery14Thumbnail,
          srcSet: `${gallery14Thumbnail} 1x, ${gallery142xThumbnail} 2x`,
        },
      },
      {
        source: gallery15,
        ImgProps: {
          src: gallery15Thumbnail,
          srcSet: `${gallery15Thumbnail} 1x, ${gallery152xThumbnail} 2x`,
        },
      },
    ],
  },
  contact: {
    title: 'Contact',
    thumbnail: {
      src: contactImg,
      srcSet: `${contactImg} 1x, ${contactImg2x} 2x`,
    },
    details: {
      title: 'We are always available ',
      text:
        'Share your prayer points with us, we have a dedicated prayer team that will pray with you. Have any questions? ask us directly, we respond swiftly.',
      info: [
        {
          icon: User,
          text: 'Ojelabi Babatunde',
        },
        {
          icon: Building,
          text: 'Secretary',
        },
        {
          icon: MapMarker,
          text: textToMultiline`No 32, Ojoo-UI express road.\nOpposite NISER fence, Orogun, Ibadan, Oyo state, Nigeria`,
        },
        {   
          icon: Phone,
          text: '+234 08033338227',
        },
        {
          icon: Envelope,
          text: 'dabarcentre@gmail.com',
        },
      ],
      socialLinks: [
        {
          icon: FacebookF,
          href: 'https://facebook.com/dabar',
          title: 'Facebook',
        },
        {
          icon: Twitter,
          href: 'https://twitter.com/@dicc',
          title: 'Twitter',
        },
        {
          icon: Instagram,
          href: 'https://instagram.com/dabar',
          title: 'Instagram',
        },
        {
          icon: Linkedin,
          href: 'https://linkedin.com/in/dabar',
          title: 'Linkedin',
        },
      ],
    },
    form: {
      title: 'Send us message, ask us a question, share a prayer point',
      sendButtonText: 'Send',
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Message sent ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          placeholder: 'ie. John Doe',
          initialValue: '',
          prefix: <Icon icon={User} />,
        },
        {
          name: 'phone',
          label: 'Phone',
          placeholder: 'ie. 555-678-123',
          initialValue: '',
          prefix: <Icon icon={Phone} />,
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'ie. john.doe@email.com',
          type: 'email',
          initialValue: '',
          prefix: <Icon icon={Envelope} />,
        },
        {
          name: 'message',
          label: 'Message',
          placeholder: 'Start typing here...',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  similarProperties: {
    title: 'Similar properties',
    properties: [
      {
        ImgProps: {
          src: property1,
          srcSet: `${property1} 1x, ${property12x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            '1600x1200 600x450',
        },
        title: 'Villa with two terraces, swimming pool and beauitiful garden',
        price: '$3,450,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '3 400 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '5 bedrooms',
          },
          {
            IconProps: {
              icon: University,
            },
            title: '3 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
      {
        ImgProps: {
          src: property2,
          srcSet: `${property2} 1x, ${property22x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            '#',
        },
        title: 'Classic spanish style house with amazin mountains view',
        price: '$2,780,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '4 200 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '6 bedrooms',
          },
          {
            IconProps: {
              icon: University,
            },
            title: '4 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
      {
        ImgProps: {
          src: property3,
          srcSet: `${property3} 1x, ${property32x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            '#',
        },
        title: 'Completely renovated ground floor villa with swimming pool',
        price: '$1,950,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '2 800 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '4 bedrooms',
          },
          {
            IconProps: {
              icon: University,
            },
            title: '3 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
    ],
  },
  footer: {
    title: 'About DICC',
    text: textToMultiline`Cras sollicitudin erat sit amet egestas consequat. Quisque in purus sem. Integer condimentum nulla vel velit pretium, eget fringilla enim sodales. Nullam sit amet leo vitae mi laoreet varius eu vel est.\n\nMaecenas non lectus tincidunt, sodales leo pulvinar, condimentum urna. Fusce sed dui nec tortor tincidunt ultricies. Proin at convallis felis, sit amet varius velit.`,
    cta: {
      as: 'a',
      label: 'Learn more',
      href:
        '#',
    },
    features: [
      {
        IconProps: {
          icon: TagAlt,
        },
        title: 'Raising Champions',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ThumbsUp,
        },
        title: 'Building leaders',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ShieldCheck,
        },
        title: 'Spiritual Upliftment',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: Award,
        },
        title: 'BibleBelieving',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://facebook.com/dicc',
        title: 'Facebook',
      },
      {
        icon: Twitter,
        href: 'https://twitter.com/@dicc',
        title: 'Twitter',
      },
      {
        icon: Instagram,
        href: 'https://instagram.com/dicc',
        title: 'Instagram',
      },
      {
        icon: Youtube,
        href: 'https://youtube.com/#',
        title: 'YouTube',
      },
      {
        icon: Linkedin,
        href: 'https://linkedin.com/in/',
        title: 'Linkedin',
      },
    ],
  },
  copyright: '© 2020 ESSL Developers',
};

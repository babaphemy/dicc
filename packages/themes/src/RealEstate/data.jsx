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

import exterior1 from './assets/exteriors/offering.jpg';

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
import {sendMail} from './Mailer';
export default {
  title: 'Dabar Intl Christian Center',
  navbar: {
    links: [
      {
        to: 'home',
        'data-to': 'home',
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
        label: 'Our Creed',
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
        to: 'donate',
        'data-to':  'donate',
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
    title: 'Welcome to Dabar International Christian Centre (DICC)',
    text:
      '‘Dabar’ is a Hebrew word for prophetic word or divine word. We are a people who love God passionately and love people unreservedly. Our anchor is Jesus Christ, the One from whom abundant life flows. We have a dream tagged “Mission Alfa”. Alfa is an acronym which stands for “Abundant Life for All.” Our sincere desire is to see everyone who comes in contact with DICC have a kingdom experience of spiritual rebirth climaxing in abundant life (John 10:10b). Dabar International Christian Centre is gifted with a dynamic man of God, Rev’d Sam Alawiye. A practical teacher and fiery preacher of the Word. He has a unique prophetic unction our generation yearns for. As he is on the pulpit, so he is in his public and private life style. The president of The Sam Alawiye Ministries based in Ibadan, Nigeria from where his ministry blesses humanity throughout the world. God’s desire is for everyone to have abundant life. In Dabar International Christian Centre (DICC), there’s a near heaven worship experience, fellowship, love, prayer, sound doctrine and abundant life for all. Dabar International Christian Center (DICC) is blessed with an anointed Praise Worship leader, Pastor Moji Alawiye fondly called PMA. She’s the lovely wife of Rev’d Sam Alawiye. A foremost gospel music minister locally and internationally. An author, song writer, and TV personality whose ministry has spread to Europe, United Kingdom and North America. And to crown it is the Spirit-filled DICC choir, vibrant, dynamic and on point! At DICC, we uphold realism as we take religion out of Christianity and present the reality of Jesus Christ to the world. Also, there are no distinctions; we have a strong family bond and everybody is unique in God’s presence. Come and see God’s marvellous works at DICC and witness a mind blowing turnaround in your life. We eagerly look forward to hearing testimonies of what God is doing in your life!.',
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
    profile: {
      title: 'Meet The Reverend',
      text: 'Rev Sam Alawiye is a practical preacher of the undiluted word of God with a unique prophetic unction to bring men face to face with the reality of faith in Christ Jesus. He is practical in teaching as he is on the pulpit, so he is in his lifestyle. He is the founder of the Dabar International Christian Center ministry, Ibadan, Oyo State, Nigeria where his   ministry is being used to bless humanity through God\'s word and improve their livelihood. He is married to Moji Alawiye and blessed with four wonderful and Godfearing children.'
    }
  },
  location: {
    title: textToMultiline`Support DICC.\nDonate using the details below.`,
    text:
      textToMultiline`Account Name: Dabar International Christian Centre \n Bank: Zenith Bank \n Account Number: 1016560186.`,
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
        lat: 7.496477,
        lng: 3.910845,
      },
    },
  },
  exterior: {
    sections: [
      {
        ImgProps: {
          src: exterior1,
          srcSet: `${exterior1} 1x`,
        },
        title: 'Support DICC',
        text: textToMultiline`Accout Name: Dabar International Christian Centre \n Bank: Zenith Bank PLC \n Account Number: 1016560186`,
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
        title: "Dabar's Creed",
        text: textToMultiline
          `Bless the Lord oh my soul and all that is within me bless His holy name. There is a river whose stream makes glad the city of God that river flows over my soul. The peace of God that passeth all understanding is my portion forever.\n
          I shall be like a tree planted by the rivers of water, I will bring forth fruit in season and out of season, whatsoever I do, I shall prosper. My leaves shall not fail and my leaves shall not wither in Jesus name.\n
          The most high God is by my side, I shall not fear what man can do unto me. Thousand may fail at my side and ten thousand at my right hand side it shall not come near me only with my eyes will I see the reward of the wicked. My defense is in-penetrable, the glory of God shall defend me all the days of my life. When others are saying there is a casting down for them, then I will arise and say there is a lifting up for me. My future is great and my tomorrow shall be alright.`,
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
        title: "Dabar's Creed cont'd",
        text: textToMultiline`I am born of God, I overcome the world, I am saved by Grace, I am washed by the blood of Jesus, I am born again by the spirit of God, my names are written in the book of Life, I rejoice in my salvation.\n
        Therefore, no shame, no failure, no accident, no breaking in or breaking out, no calamity, no evil, no death, will come near our church family in Jesus name. This confession is by the decree of watchers and the sentences by the word of the Holy One in order that the living may know that the Most High rules in the affairs of men.\n
        Beautiful people like me are here in DICC
        `,
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
        title: 'MINISTRIES AND DEPARTMENTS OF DABAR INTERNATIONAL CHRISTIAN CENTRE',
        text:
          " Worship (Choir, Worship Team, Music) *	Helps ( Ushers, Protocol, Greeters and Welfare) \n 	Home cell / Care group 	Media 	Publicity 	Medical 	Shining Stars (Children) 	Teenagers 	Youth 	Discipleship 	Missions & Outreach 	Men & Women’s Fellowship 	Follow-up and Visitation ",
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
        title: 'YOUTH MINISTRY',
        text:
          "Investing in today's youth is very important to us in growing the body of Christ. Teaching them to grow in their relationship with the Lord, prepares them to serve Christ in all they do in turns nurturing the congregation and allow the Church to flourish.",
        cta: {
          as: 'a',
          label: '',
          href:
            '#',
        },
      },
      {
        ImgProps: {
          src: surrounding3,
          srcSet: `${gallery12} 1x, ${gallery12} 2x`,
        },
        title: 'CHOIR DEPARTMENT - TRIBE OF JUDAH (TOJ)',
        text:
          "Tribe of Judah (TOJ) as a department in Dabar International Christian Centre is a group of singers of the church with a profound passion for the gospel of Jesus Christ and a desire that His message be heard throughout the four corners of the earth. They are also known to be the praise and worship team. They lead the congregation with a powerful praise and worship, hymns and special numbers in all our services. This team is very essential for the growth of the ministry. TOJ sings beautiful and challenging music to praise God and edify the congregation. Through their ministrations, people experience true: • Healing • Peace • Joy • Freedom • A deep relationship with Christ. They have organized and hosted various concerts, trainings, and teachings. The team is comprised of committed and devoted males and females from all walks of life. ",
        cta: {
          as: '',
          label: '',
          href:
            '',
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
          text: 'Alawiye Samuel',
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
          text: '+234 08033338227, +234 08095277708',
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
      //onSubmit: values => window.alert(`Message sent ${JSON.stringify(values)}`),
      onSubmit: values => sendMail(values, "CONTACT FORM"),
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          placeholder: 'eg. John Doe',
          initialValue: '',
          prefix: <Icon icon={User} />,
        },
        {
          name: 'phone',
          label: 'Phone',
          placeholder: 'eg. 080-123-4567',
          initialValue: '',
          prefix: <Icon icon={Phone} />,
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'eg. john.doe@email.com',
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
    text: textToMultiline`Dabar International Christian Centre (DICC) has been operating in the country since 1990 even before it became a registered entity.\n\nOver the years, the Foundation has grown tremendously with great successes in organized village outreaches, conferences, and countless of non-profit initiatives to the benefit of humanity. The foundation has great advantage as a non-denominational group, covering different local churches, denominations and non-denominational assemblies spread across the length and breadth of the nation.`,
    cta: {
      to: 'about',
      childer: 'about',
      label: 'Learn more',
      
    },
    features: [
      {
        IconProps: {
          icon: TagAlt,
        },
        title: 'Our Vision',
        text:
          'Dabar International Christian Centre (DICC) exists to be a vibrant, loving and transforming church with a passion to see all nations enjoy abundant life in Jesus Christ.',
      },
      {
        IconProps: {
          icon: ThumbsUp,
        },
        title: 'Building leaders',
        text:
          'Spiritual integrity and faith is our first concern as an church, we dont just stand on decision to believe but on discipleship, so as to develop leaders to embrace and advance the true faith of Jesus in a hostile world',
      },
      {
        IconProps: {
          icon: ShieldCheck,
        },
        title: 'Our Mission',
        text:
          'To give the cities and nations abundant life through sound teaching, relational evangelism and contagious Christian lifestyle – Matthew.5:16.',
      },
      {
        IconProps: {
          icon: Award,
        },
        title: 'Our Mandate',
        text:
          'To be the penetrating voice of God to the nations for radical change, a shining light in dark small corners and everywhere...',
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

import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Welcome,
  About,
  Interior,
  Surroundings,
  Gallery,
  Contact,
  Footer,Location, Exterior
} from '@pagerland/themes/src/RealEstate/containers';

import preview from '@pagerland/themes/src/RealEstate/assets/preview.jpg';

import SEO from '../components/SEO';

const RealEstate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="DICC" />

    <Navbar />
    <Welcome name="home" />
    <About name="about" />
    <Interior name="interior" />
    <Exterior name="donate" />
    <Location name="location" />
  
    <Surroundings name="surroundings" />
    <Gallery name="gallery" />
    <Contact name="contact" />
    <Footer name="about-us" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: '#',
};

export default RealEstate;

import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Marker } from '@react-google-maps/api';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import GoogleMaps from '@pagerland/common/src/components/GoogleMaps';

import data from '../../data';
import { googleMapsStyle } from '../../styles';
import Pin from '../../assets/Pin.svg';

const Location = ({
  name,
  title,
  text,
  map,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GoogleMapsProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
    </Container>
    
    <GoogleMaps {...GoogleMapsProps} center={map.cords}>
      <Marker icon={Pin} position={map.cords} />
    </GoogleMaps>
  </Box>
);

Location.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  gallery: PropTypes.arrayOf(PropTypes.object),
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object.isRequired,
      title: PropTypes.node.isRequired,
      counter: PropTypes.shape({
        value: PropTypes.number.isRequired,
        unit: PropTypes.node,
      }),
    }),
  ),
  map: PropTypes.shape({
    cords: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
  CountersWrapperProps: PropTypes.object,
  CountersGridProps: PropTypes.object,
  CounterProps: PropTypes.object,
  CounterIconProps: PropTypes.object,
  CounterValueProps: PropTypes.object,
  CounterTitleProps: PropTypes.object,
  GoogleMapsProps: PropTypes.object,
};

Location.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    pt: 80,
    pb: 0,
  },
  CaptionProps: {
    maxWidth: 736,
    mx: 'auto',
  },
  TitleProps: {
    accent: 'after',
    as: 'h2',
    variant: 'h2',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    mb: 110,
    color: 'gray.1',
  },
  CountersWrapperProps: {
    py: {
      _: 48,
      md: 64,
      lg: 160,
    },
    bg: 'gray.0',
  },
  CountersGridProps: {
    maxWidth: 950,
    mx: 'auto',
    gridTemplateColumns: {
      _: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gridGap: {
      _: '32px',
      lg: '64px',
    },
  },
  CounterProps: {
    flexBox: true,
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    alignItems: 'center',
    textAlign: {
      _: 'center',
      lg: 'left',
    },
  },
  CounterIconProps: {
    fontSize: 48,
    color: 'brand',
    mr: {
      _: 0,
      lg: 3,
    },
    mb: {
      _: 3,
      lg: 0,
    },
  },
  CounterValueProps: {
    variant: 'h3',
    color: 'gray.6',
  },
  CounterTitleProps: {
    color: 'gray.2',
    variant: 'h4',
    mt: -7,
  },
  GoogleMapsProps: {
    mapContainerStyle: {
      width: '100%',
      height: 480,
    },
    zoom: 13,
    options: {
      styles: googleMapsStyle,
    },
  },
  ...data.location,
};

export default Location;

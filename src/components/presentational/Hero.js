import React from 'react';
import PropTypes from 'prop-types';

import './Hero.scss';

const Hero = ({ title, subtitle }) => (
  <div className="Hero">
    <h1 className="Hero__title">
      {title}
    </h1>
    <p className="Hero__subtitle">
      {subtitle}
    </p>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;

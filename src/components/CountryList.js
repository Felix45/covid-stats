import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const CountryList = (props) => {
  const {
    countries, vaccines, continent, nations,
  } = props;

  return (
    Object.keys(countries).map((country) => {
      if (countries[country].All.continent === continent
          && countries[country].All.show) {
        return (
          <Country
            key={uuidv4()}
            nation={countries[country].All}
            nations={nations}
            vaccines={vaccines}
          />
        );
      }
      return '';
    }));
};

CountryList.propTypes = {
  countries: PropTypes.instanceOf(Object).isRequired,
  continent: PropTypes.string.isRequired,
  nations: PropTypes.instanceOf(Array).isRequired,
};

export default CountryList;

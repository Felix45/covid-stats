import React from 'react';
import PropTypes from 'prop-types';
import Continent from './Continent';

const ContinentList = (props) => {
  const { regions } = props;
  return (
    regions.map((region) => (
      <Continent key={region.id} region={region} />
    ))
  );
};

ContinentList.propTypes = {
  regions: PropTypes.instanceOf(Array).isRequired,
};

export default ContinentList;

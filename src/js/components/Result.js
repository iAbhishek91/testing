import React from 'react';
import PropTypes from 'prop-types';

const Result = props => {
  return <p className="result">{props.result}</p>;
};

Result.defaultProps = {
  result: '0'
};

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;

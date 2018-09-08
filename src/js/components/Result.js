import React from 'react';
import PropTypes from 'prop-types';

const Result = props => {
  return (
    <textarea className="result" disabled="true">
      {props.result}
    </textarea>
  );
};

Result.defaultProps = {
  result: '0'
};

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;

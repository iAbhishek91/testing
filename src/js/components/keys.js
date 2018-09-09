import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const Keys = props => {
  return (
    <Fragment>
      <button
        className={props.type}
        onClick={props.handler}
        id={props.id}
        type="button"
      >
        {props.value}
      </button>
    </Fragment>
  );
};

Keys.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Keys;

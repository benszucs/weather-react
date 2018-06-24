import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  return(
    <div>
      <form onSubmit={props.getWeatherData} class="py-4 form-inline justify-content-center">
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>
        <button>Get Weather</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
};

export default Form;

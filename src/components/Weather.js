import React from 'react';
import PropTypes from 'prop-types';

const Weather = props => {
  return(
    <div>
      { props.error &&
        <p className="text-center">{props.error}</p>
      }
      <div class="row">
      { props.city && props.country &&
        <div class="col">
          <div className="text-center">
            <h5 className="title">Location:</h5>
            <p>{props.city}</p>
            <p>{props.country}</p>
          </div>
        </div>
      }

      <div class="col">
      { props.temperature && props.humidity && props.description &&

          <div className="text-center">
            <h5 className="title">Current Weather:</h5>
            <p>Temperature: {props.temperature}&#176;C</p>
            <p>Humidity: {props.humidity}%</p>
            <p>Description: {props.description}</p>
          </div>
      }
      { props.city && props.country &&
        <form onSubmit={props.threeDayWeatherData}>
          <button className="d-flex mx-auto my-4">Next Three Days</button>
        </form>
      }
      </div>
      </div>
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
  threeDayWeatherData: PropTypes.func
};

export default Weather;

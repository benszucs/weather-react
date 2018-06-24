import React from 'react';
import PropTypes from 'prop-types';

const ThreeDayWeather = props => {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  return (
    <div>
      { props.temp && props.hum && props.desc &&
        <div className="row p-4 topBorder">
              <div className="col text-center">
                <h5 className="title">Weather: {day + 1}/{month}/{year}</h5>
                <p>Temperature: {props.temp[0]}&#176;C</p>
                <p>Humidity: {props.hum[0]}%</p>
                <p>Description: {props.desc[0]}</p>
              </div>

              <div className="col text-center">
                <h5 className="title">Weather: {day + 2}/{month}/{year}</h5>
                <p>Temperature: {props.temp[1]}&#176;C</p>
                <p>Humidity: {props.hum[1]}%</p>
                <p>Description: {props.desc[1]}</p>
              </div>

              <div className="col text-center">
                <h5 className="title">Weather: {day + 3}/{month}/{year}</h5>
                <p>Temperature: {props.temp[2]}&#176;C</p>
                <p>Humidity: {props.hum[2]}%</p>
                <p>Description: {props.desc[2]}</p>
              </div>
            </div>
      }
    </div>
  );
};

ThreeDayWeather.propTypes = {
  temp: PropTypes.array,
  hum: PropTypes.array,
  desc: PropTypes.array,
};

export default ThreeDayWeather;

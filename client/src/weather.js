import React from "react";
import { Row, Col, Table } from "reactstrap";

const Weather = (props) => {
  const { data } = props;

  if (!data) return <div></div>;

  return (
    <Row className="weather">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>{data.name}</h2>
        <img
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt="weather icon"
        />
        <span>{data.weather[0].main}</span>&nbsp
        <span>{Math.floor(data.main.temp)}&deg;F</span>
        <table>
          <tbody>
            <tr>
              <td>wind</td>
              <td>{Math.floor(data.wind.speed)} km/h</td>
            </tr>
            <tr>
              <td>pressure</td>
              <td>{Math.floor(data.main.pressure)} hPa</td>
            </tr>
            <tr>
              <td>humidity</td>
              <td>{Math.floor(data.main.humidity)} %</td>
            </tr>
            <tr>
              <td>min temp</td>
              <td>{Math.floor(data.main.temp_min)}&deg;F</td>
            </tr>
            <tr>
              <td>max temp</td>
              <td>{Math.floor(data.main.temp_min)}&deg;F</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default Weather;

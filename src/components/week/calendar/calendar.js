import React from "react";
import DatePicker from "react-datepicker";
import "./calendar.css"

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { getUTCDate } from "../../../utils/index"

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: getUTCDate(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  render() {
    fetch(`http://localhost:8080/weeks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      dataType: 'json',
      body: [],
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

    return (
      <div>
        <div className="text-center">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <DatePicker
                selected={ this.state.startDate }
                onChange={ this.handleChange }
                showTimeSelect
                name="startDate"
                timeIntervals={60}
                timeCaption="time"
                dateFormat="dd MMM, yyyy HH"
                className="form-control"
              />
            </div>
            <button id="initialDateButton" className="btn btn-primary">Fecha de inicio</button>
            <div className="form-group">
              <DatePicker
                selected={ this.state.startDate }
                onChange={ this.handleChange }
                showTimeSelect
                name="startDate"
                timeIntervals={60}
                timeCaption="time"
                dateFormat="dd MMM, yyyy HH"
                className="form-control"
              />
            </div>
            <button id="secondDateButton" className="btn btn-primary">Fecha de finalización</button>
            <div>
                <button className="btn btn-primary " name="submit" type="submit">
                Guardar
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default Calendar;

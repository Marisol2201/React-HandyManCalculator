import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Calendar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
    }

    render() {
        return (
        <div>
            <div className="text-center">
                <form onSubmit={ this.onFormSubmit }>
                    <div className="form-group">
                        <DatePicker
                            selected={ this.state.startDate }
                            onChange={ this.handleChange }
                            showTimeSelect
                            name="startDate"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary">Fecha de inicio</button>
                </form>
            </div>
        </div>
    );
    }
}

export default Calendar;

import React, { Component } from 'react';

class Technicians extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            technician: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/technicians')
        .then(response=>response.json())
        .then(technician=>this.setState({
            technician: technician
        }))
    }

    render() {
        let technicianView = [];
        this.state.technician.forEach(function(tech){
            technicianView.push(
                <h3 id="technicianName">Nombre: {tech.name}</h3>
            )
        });
        return (
            <div>
                {technicianView}
            </div>
        );
    }
}

export default Technicians;

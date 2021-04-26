import React, { Component } from 'react';

class ServiceType extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            serviceType: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/services')
        .then(response=>response.json())
        .then(serviceType=>this.setState({
            serviceType: serviceType
        }))
    }

    render() {
        let serviceTypeView = [];
        this.state.serviceType.forEach(function(service){
            serviceTypeView.push(
                <h5>Servicio: {service.name}</h5>
            )
        });
        return (
            <div>
                {serviceTypeView}
            </div>
        );
    }
}

export default ServiceType;

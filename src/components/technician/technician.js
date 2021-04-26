import React, { Component } from 'react';

class Technicians extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/technicians')
        .then(response=>response.json())
        .then(items=>this.setState({
            done: true,
            items: []
        }))
    }

    render() {
        const renderItems = this.state.items.map(function(item, i) {
            return <li key={i}>{item}</li>
          });
        return(
            <>
                <ul>
                    {renderItems}
                </ul>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        );
    }
}

export default Technicians;

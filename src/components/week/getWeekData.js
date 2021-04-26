import React, { Component } from 'react';

class GetWeekData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }
    
    componentDidMount() {
        fetch(`http://localhost:8080/weeks`, {
            method: 'GET'
        })
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items
        }))
    }

    render() {
        const Data = (props) => (
            <ul>
                {
                    props.items.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        )
        return(
            <div>
                {this.state.items.isArray ? (
                    <Data items={this.state.items} />
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>
        )
    }
}

export default GetWeekData;


// import React from "react";

// export function GetWeekData() {
//     const [operation, setOperation] = React.useState({
//         loading: false,
//         data: {},
//         error: undefined,
//     });

//     React.useEffect(() => {
//         setOperation({
//         loading: true,
//         data: {},
//         error: undefined,
//         });
//     fetch(`http://localhost:8080/weeks/`, {
//         method: "GET",
//     })
//         .then((response) => response.json())
//         .then((json) =>
//             setOperation({
//             loading: false,
//             data: json,
//             error: undefined,
//             })
//         )
//         .catch((error) =>
//             setOperation({
//             loading: false,
//             data: {},
//             error,
//             })
//         );
//     }, [],
// );


// return (operation, 
//     <button>Holi</button>
// )}

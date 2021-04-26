import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

class GetWeekData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            week: []
        };
    }
    
    componentDidMount() {
        fetch(`http://localhost:8080/weeks`)
        .then(response=>response.json())
        .then(week=>this.setState({week: week}))
    }

    render() {
        let weekView = [];
        this.state.week.forEach(function(w){
            weekView.push(
                <Table>
                    <Thead>
                        <Tr>
                        <Th>Semana</Th>
                        <Th>Horas semana</Th>
                        <Th>Normales</Th>
                        <Th>Día normales</Th>
                        <Th>Noche normales</Th>
                        <Th>Dominicales normales</Th>
                        <Th>Extra</Th>
                        <Th>Día extra</Th>
                        <Th>Noche Extra</Th>
                        <Th>Dominicales extra</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td>{w.id}</Td>
                        <Td>{w.totalWeekHours}</Td>
                        <Td>{w.totalWeekNormalHours}</Td>
                        <Td>{w.weekNormalDaytimeHours}</Td>
                        <Td>{w.weekNormalNightHours}</Td>
                        <Td>{w.sundayNormalHours}</Td>
                        <Td>{w.totalWeekExtraHours}</Td>
                        <Td>{w.weekExtraDaytimeHours}</Td>
                        <Td>{w.weekExtraNightHours}</Td>
                        <Td>{w.sundayExtraHours}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            )
        });
        return (
            <div>
                <ul>
                    {weekView}
                </ul>
            </div>
        );
    }
}

export default GetWeekData;

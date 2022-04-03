import { useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { InputsContext } from '../../contexts/inputs.context';

function YearlyBreakdown() {

    const { inputs } = useContext(InputsContext);

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Starting amount</th>
                    <th>Annual contribution</th>
                    <th>Total contributions</th>
                    <th>Interest earned</th>
                    <th>Total interest earned</th>
                    <th>End balance</th>
                </tr>
            </thead>
            <tbody>
                {calculateTableData(inputs).map(data => {
                    return (
                        <tr>
                            <td>{data.year}</td>
                            <td>${data.startAmount}</td>
                            <td>Annual contribution</td>
                            <td>Total contributions</td>
                            <td>Interest earned</td>
                            <td>Total interest earned</td>
                            <td>End balance</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

const calculateTableData = (inputs) => {
    const { years, startAmount } = inputs;
    const startYear = new Date().getFullYear();
    const result = [];

    for (var i = 0; i < years; i++) {
        const year = startYear + i;
        result.push({
            year: year,
            startAmount: startAmount
        });
        console.log(year);
    }

    return result;
}

export default YearlyBreakdown;
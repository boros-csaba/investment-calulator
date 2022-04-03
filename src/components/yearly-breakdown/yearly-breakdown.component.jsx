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
                            <td>${data.startAmount.toLocaleString()}</td>
                            <td>${data.additionalContribution.toLocaleString()}</td>
                            <td>${data.totalContribution.toLocaleString()}</td>
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
    const { years, startAmount, additionalContribution, frequency } = inputs;
    const startYear = new Date().getFullYear();
    const result = [];

    console.log(frequency);

    let totalContribution = 0;
    for (var i = 0; i < years; i++) {
        const year = startYear + i;

        let contribution = +additionalContribution;;
        if (+frequency === 1) contribution = +additionalContribution * 52
        if (+frequency === 2) contribution = +additionalContribution * 26;
        if (+frequency === 3) contribution = +additionalContribution * 12;
        if (+frequency === 4) contribution = +additionalContribution * 2;

        totalContribution += contribution;
        result.push({
            year: year,
            startAmount: +startAmount,
            additionalContribution: +contribution,
            totalContribution: +totalContribution
        });
    }

    return result;
}

export default YearlyBreakdown;
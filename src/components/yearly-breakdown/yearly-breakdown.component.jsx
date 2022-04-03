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
                        <tr key={data.year}>
                            <td>Year {data.year}</td>
                            <td>${(+data.startAmount.toFixed(0)).toLocaleString()}</td>
                            <td>${(+data.additionalContribution.toFixed(0)).toLocaleString()}</td>
                            <td>${(+data.totalContribution.toFixed(0)).toLocaleString()}</td>
                            <td>${(+data.interestEarned.toFixed(0)).toLocaleString()}</td>
                            <td>${(+data.totalInterestEarned.toFixed(0)).toLocaleString()}</td>
                            <td>${(+data.endBalance.toFixed(0)).toLocaleString()}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

const calculateTableData = (inputs) => {
    const { years, startAmount, additionalContribution, frequency, rateOfReturn } = inputs;
    const result = [];

    let totalContribution = 0;
    let endBalance = +startAmount;
    for (var i = 0; i < years; i++) {
        const year = 1 + i;

        let contribution = +additionalContribution;
        let interestEarned = endBalance * rateOfReturn/100;

        if (+frequency === 1) {
            contribution = +additionalContribution * 52
        }
        if (+frequency === 2) {
            contribution = +additionalContribution * 26;
        }
        if (+frequency === 3) {
            contribution = +additionalContribution * 12;
        }
        if (+frequency === 4) {
            contribution = +additionalContribution * 2;
        }

        totalContribution += contribution;
        endBalance += contribution + interestEarned;
        result.push({
            year: year,
            startAmount: +startAmount,
            additionalContribution: +contribution,
            totalContribution: +totalContribution,
            interestEarned: interestEarned,
            totalInterestEarned: interestEarned,
            endBalance: endBalance
        });
    }

    return result;
}

export default YearlyBreakdown;
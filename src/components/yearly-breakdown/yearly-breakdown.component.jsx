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
    let yearStartAmount = startAmount;
    let totalInterest = 0;
    for (var i = 0; i < years; i++) {
        const year = 1 + i;
        yearStartAmount = +endBalance;

        let periods = 1;
        if (+frequency === 1) periods = 52;
        if (+frequency === 2) periods = 26;
        if (+frequency === 3) periods = 12;
        if (+frequency === 4) periods = 2;

        const baseInterest = endBalance * rateOfReturn/100;
        const interest = baseInterest + additionalContribution * rateOfReturn/100/periods * 6*(12+1);
        totalInterest += interest;

        let contribution = +additionalContribution * periods;

        totalContribution += contribution;
        endBalance += contribution + interest;

        result.push({
            year: year,
            startAmount: +yearStartAmount,
            additionalContribution: +contribution,
            totalContribution: +totalContribution,
            interestEarned: interest,
            totalInterestEarned: totalInterest,
            endBalance: endBalance
        });
    }

    return result;
}

export default YearlyBreakdown;
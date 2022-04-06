import Table from 'react-bootstrap/Table'

const YearlyBreakdown = ({data}) => {
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
                {data.map(data => {
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

export default YearlyBreakdown;
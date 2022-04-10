import './App.css';
import { useContext } from 'react';
import BarChart from './components/bar-chart/bar-chart.component';
import Inputs from './components/inputs/inputs.component';
import YearlyBreakdown from './components/yearly-breakdown/yearly-breakdown.component';
import { InputsContext } from './contexts/inputs.context';

function App() {

  const { inputs } = useContext(InputsContext);
  const calculations = getCalculations(inputs);

  return (
    <div className="App">
      <Inputs />
      <BarChart data={calculations} />
      <YearlyBreakdown data={calculations} />
    </div>
  );
}

const getCalculations = (inputs) => {
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
      const interest = baseInterest + additionalContribution * rateOfReturn/100/periods * periods/2*(periods+1);
      totalInterest += interest;

      let contribution = +additionalContribution * periods;

      totalContribution += contribution;
      endBalance += contribution + interest;

      result.push({
          year: year,
          initialAmount: +startAmount,
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

export default App;

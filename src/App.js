import './App.css';
import BarChart from './components/bar-chart/bar-chart.component';
import Inputs from './components/inputs/inputs.component';
import YearlyBreakdown from './components/yearly-breakdown/yearly-breakdown.component';

function App() {
  return (
    <div className="App">
      <Inputs />
      <BarChart />
      <YearlyBreakdown />
    </div>
  );
}

export default App;

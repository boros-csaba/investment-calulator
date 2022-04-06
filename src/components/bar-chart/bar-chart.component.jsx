import { useEffect } from 'react';
import * as d3 from 'd3'

const BarChart = ({data}) => {



    useEffect(() => {
        const height = 400;

        const svg = d3.select('svg'); 
        svg.selectAll('*').remove();
        const chart = svg.append('g')
            .attr('transform', 'translate(50, 50)');

        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, Math.max(...data.map(d => d.endBalance))]);
        chart.append('g')
            .call(d3.axisLeft(yScale));

         const xScale = d3.scaleBand()
            .range([0, 1000])
            .domain(data.map(d => `Year ${d.year}`))
            .padding(0.2);
        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale)); 

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', d => yScale(d.endBalance))
            .attr('height', d => height - yScale(d.endBalance))
            .attr('width', xScale.bandwidth());
    }, [data]);

    return (
        <svg id="bar-chart" width="100%" height="500px"></svg>
    );
}

export default BarChart;
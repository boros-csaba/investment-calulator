import { useEffect } from 'react';
import * as d3 from 'd3'

const BarChart = ({data}) => {



    useEffect(() => {
        const width = 1000;
        const height = 400;

        const svg = d3.select('svg');
        svg.style("display", "block")
            .style("margin", "auto") 
        svg.selectAll('*').remove();
        const chart = svg.append('g')
            .attr('transform', 'translate(100, 50)');

        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, Math.max(...data.map(d => d.endBalance))]);
        chart.append('g')
            .call(d3.axisLeft(yScale));

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(data.map(d => `Year ${d.year}`))
            .padding(0.2);
        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale)); 

        const axis = chart.append('g')
            .call(d3.axisLeft()
                .scale(yScale)
                .tickSize(-width, 0, 0)
                .tickFormat(''))
        axis.selectAll('line')
            .attr('stroke', '#cccccc');

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', d => yScale(d.endBalance))
            .attr('height', d => height - yScale(d.endBalance))
            .attr('width', xScale.bandwidth())
            .attr('fill', '#8bc34a');

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', d => yScale(d.totalContribution))
            .attr('height', d => height - yScale(d.totalContribution - data[0].startAmount))
            .attr('width', xScale.bandwidth())
            .attr('fill', '#03a9f4');

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', yScale(data[0].startAmount))
            .attr('height', height - yScale(data[0].startAmount))
            .attr('width', xScale.bandwidth())
            .attr('fill', '#fbc02d');
    }, [data]);

    return (
        <div style={{ margin: '0 auto 0 auto', maxWidth: '1000px', padding: '0 5% 0 0'}}>
            <svg id="bar-chart" width="100%" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"></svg>
        </div>
    );
}

export default BarChart;
import { useEffect } from 'react';
import * as d3 from 'd3'

import { BarChartContainer, BarChartTooltipContainer } from './bar-chart.styles'

const BarChart = ({data}) => {

    useEffect(() => {
        const width = 800;
        const height = 450;

        const svg = d3.select('#bar-chart');
        svg.style('display', 'block')
            .style('margin', 'auto') 
        svg.selectAll('*').remove();
        const chart = svg.append('g')
            .attr('transform', 'translate(100, 0)');

        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, Math.max(...data.map(d => d.endBalance * 1.05))]);
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

        d3.select('#bar-chart-tooltip')
            .style('visibility', 'hidden');

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', d => yScale(d.endBalance))
            .attr('height', d => height - yScale(d.endBalance))
            .attr('width', xScale.bandwidth())
            .attr('fill', '#8bc34a')
            .on('mouseover', mouseOverHandler)
            .on('mousemove', mouseMoveHandler)
            .on('mouseout', mouseOutHandler);

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', d => yScale(data[0].startAmount + d.totalContribution))
            .attr('height', d => height - yScale(d.totalContribution))
            .attr('width', xScale.bandwidth())
            .attr('fill', '#03a9f4')
            .on('mouseover', mouseOverHandler)
            .on('mousemove', mouseMoveHandler)
            .on('mouseout', mouseOutHandler);

        chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(`Year ${d.year}`))
            .attr('y', yScale(data[0].startAmount))
            .attr('height', height - yScale(data[0].startAmount))
            .attr('width', xScale.bandwidth())
            .attr('fill', '#fbc02d')
            .on('mouseover', mouseOverHandler)
            .on('mousemove', mouseMoveHandler)
            .on('mouseout', mouseOutHandler);
    }, [data]);

    return (
        <BarChartContainer>
            <BarChartTooltipContainer id='bar-chart-tooltip'>
                <div className="tooltip-labels">
                    <div className="total-interest">Total interest earned: </div>
                    <div className="total-contributions">Total contributions: </div>
                    <div className="starting-amount">Starting amount: </div>
                    <div>End balance: </div>
                </div>
                <div className="tooltip-values">
                    <div className="total-interest-value"></div>
                    <div className="total-contributions-value"></div>
                    <div className="starting-amount-value"></div>
                    <div><b className="end-balance-value"></b></div>
                </div>
            </BarChartTooltipContainer>
            <svg id="bar-chart" width="100%" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"></svg>
        </BarChartContainer>
    );
}

const mouseOverHandler = (event, item) => {
    const tooltip = d3.select('#bar-chart-tooltip');
    tooltip.style('visibility', 'visible')
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 80}px`);
    d3.select('.total-interest-value')
        .html(`$${(+item.totalInterestEarned.toFixed(0)).toLocaleString()}`);
    d3.select('.total-contributions-value')
        .html(`$${(+item.totalContribution.toFixed(0)).toLocaleString()}`);
    d3.select('.starting-amount-value')
        .html(`$${(+item.initialAmount.toFixed(0)).toLocaleString()}`);
    d3.select('.end-balance-value')
        .html(`$${(+item.endBalance.toFixed(0)).toLocaleString()}`);
}

const mouseMoveHandler = (event) => {
    const tooltip = d3.select('#bar-chart-tooltip');
    tooltip.style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 80}px`);
}

const mouseOutHandler = () => {
    const tooltip = d3.select('#bar-chart-tooltip');
    tooltip.style('visibility', 'hidden');
}

export default BarChart;
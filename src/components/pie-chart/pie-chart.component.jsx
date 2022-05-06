import { useEffect } from "react"
import * as d3 from 'd3'

import { PieChartContainer } from "./pie-chart.styles";

const PieChart = ({ data }) => {
    const lastYearData = data[data.length - 1];

    useEffect(() => {
        const percentages =  [
            {
                id: 'pie-chart-value-1',
                name: 'Total interest earned',
                color: '#8bc34a',
                value: lastYearData.totalInterestEarned/lastYearData.endBalance * 100,
                displayValue: lastYearData.totalInterestEarned
            },
            {
                id: 'pie-chart-value-2',
                name: 'Total contributions',
                color: '#03a9f4',
                value: lastYearData.totalContribution/lastYearData.endBalance * 100,
                displayValue: lastYearData.totalContribution
            },
            {
                id: 'pie-chart-value-3',
                name: 'Starting amount',
                color: '#fbc02d',
                value: data[0].startAmount/lastYearData.endBalance * 100,
                displayValue: data[0].startAmount
            }
        ];

        const svg = d3.select('#pie-chart')
        svg.selectAll('*').remove();
        const width = svg.attr('width');
        const height = svg.attr('height');
        const radius = width * 0.45;
        const hoverRadius = width * 0.5;

        var g = svg.append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const scale = d3.scaleOrdinal()
            .domain(percentages)
            .range(percentages.map(d => d.color));

        const pie = d3.pie().value((d) => d.value);
        
        const arc = g.selectAll('arc')
            .data(pie(percentages))
            .enter();

        const path = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);
        const hoverPath = d3.arc()
            .outerRadius(hoverRadius)
            .innerRadius(0);

        arc.append('path')
            .attr('d', path)
            .attr('fill', (d) => scale(d.data.name));

        arc.append('path')
            .attr('d', hoverPath)
            .attr('id', (d) => d.data.id)
            .attr('fill', 'transparent')
            .on('mouseover', mouseOverHandler)
            .on('mouseout', mouseOutHandler)
            .on('mousemove', mouseMoveHandler);

    }, data);

    return (
        <PieChartContainer>
            <div className="pie-chart-tooltip">
                <span className="pie-chart-tooltip-label">Start amount</span><br />
                <b className="pie-chart-tooltip-value">$12345</b>
            </div>
            <svg id="pie-chart" width="230" height="230"></svg>
            <div className="pie-chart-details">
                <div className="pie-chart-details-labels">
                    <div className="total-interest">Total interest earned: </div>
                    <div className="total-contributions">Total contributions: </div>
                    <div className="starting-amount">Starting amount: </div>
                    <div><b>Total: </b></div>
                </div>
                <div className="pie-chart-details-values">
                    <div>${(+lastYearData.totalInterestEarned.toFixed(0)).toLocaleString()}</div>
                    <div>${(+lastYearData.totalContribution.toFixed(0)).toLocaleString()}</div>
                    <div>${(+data[0].startAmount.toFixed(0)).toLocaleString()}</div>
                    <div><b>${(+lastYearData.endBalance.toFixed(0)).toLocaleString()}</b></div>
                </div>
            </div>
        </PieChartContainer>
    )
}

const mouseOverHandler = (event, item) => {
    d3.select(`#${item.data.id}`)
        .attr('fill', item.data.color);
    const tooltip = d3.select('.pie-chart-tooltip');
    tooltip.style('visibility', 'visible')
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 80}px`);
    d3.select('.pie-chart-tooltip-label')
        .html(item.data.name);
    d3.select('.pie-chart-tooltip-value')
        .html(`$${(+item.data.displayValue.toFixed(0)).toLocaleString()}`);
}

const mouseMoveHandler = (event) => {
    const tooltip = d3.select('.pie-chart-tooltip');
    tooltip.style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 80}px`);
}

const mouseOutHandler = (_, item) => {
    d3.select(`#${item.data.id}`)
        .attr('fill', 'transparent');
    const tooltip = d3.select('.pie-chart-tooltip');
        tooltip.style('visibility', 'hidden');
}

export default PieChart
import { zip } from "d3";
import { useEffect } from "react"
import * as d3 from 'd3'

const PieChart = ({ data }) => {
    
    useEffect(() => {
        const percentages = [
            {
                id: 'pie-chart-value-1',
                name: 'x',
                color: '#8bc34a',
                value: 20
            },
            {
                id: 'pie-chart-value-2',
                name: 'y',
                color: '#03a9f4',
                value: 30
            },
            {
                id: 'pie-chart-value-3',
                name: zip,
                color: '#fbc02d',
                value: 50
            }
        ];

        const svg = d3.select('#pie-chart')
        svg.selectAll('*').remove();
        const width = svg.attr('width');
        const height = svg.attr('height');
        const radius = width/3;
        const hoverRadius = width * 2/5;

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
            .on('mouseout', mouseOutHandler);

    }, data);

    return (
        <div className="pie-chart-container">
            <svg id="pie-chart" width="300" height="300"></svg>
        </div>
    )
}

const mouseOverHandler = (_, item) => {

    console.log(item.data);
    d3.select(`#${item.data.id}`)
        .attr('fill', item.data.color);
}

const mouseOutHandler = (_, item) => {

    console.log(item.data);
    d3.select(`#${item.data.id}`)
        .attr('fill', 'transparent');
}

export default PieChart
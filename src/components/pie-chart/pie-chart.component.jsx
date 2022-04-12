import { zip } from "d3";
import { useEffect } from "react"
import * as d3 from 'd3'

const PieChart = ({ data }) => {
    
    useEffect(() => {
        const percentages = [
            {
                name: 'x',
                value: 20
            },
            {
                name: 'y',
                value: 30
            },
            {
                name: zip,
                value: 50
            }
        ];

        const svg = d3.select('#pie-chart')
        svg.selectAll('*').remove();
        const width = svg.attr('width');
        const height = svg.attr('height');
        const radius = 200;

        var g = svg.append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const scale = d3.scaleOrdinal()
            .domain(percentages)
            .range(['#8bc34a', '#03a9f4', '#fbc02d']);

        const pie = d3.pie().value((d) => d.value);
        
        const arc = g.selectAll('arc')
            .data(pie(percentages))
            .enter();

        const path = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);

        arc.append('path')
            .attr('d', path)
            .attr('fill', (d) => scale(d.data.name));

    }, data);

    return (
        <svg id="pie-chart" width="500" height="400"></svg>
    )
}

export default PieChart
import styled from 'styled-components'

export const PieChartContainer = styled.div`
    padding: 20px;
    margin: 0 50px;

    .pie-chart-tooltip {
        background-color: #fafbfc;
        visibility: hidden;
        position: absolute;
        opacity: 0.95;
        padding: 10px;
        vertical-align: middle;
        border-radius: 5px;
        font-size: 13px;
    }

    .pie-chart-details {
        font-size: 13px;
        min-width: 250px;

        .pie-chart-details-labels {
            float: left;

            div {
                display: flex;
                align-items: center;

                &::before {
                    content: '•';
                    font-weight: bold;
                    font-size: 35px;
                    height: 20px;
                    display: inline-block;
                    margin: -34px 5px 5px 5px;
                }

                &.total-interest::before {
                    color: #8bc34a;
                }

                &.total-contributions::before {
                    color: #03a9f4;
                }

                &.starting-amount::before {
                    color: #fbc02d;
                }
            }
        }

        .pie-chart-details-values {
            margin-left: 10px;
            float: left;
            text-align: right;
        }
    }
`
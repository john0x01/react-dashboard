import React from 'react'
import axios from 'axios'

import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

import { filterByName } from '../../data/filterByName'
import { lastSeven } from '../../data/lastSeven'

import { baseApiUrl } from '../../global'

export default class BarsChart extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get(baseApiUrl)
            .then(response => {
                let products = (this.props.period === 'monthly') ?
                    filterByName(response.data) : filterByName(lastSeven(response.data))

                this.setState({
                    products: products
                })
            })

    }

    render() {


        return (
            <React.Fragment>
                <VictoryChart
                    domainPadding={20}
                    >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                    />

                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => `R$${x / 1000000}M`}
                    />
                    
                    <VictoryBar
                        
                        data={
                            this.state.products.map(product => ({
                                x: product.name.split(' ')[0], y: product.revenue
                            }))
                        }
                    />
                </VictoryChart>
            </React.Fragment>

        )
    }
}
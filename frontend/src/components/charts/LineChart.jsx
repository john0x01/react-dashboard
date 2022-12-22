import React from 'react'
import axios from 'axios'

import { VictoryLine, VictoryChart } from 'victory'
import { dailys } from '../../data/dailys'
import { baseApiUrl } from '../../global'

export default class LineChart extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get(baseApiUrl)
            .then(response => {
                const data = response.data

                this.setState({
                    products: dailys(data, 30)
                })
            })

    }

    render() {

        console.log(this.state.dailys)
        return (
            <React.Fragment>
            {/* //     <VictoryChart */}
            {/* //         domainPadding={20}
            //         >
            //         <VictoryAxis */}
            {/* //             tickValues={[1, 2, 3, 4]}
            //         />

            //         <VictoryAxis
            //             dependentAxis
            //             tickFormat={(x) => `R$${x / 1000000}M`}
            //         />
                    
            //         <VictoryBar
                        
            //             data={
            //                 this.state.products.map(product => ({
            //                     x: product.name.split(' ')[0], y: product.revenue
            //                 }))
            //             }
            //         />
            //     </VictoryChart> */}
            </React.Fragment>

        )
    }
}
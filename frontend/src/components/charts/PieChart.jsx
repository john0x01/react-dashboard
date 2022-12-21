import React from 'react'
import axios from 'axios'

import { VictoryPie, VictoryLabel } from 'victory'

import { filterByName } from '../../data/filterByName'
import { getTotal } from '../../data/total'

const baseApiUrl = 'http://localhost:3001/sales'

export default class Chart extends React.Component {

    state = {
        products: [],
        total: {}
    }
    componentDidMount() {
        axios.get(baseApiUrl)
            .then(response => {
                const products = filterByName(response.data)
                const total = getTotal(products)

                this.setState({
                    products: products,
                    total: total
                })
            })
        
    }

    render() {
        console.log(this.state.total.totalQtde)
        return (
            <React.Fragment>
                <VictoryPie 
                    innerRadius={100}
                    
                    data={
                        this.state.products.map(product => ({
                            x: product.name, y: (product.qtde / this.state.total.totalQtde) * 100
                        }))
                    }
                    labels={({datum}) => datum.x.split(' ')[0]}
                    labelComponent={
                        <VictoryLabel 
                            style={[
                                { fontSize: 16, fontWeight: 700}
                            ]}
                        />
                    }
                    
                />
            </React.Fragment>

        )
    }
}
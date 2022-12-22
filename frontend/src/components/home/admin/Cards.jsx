import React from 'react'
import axios from 'axios'

import { baseApiUrl } from '../../../global'
import { filterByName } from '../../../data/filterByName'
import { getTotal } from '../../../data/total'

import './Admin.css'

export default class Cards extends React.Component {
    state = {
        revenue: 0,
        soldProducts: 0,
        listedProducts: 0,
        paychek: 0
    }

    componentDidMount() {
        axios.get(baseApiUrl)
            .then(response => {
                const data = response.data
                this.setState({
                    revenue: getTotal(filterByName(data)).totalRevenue,
                    soldProducts: getTotal(filterByName(data)).totalQtde,
                    listedProducts: (filterByName(data)).length
                })
            })
    }

    render() {
        return (
            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <p className="text-primary-p">Faturamento</p> 
                        <h1 className="card-inner-h1">R${(this.state.revenue / 1000000).toFixed(2)}M</h1>
                    </div>
                </div>

                <div className="card">
                    <div className="card-inner">
                        <p className="text-primary-p">Produtos Vendidos</p> 
                        <h1 className="card-inner-h1">{this.state.soldProducts / 1000}K</h1>
                    </div>
                </div>

                <div className="card">
                    <div className="card-inner">
                        <p className="text-primary-p">Pagamento de Funcionários</p> 
                        <h1 className="card-inner-h1">{this.state.paychek}</h1>
                    </div>
                </div>

                <div className="card">
                    <div className="card-inner">
                        <p className="text-primary-p">Produtos Listados</p> 
                        <h1 className="font-bold text-title">{this.state.listedProducts}</h1>
                    </div>
                </div>
            </div>
        )
    }

}
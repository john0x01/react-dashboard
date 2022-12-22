import React, { useState } from 'react'
import Cards from './Cards'
import PieChart from '../../charts/PieChart'
import BarsChart from '../../charts/BarsChart'

import greetings from '../../../assets/greetings.svg'
import './Admin.css'

const ToggleTime = () => {
    const [toggleMonth, setToggle] = useState(1)
    const triggerToggle = () => {
        setToggle(toggleMonth == 1 ? -1 : 1)
    }


    return (
        <React.Fragment>
            <a href='#' onClick={triggerToggle} className={toggleMonth == 1 ? 'active-link' : ''}>Mensal</a>
            <a href='#' onClick={triggerToggle} className={toggleMonth == -1 ? 'active-link' : ''}>Últimos 7 dias</a>
            {toggleMonth == 1 ? <PieChart period="monthly"/> : ''}
            {toggleMonth == -1 ? <PieChart /> : ''}
        </React.Fragment>
    )
}

const ToggleTime2 = () => {
    const [toggleMonth, setToggle] = useState(1)
    const triggerToggle = () => {
        setToggle(toggleMonth == 1 ? -1 : 1)
    }


    return (
        <React.Fragment>
            <a href='#' onClick={triggerToggle} className={toggleMonth == 1 ? 'active-link' : ''}>Mensal</a>
            <a href='#' onClick={triggerToggle} className={toggleMonth == -1 ? 'active-link' : ''}>Últimos 7 dias</a>
            {toggleMonth == 1 ? <BarsChart period='monthly' />: ''}
            {toggleMonth == -1 ? <BarsChart /> : ''}
        </React.Fragment>
    )
}

const ToggleTime3 = () => {
    const [toggleSales, setToggle] = useState(true)
    const triggerToggle = () => {
        setToggle(!toggleSales)
    }


    return (
        <React.Fragment>
            <a href='#' onClick={triggerToggle} className={toggleSales ? 'active-link' : ''}>Vendas</a>
            <a href='#' onClick={triggerToggle} className={!toggleSales ? 'active-link' : ''}>Faturamento</a>
            {toggleSales ? <h1>Vendas</h1> : ''}
            {!toggleSales ? <h1>Faturamento</h1> : ''}
        </React.Fragment>
    )
}



const Admin = () => {
        return (
            <main>
                <div className="main-container">
                    <div className="main-title">
                        <img src={greetings} alt="hello" height={50} width={50} />
                        <div className="main-greeting">
                            <h1>Olá João</h1>
                            <p>Bem vindo ao seu painel</p>
                        </div>
                    </div>
                    
                    <Cards />

                    <div className="charts">
                        <div className="charts-left">
                            <div className="charts-title">
                                <div>
                                    <h1>Vendas Novembro 2022</h1>
                                    <div className="navbar-left">
                                        {ToggleTime()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="charts-right">
                            <div className="charts-title">
                                <div>
                                    <h1>Maiores Faturamentos</h1>
                                    <div className="navbar-left">
                                        {ToggleTime2()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="charts-bottom">
                            <div className="charts-title">
                                <div>
                                    <h1>Desempenho</h1>
                                    <div className="navbar-left">
                                        {ToggleTime3()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
}

export default Admin
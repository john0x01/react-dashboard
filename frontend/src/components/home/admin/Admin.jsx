import React, { useState } from 'react'
import PieChart from '../../charts/PieChart'
import BarsChart from '../../charts/BarsChart'
import { BiFile, BiDollar, BiArchive } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'

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

const ToggleTime2 = (period) => {
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



const Admin = () => {
        return (
            <main>
                <div className="main-container">
                    <div className="main-title">
                        <img src="" alt="hello" />
                        <div className="main-greeting">
                            <h1>Olá João</h1>
                            <p>Bem vindo ao seu painel</p>
                        </div>
                    </div>

                    <div className="main-cards">
                        <div className="card">
                            <BiFile color='blue' size="2em"/>
                            <div className="card-inner">
                                <p className="text-primary-p">Número de pedidos</p>
                                <span className="font-bold text-title">578</span>
                            </div>
                        </div>

                        <div className="card">
                            <BiDollar color='red' size="2em"/>
                            <div className="card-inner">
                                <p className="text-primary-p">Faturamento</p>
                                <span className="font-bold text-title">R$2.489</span>
                            </div>
                        </div>

                        <div className="card">
                            <BiArchive color='yellow' size="2em"/>
                            <div className="card-inner">
                                <p className="text-primary-p">Produtos Vendidos</p>
                                <span className="font-bold text-title">898</span>
                            </div>
                        </div>

                        <div className="card">
                            <FaBars color='green' size="2em"/>
                            <div className="card-inner">
                                <p className="text-primary-p">Produtos Listados</p>
                                <span className="font-bold text-title">5</span>
                            </div>
                        </div>
                    </div>

                    <div className="charts">
                        <div className="charts-left">
                            <div className="charts-left-title">
                                <div>
                                    <h1>Vendas Novembro 2022</h1>
                                    <div className="navbar-left">
                                        {ToggleTime()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="charts-right">
                            <div className="charts-right-title">
                                <div>
                                    <h1>Maiores Faturamentos</h1>
                                    <div className="navbar-left">
                                        {ToggleTime2()}
                                    </div>
                                </div>
                            </div>
                            
                        
                        </div>
                        <div className="lower-cards">
                            <div className="charts-right-cards">
                                <div className="card1">
                                    <h1>Calculadora</h1>
                                    <p>Produto mais vendido</p>
                                </div>

                                <div className="card2">
                                    <h1>+40%</h1>
                                    <p>De vendas diárias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
}

export default Admin
import PieChart from '../../charts/PieChart'

import './Admin.css'

import { BiFile, BiDollar, BiArchive, BiLineChart } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'

import React, { useState } from 'react'

const ToggleTime = (period) => {
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
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$2.489</span>
                        </div>
                    </div>

                    <div className="card">
                        <BiArchive color='yellow' size="2em"/>
                        <div className="card-inner">
                            <p className="text-primary-p">Número de produtos</p>
                            <span className="font-bold text-title">898</span>
                        </div>
                    </div>

                    <div className="card">
                        <FaBars color='green' size="2em"/>
                        <div className="card-inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
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
                                <h1>Médias de vendas/</h1>
                                <p>Goiânia, Goiás, BR</p>
                            </div>
                            <BiLineChart className='react-icon' />
                        </div>
                        
                        <div className="charts-right-cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2500,00</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$2500,00</p>
                            </div>

                            <div className="card3">
                                <h1>Custos</h1>
                                <p>R$2500,00</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$2500,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Admin
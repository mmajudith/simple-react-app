import React from 'react'
import Header from './Header'
import Balance from './Balance'
import SelectCurrency from './SelectCurrency'
import Activity from './Activity'
import Footer from './Footer'

function Main() {
  return (
    <div className="container">
        <div className="main">
            <div className="border">
                <Header />
                <Balance />
                <SelectCurrency />
                <Activity />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Main

import React from 'react'
import Header from './Header'
import Balance from './Balance'
import SelectCurrency from './SelectCurrency'
import Activity from './Activity'
import Footer from './Footer'

function Main() {
  return (
    <div>
      <Header />
      <Balance />
      <SelectCurrency />
      <Activity />
      <Footer />
    </div>
  )
}

export default Main

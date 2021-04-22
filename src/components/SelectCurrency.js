import React from 'react'

function SelectCurrency() {
  return (
    <div className="selectCur">
      <p>Select Currency:</p>

      <div className="tok-zeros-wrapper">
          <p className="token">Token</p>
          <p className="zeros">0.00000001</p>
      </div>

      <div className="button-wrapper">
          <button className="send">Send</button>
          <button className="receive">Receive</button>
      </div>
    </div>
  )
}

export default SelectCurrency

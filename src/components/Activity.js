import React from 'react'

function Activity() {
  return (
    <div className="activities-container">
      
      <p>Recent Activity</p>

      <div className="recent-acts">

          <div className="dates-wrapper">
            <p>Date</p>

            <p>1/1/21</p>
            <p>2/2/21</p>
            <p>3/3/21</p>
          </div>

          <div className="descs-wrapper">
            <p>Description</p>

            <p>Sent</p>
            <p>Receive</p>
            <p>Sent</p>
          </div>

          <div className="amounts-wrapper">
            <p>Amount</p>

            <p>N100.00</p>
            <p>N200.00</p>
            <p>N300.00</p>
          </div>

      </div>

    </div>
  )
}

export default Activity

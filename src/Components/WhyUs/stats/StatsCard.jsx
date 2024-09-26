import React from 'react'

const StatsCard = ({ message, value }) => {
  return (
    <>
      <div class="col">
        <div class="card h-100 statCard d-flex align-items-center bg-danger p-4 shadow-lg">
          <img src="./icon.png" class="card-img-top m-3" alt="logo" />
          <h5 class="card-title fw-bold f30">{value}</h5>
          <p class="card-text f18">{message}</p>
        </div>
      </div>
    </>
  )
}

export default StatsCard;

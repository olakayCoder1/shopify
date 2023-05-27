import React from 'react'

const BreakDownCard = ({Icon, cardTitle , cardQuantity , cardColor }) => {
  return (
    <div className={` w-full rounded-md bg-${cardColor}-100 p-4 px-3 shadow-lg`}>
        <div className=' flex justify-between items-center'>
        <h2 className=' text-base font-medium'>{cardTitle}</h2>
        <p>
            <Icon className={` w-5 h-5 text-${cardColor}-700`} />
        </p>
        </div>
        <h2 className=' text-3xl font-normal'>
            {cardQuantity}
        </h2>
    </div>
  )
}

export default BreakDownCard

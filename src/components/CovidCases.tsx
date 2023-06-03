import React from 'react'
import WorldWideCases from './WorldWideCases'
import CountryWiseCases from './CountryWiseCases'
import DayWiseCases from './DayWiseCases'
import Sidebar from './SideBar'

const CovidCases = () => {
  return (
      <div className='flex gap-5'>
    <div >
        <Sidebar />
          </div>
          <div className='flex flex-col w-full gap-5'>
          <WorldWideCases />
          <CountryWiseCases />
          <DayWiseCases/>
              
          </div>
    </div>
  )
}

export default CovidCases
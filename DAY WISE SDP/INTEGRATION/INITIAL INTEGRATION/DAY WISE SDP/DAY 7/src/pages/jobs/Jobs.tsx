// import { CarouselSpacing } from '@/components/Altered/CarouselSpacing'
import FilterableCompanyList from '@/components/jobs/FilterableCompanyList'
import SponsoredCompanies from '@/components/jobs/SponsoredCompanies'
import Navbar from '@/global-Pages/Navbar'
// import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Jobs = () => {
  return (
    <div>
        <Navbar/>
        {/* <CarouselSpacing/> */}
        <SponsoredCompanies/>
        <FilterableCompanyList/>
    </div>
  )
}

export default Jobs
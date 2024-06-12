import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import Home from '../Pages/Home'
import ThankYouPage from '../Pages/ThankYouPage'
import PrivacyPolicy from '../Pages/PrivacyPolicy'

const AllRoutes = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<ThankYouPage/>} path='/thank-you'/>
            <Route element={<PrivacyPolicy/>} path='/privacy-policy'/>
        </Routes>
    </div>
  )
}

export default AllRoutes
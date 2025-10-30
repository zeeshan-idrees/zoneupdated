import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/Scrolltotop/ScrolltoTop';
import { Spin } from 'antd';

// ✅ Lazy load all pages
const HomePage = lazy(() => import('./Screens/HomePage'));
const Gallery = lazy(() => import('./Screens/Gallery'));
const Birthday = lazy(() => import('./Screens/Birthday'));
const ContactUs = lazy(() => import('./Screens/ContactUs'));
const Cafe = lazy(() => import('./Screens/Cafe'));
const SchoolTrips = lazy(() => import('./Screens/SchoolTrips'));
const Deals = lazy(() => import('./Screens/Deals'));
const Menu = lazy(() => import('./Screens/Menu'));
const VrGames = lazy(() => import('./Screens/VrGames'));

const MainComponents = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* Suspense fallback while routes load */}
        <Suspense
          fallback={
            <div className='d-flex justify-content-center align-items-center vh-100'>
              <Spin size="large" tip="Loading..." />
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Birthday' element={<Birthday />} />
            <Route path='/Contact-us' element={<ContactUs />} />
            <Route path='/Cafe' element={<Cafe />} />
            <Route path='/VrGames' element={<VrGames />} />
            <Route path='/SchoolTrips' element={<SchoolTrips />} />
            <Route path='/Deals' element={<Deals />} />
            <Route path='/Menu' element={<Menu />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default MainComponents;

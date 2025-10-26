import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense, from, lazy } from 'react';
import ScrollToTop from './Components/Scrolltotop/ScrolltoTop';
import { Spin } from 'antd';

// from load components


import Gallery  from'./Screens/Gallery';
import Birthday  from'./Screens/Birthday';
import ContactUs  from'./Screens/ContactUs';
import Cafe  from'./Screens/Cafe';
import SchoolTrips  from './Screens/SchoolTrips';
import Deals  from'./Screens/Deals';
import Menu  from './Screens/Menu';
import VrGames from './Screens/VrGames';



const HomePage = lazy(() => import('./Screens/HomePage'));
const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Suspense fallback={<div className='d-flex justify-content-center align-items-center vh-100' ><Spin /></div>}>
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
        </>
    );
}

export default MainComponents;
  
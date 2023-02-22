import { Suspense } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Forrent from './pages/forrent/Forrent';
import Forsale from './pages/forsale/Forsale';
import Home from './pages/home/Home';
import Properties from './pages/proerties/Properties';
import PropertyDetail from './pages/PropertyDetail';


function App() {

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <div className='app-wraper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties/for-rent' element={<Forrent />} />
        <Route path='/properties/for-sale' element={<Forsale />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/detail/:proprtyId' element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </div>
    </Suspense>
  );
}




export default App;
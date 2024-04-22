import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Gallery from './Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Header></Header>
      <div className='mb-14 flex flex-col justify-center items-center '>
        <p className='text-center mx-auto'>--- Sip & Savor ---</p>
        <h1 className='text-6xl text-center rancho-regular text-[#331A15] mb-2'>Our Popular Products</h1>
        <Link to='/addCoffee'><button className='btn rancho-regular  border-[#331A15] border-2 text-white text-xl bg-[#E3B577] flex items-center'>Add Coffee <FontAwesomeIcon icon={faMugHot} className="mr-2 text-xl text-[#331A15]" /></button></Link>
      </div>
      <div className='grid md:grid-cols-2 gap-4 mx-24 mb-24'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
      <div className='mb-20'>
        <div className='flex flex-col mb-10'>
          <p className='text-center'>Follow Us Now</p>
          <h1 className='text-5xl text-center rancho-regular font-extrabold text-[#331A15]'>Follow on Instagram</h1>
        </div>
        <Gallery></Gallery>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App

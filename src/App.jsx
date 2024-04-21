import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/images/logo/logo1.png';
import image from './assets/images/banner/15.jpg';
import banner from './assets/images/banner/3.png'

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div >
        <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", height: 80 }} className='h-[120px] flex justify-center'>
          <img className='w-[60px] h-[60px] mt-1 mr-2' src={logo} alt="" />
          <h1 className='text-4xl rancho-regular text-center text-white mt-4'>Espresso Emporium</h1>
        </div>
        <div className='flex justify-end' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: 800 }} >
          <div className='w-[724px] h-[224px] pt-64'>
            <h1 className='text-white text-4xl rancho-regular mb-2'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-base-100 mb-2'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='btn rancho-regular  text-[#331A15] text-xl bg-[#E3B577] flex items-center'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='mb-14 flex flex-col justify-center items-center '>
        <p className='text-center mx-auto'>--- Sip & Savor ---</p>
        <h1 className='text-6xl text-center rancho-regular text-[#331A15] mb-2'>Our Popular Products</h1>
        <Link to='/addCoffee'><button className='btn rancho-regular  border-[#331A15] border-2 text-white text-xl bg-[#E3B577] flex items-center'>Add Coffee <FontAwesomeIcon icon={faMugHot} className="mr-2 text-xl text-[#331A15]" /></button></Link>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App

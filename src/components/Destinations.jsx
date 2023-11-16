import React, { useState, useEffect } from 'react';
import axios from 'axios';
import casa_melgarejo from '../assets/casa_melgarejo.jpeg'
import casa_municipal from '../assets/casa_municipal_cultura.jpeg'
import convento_sanFransisco from '../assets/convento_san_francisco_asis.jpeg'
import iglesia_sanSeverino from '../assets/iglesia_san_severino.jpeg'
import puente_melgarejo from '../assets/puente_melgarejo.jpeg'
import plaza_principal from '../assets/plaza_principal.jpeg'


  
//map a la consulta de 5 lugares turisticos a la base de datos (imagen, nombre)
const Destinations = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await axios.get('http://localhost:8000/touristspot/5');
        console.log(response)
        setSpots(response.data);
      } catch (error) {
        console.error('Error fetching touristspots:', error);
      }
    };

    fetchSpots();
  }, []);

  return (
    <section className='container px-4 flex flex-col items-center my-16'>
      <h2 className='mb-4'>Great Places</h2>
      <p className='mb-8 font-bold'>On Tarata, Cochabamba</p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
      <div className='col-span-2 md:col-span-3 md:row-span-2'>
          <img
            src={casa_melgarejo}
            alt='casa_melgarejo'
            className='w-full h-full object-cover'
          />
        </div> 
      
        
        
        <div>
          <img
            src={casa_municipal}
            alt='casa municipal de cultura'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={convento_sanFransisco}
            alt='convento san francisco'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={plaza_principal}
            alt='plaza principal'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={iglesia_sanSeverino}
            alt='iglesia san severino'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;

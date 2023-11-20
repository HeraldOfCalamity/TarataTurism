import React, { useState, useEffect } from 'react';
import axios from 'axios';



  
//map a la consulta de 5 lugares turisticos a la base de datos (imagen, nombre)
const Destinations = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await axios.get('http://localhost:8000/touristspot/5');
        console.log(response.data)
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
        {
          spots.map((spot, index) => 
            
            index == 0 ?
            <div key={spot.id} className='col-span-2 md:col-span-3 md:row-span-2'>
              <img
                
                src={spot.picture}
                alt={spot.name}
                className='w-full h-full object-cover'
              />
            </div> 
            :
            <div key={spot.id}>
              <img
                src={spot.picture}
                alt={spot.name}
                className='w-full h-full object-cover'
              />
            </div>
          )
        }
      {/* <div className='col-span-2 md:col-span-3 md:row-span-2'>
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
        </div> */}
      </div>
    </section>
  );
};

export default Destinations;

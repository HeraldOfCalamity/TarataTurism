import React from 'react';

import Selection from './Selection';

import casa_melgarejo from '../assets/casa_melgarejo.jpeg'
import casa_municipal from '../assets/casa_municipal_cultura.jpeg'
import convento_sanFransisco from '../assets/convento_san_francisco_asis.jpeg'
import iglesia_sanSeverino from '../assets/iglesia_san_severino.jpeg'
import puente_melgarejo from '../assets/puente_melgarejo.jpeg'
import plaza_principal from '../assets/plaza_principal.jpeg'

//consulta a la base de datos de 6 lugares turisticos
// map xd
const Selections = () => {
  return (
    <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={casa_melgarejo} caption='Casa Melgarejo' />
      <Selection figure={casa_municipal} caption='Casa Municipal de Cultura' />
      <Selection figure={convento_sanFransisco} caption='Convento San Francisco' />
      <Selection figure={iglesia_sanSeverino} caption='Iglesia San Severino' />
      <Selection figure={puente_melgarejo} caption='Puente Melgarejo' />
      <Selection figure={plaza_principal} caption='Plaza Principal' />
    </section>
  );
};

export default Selections;

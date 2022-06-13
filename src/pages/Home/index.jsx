import React from 'react';
import './styles.css';
import { BarChart } from '../../components/Bar/BarChart';
import { ScartterChart } from '../../components/Scartter/ScartterChart';
import { FaFilter } from 'react-icons/fa';
import { RiInformationFill } from 'react-icons/ri';

export const Home = () => {
return(
 <>
  <div className='topo'></div>
  <div className='topText'>
      <div>
        <h1>Dashboard</h1>
        <p>Desafio Tecnico Frontend</p>
     </div> 
     <button>
     <FaFilter className='filIcon' />
      Filtrar
      </button>
  </div>
  
 <div className='container'>

   <div className="cardBar">
    <h2>
      Barras
    <RiInformationFill className='infoIcon'/>
    </h2>
     <BarChart />
   </div>

   <div className="cardScatter">
    <h2>
      Scatter
      <RiInformationFill className='infoIcon'/>
    </h2>
       <ScartterChart />
   </div>

 </div>
 </>
)
}
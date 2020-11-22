import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import './Clients.scss';
import daikin from './../../Img/daikin.png'
import gates from './../../Img/gates.png'
import krishnaMaruti from '../../Img/krishna_maruti.jpg'
import lilliput from './../../Img/LILLIPUT.png'
import lindePlc from './../../Img/Linde_plc.jpg'
import orientCraft from './../../Img/orient-craft.jpg'
import singerIndia from './../../Img/Singer-India.jpg'
import talbros from './../../Img/talbros.jpg'
import tataStell from './../../Img/tata-steel-logo.jpg'
import usha from './../../Img/usha.png'
import whirlpool from './../../Img/whirlpool.jpg'

const clients = [
  { url: daikin, name: 'Daikin' },
  { url: gates, name: 'Gates' },
  { url: krishnaMaruti, name: 'Krishna Maruti' },
  { url: lilliput, name: 'Lilliput' },
  { url: lindePlc, name: 'Linde' },
  { url: orientCraft, name: 'Orient Craft Limited' },
  { url: singerIndia, name: 'Singer India' },
  { url: talbros, name: 'Talbros' },
  { url: tataStell, name: 'Tata Steel' },
  { url: usha, name: 'Usha' },
  { url: whirlpool, name: 'Whirlpool' }
]

class Clients extends Component {
  
  render() {
    return (
     <div className='clients'>
       <Carousel>
         {clients.map((client, index) => (
           <Carousel.Item interval={500000} key={index}>
             <img
               className="d-block w-auto img mx-auto"
               src={client.url}
               alt="First slide"
             />
           </Carousel.Item>
         ))}
       </Carousel>
     </div>
    );
  }
}

export default Clients;

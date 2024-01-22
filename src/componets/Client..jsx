import React from 'react'

import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"


function Client() {
  return (
  <section>
    <div className="flex gap-2 flex-col mt-10">
      <h1 className="text-neutralgrey2 text-3xl flex justify-center font-montserrat">Our Clients</h1>
      <p className="text-neutralgrey flex justify-center pl-5 ">We have been working with some Fortune 500+ clients</p>
      <div className="mt-10 flex flex-wrap justify-around ml-10 mb-10 gap-3 pl-3`">
        <img src={client1} alt="" srcset="" />
        <img src={client2} alt="" srcset="" />
        <img src={client3} alt="" srcset="" />
        <img src={client5} alt="" srcset="" />
        <img src={client6} alt="" srcset="" />
        <img src={client7} alt="" srcset="" />
        <img src={client3} alt="" srcset="" />


      </div>
    </div>
  </section>
  )
}

export default Client

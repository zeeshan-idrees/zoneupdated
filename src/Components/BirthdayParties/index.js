import React from 'react'
import party from '../../assets/img/partyarea.jpg';
import about from '../../assets/img/about.jpg';

import './Bd.css'
export default function Birthday() {
  return (

    <div className=" justify-content-center text-blue font-poppins-500">

      <div className="">
        <h3 className="fw-bold">Welcome to Thrill Zone – Lahore’s Ultimate Indoor Play Park!</h3>
        <p className="">Thrill Zone, an international sensation that has delighted families since 2012, has finally landed in Lahore! After conquering hearts in Dubai and Abu Dhabi, we’re here to bring the same exhilarating fun and adventure to Pakistan.
          Step into one of the largest indoor play parks designed to cater to all age groups. Thrill Zone offers a world of excitement with its multi-level Soft Play Area, featuring super slides, ball shooting guns, a ball pit, and even rock climbing. For thrill-seekers, our Trampoline Area includes a Super Trampoline where you can jump to your heart’s content.</p>
        <p className="">For those who love a little competition and excitement, we’ve got a fantastic range of thrilling Arcade Games & Rides that will take your adrenaline to the next level! Whether you're competing with friends, testing your skills, or just looking for fun, our arcade offers endless entertainment for everyone.
          Challenge yourself on our Ninja Course, zoom around on our Bumper Cars, or let the little ones explore a Toddler’s Play Patch crafted just for them. Every corner of Thrill Zone promises fun, laughter, and unforgettable memories.
          Planning a Birthday Party? Our dedicated party area is the perfect spot to celebrate in style. And after all the excitement, you can relax at our beautiful Thrill Café, serving premium illy coffee, delicious snacks, sandwiches, cakes, and even pizzas to refuel your energy.</p>
        <p className="">Thrill Zone is not just a play park; it’s an experience. Come and join us for endless fun, excitement, and cherished moments with your loved ones!</p>



      </div>
      <div className="">
        <div className='p-2 text-center parties-image '>
          <img src={about} alt="" className=' rounded-5 img-fluid' />
        </div>
      </div>
    </div>
  )
}

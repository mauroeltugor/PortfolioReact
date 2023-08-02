import React from 'react'
import Elements from '../Elements/Elements';

const Navbar = () => {
  return (
    <nav>
        <ul className='options'>
            <Elements contentLi="Home"/>
            <Elements contentLi="AboutUs"/>
            <Elements contentLi="ContactUs"/>
            <Elements contentLi="Support"/>
        </ul>
    </nav>
  )
}

export default Navbar;

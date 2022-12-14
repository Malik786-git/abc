import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import myContext from '../context/context'

const Sidebar = () => {
  const {close, closeSidebar} = useContext(myContext);

  return (

    <div className={close? 'sidebar-hide': 'sidebar'}>
      <div className="close">
        <span
        onClick={closeSidebar}
        >X</span>
      </div>
       <div className="sidebar-heading">
      
          <i className="fa fa-eercast" aria-hidden="true"></i>
          <h2>Workflow</h2>
       </div>
       <div className="sidebar-menu">
        <div className='menu'>
           <h3>
           <NavLink className="home-anchor" to="/" >Dashboard</NavLink>
           </h3>
           <h3>
           <NavLink className="home-anchor" to="/admin" >Admin</NavLink>
           </h3>
           <h3>
           <NavLink className="home-anchor" to="/static" >Statistics</NavLink>
            </h3>
           <h3>
           <NavLink className="home-anchor" to="/customize" >Customize</NavLink>
           </h3>
           <h3>
           <NavLink className="home-anchor" to="/setting" >Setting</NavLink>
           </h3>
        </div>
       </div>
    </div>
  )
}


export default Sidebar;
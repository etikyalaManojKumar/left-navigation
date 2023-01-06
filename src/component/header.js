import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../mock';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

class Header extends Component {
    state = { 
        sidebar: true,
     } 
    
     showSidebar = ()=>{this.setState({...this.state, sidebar: !this.state.sidebar})}
    render() { 
        return (
            <>
            <div className='navbar'>
                <Link to='#' className='menu_bars'>
                <FaIcons.FaBars onClick={this.showSidebar}/>
                </Link>
                <h2 className='abc'>Dashboard</h2>
            </div>
            <nav className={this.state.sidebar ? 'nav_menu active' : 'nav_menu'}>
                <ul className='nav_menu_items' onClick={this.showSidebar}>
                    <li className='navbar_toggle'>
                        <Link to='' className='menu_bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                        {SidebarData.map((item, index)=>{
                            return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icons}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}

                </ul>
            </nav>
            </>
        );
    }
}
 
export default Header;
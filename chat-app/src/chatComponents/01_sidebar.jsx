import React from 'react'
import Nav from './01a_nav'
import Search from './01b_search'
import Contacts from './01c_contacts'

const Sidebar = () => {
    return (
        <div id='sidebar'>
            <Nav/>
            <Search/>
            <Contacts/>
        </div>
    );
}

export default Sidebar;
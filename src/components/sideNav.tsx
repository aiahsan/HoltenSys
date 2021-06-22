import React from 'react';
import Logo from './logo'
import MenuItem from '../components/sideBar/menuItem'
const SideNav=()=>{
    return <div className="sideNav">

        <Logo/>

        <div className="sideNav-inner">
            <MenuItem icon="home" title="Dashboard" isActive={true}/>
            <MenuItem icon="kon" title="Konkursbo" isActive={false}/>
            <MenuItem icon="lon" title="Lønnskravene" isActive={false}/>
            <MenuItem icon="for" title="Fordringer" isActive={false}/>
            <MenuItem icon="opp" title="Oppgaver" isActive={false}/>
            <MenuItem icon="mes" title="Messaging" isActive={false}/>
        </div>

    </div>
}
export default SideNav;
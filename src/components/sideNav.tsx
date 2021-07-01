import React from 'react';
import Logo from './logo'
import MenuItem from '../components/sideBar/menuItem'
import { useHistory,useLocation } from 'react-router';
const SideNav=()=>{
    const history=useHistory ();
    const location=useLocation ();
    const [activeTab,setactiveTab]=React.useState(0);
    const hanldeChange=(id:number,name:string)=>{
        setactiveTab(id);
        history.push(name)
    }

    React.useEffect(()=>{
        console.log(location)
    },[])
    return <div className="sideNav">

        <Logo/>

        <div className="sideNav-inner">
            <MenuItem onClick={()=>hanldeChange(0,"")} icon="home" title="Dashboard" isActive={location.pathname=="/"?true: false}/>
            <MenuItem onClick={()=>hanldeChange(1,"konkursbo")} icon="kon" title="Konkursbo" isActive={location.pathname=="/konkursbo"?true: false}/>
            <MenuItem onClick={()=>hanldeChange(2,"lonnskrav")} icon="lon" title="Lønnskravene" isActive={location.pathname=="/lonnskrav"?true: false}/>
            <MenuItem onClick={()=>hanldeChange(3,"konkursboervi")} icon="for" title="Fordringer" isActive={location.pathname=="/konkursboervi"?true: false}/>
            <MenuItem onClick={()=>hanldeChange(4,"ola")} icon="opp" title="Oppgaver" isActive={location.pathname=="/ola"?true: false}/>
            <MenuItem onClick={()=>hanldeChange(5,"messaging")} icon="mes" title="Messaging" isActive={location.pathname=="/messaging"?true: false}/>
        </div>

    </div>
}
export default SideNav;
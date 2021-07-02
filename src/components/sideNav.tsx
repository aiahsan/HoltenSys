import React from 'react';
import Logo from './logo'
import MenuItem from '../components/sideBar/menuItem'
import MenuItemDropdown from '../components/sideBar/meunitemDropdown'
import { useHistory,useLocation } from 'react-router';
const SideNav=()=>{
    const history=useHistory ();
    const location=useLocation ();
    const [activeTab,setactiveTab]=React.useState(0);
    const [menuOpen,setmenuOpen] =React.useState(false);
    const [openLonnskrav,setopenLonnskrav]=React.useState(false);

    const hanldeChange=(id:number,name:string)=>{
        setactiveTab(id);
        history.push(name)
    }

    React.useEffect(()=>{
        console.log(location)
        if(location.pathname=="/konkursboervi"||location.pathname=="/lonnskrav")
        {
            setmenuOpen(true);
        }
        if(location.pathname=="/lonnskrav")
        {
            setopenLonnskrav(true)
        }
    },[])
    return <div className="sideNav">

        <Logo/>

        <div className="sideNav-inner">
            <MenuItem onClick={()=>hanldeChange(0,"")} icon="home" title="Dashboard" isActive={location.pathname=="/"?true: false}/>
            {location.pathname=="/konkursbo"||location.pathname=="/konkursboervi" ||location.pathname=="/lonnskrav"?<MenuItemDropdown menuOpen={menuOpen} onClick={()=>location.pathname!="/konkursbo"?history.push("/konkursbo"):setmenuOpen(!menuOpen)} icon="kon" title="Konkursbo" isActive={location.pathname=="/konkursbo"||location.pathname=="/konkursboervi"|| location.pathname== "/lonnskrav"?true: false}/>
            :<MenuItem onClick={()=>hanldeChange(1,"konkursbo")} icon="kon" title="Konkursbo" isActive={location.pathname=="/konkursbo"?true: false}/>
            }
            {
                menuOpen==true?<div className="sidebar-dropdown-menu">

                <div className="sidebar-dropdown-menu-div">  <a className={`sidebar-dropdown-menu-a evis-font`}>Ervi AS</a></div>
                   <div className="sidebar-dropdown-menu-div" onClick={()=>hanldeChange(1,"konkursboervi")}> <a className={`sidebar-dropdown-menu-a ${location.pathname=="/konkursboervi"?"active": ""}`}>Info om Boet</a></div>
                   <div className="sidebar-dropdown-menu-div" onClick={()=>hanldeChange(1,"lonnskrav")}>

                   <a className={`sidebar-dropdown-menu-a  ${location.pathname=="/lonnskrav"?"active": ""}`}>Ansatte og lonnskrav</a>

                    {openLonnskrav==true?<div>
                 <div>       <a className={`sidebar-dropdown-menu-a  ${location.pathname==""?"active": ""}`}>Alle ansatte</a></div>
                 <div><a className={`sidebar-dropdown-menu-a  ${location.pathname=="/lonnskrav"?"active": ""}`}>Alle lonnskrav (3)</a>

</div>
                        
                    </div>:<div></div>}




                   </div>
                   <div className="sidebar-dropdown-menu-div">  <a className={`sidebar-dropdown-menu-a`}>Kreditorer og Fordringer</a></div>
                   <div className="sidebar-dropdown-menu-div">  <a className={`sidebar-dropdown-menu-a`}>Regnskap</a></div>
                   <div className="sidebar-dropdown-menu-div"><a className={`sidebar-dropdown-menu-a`}>Meldinger</a></div>
                   <div className="sidebar-dropdown-menu-div brd-none"> <a className={`sidebar-dropdown-menu-a`}>Oppgaver</a></div>
                    
                  
                   
                  
                    
                   
                </div>:<></>
            }
            <MenuItem onClick={()=>hanldeChange(2,"")} icon="lon" title="Lønnskravene" isActive={false}/>
            <MenuItem onClick={()=>hanldeChange(3,"")} icon="for" title="Fordringer" isActive={false}/>
            <MenuItem onClick={()=>hanldeChange(4,"ola")} icon="opp" title="Oppgaver" isActive={location.pathname=="/ola"?true: false}/>
            <MenuItem onClick={()=>hanldeChange(5,"messaging")} icon="mes" title="Messaging" isActive={location.pathname=="/messaging"?true: false}/>
        </div>

    </div>
}
export default SideNav;
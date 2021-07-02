import React from 'react';
import Icon from '../../svgIcons/svgIcons'
interface Props{
    title:String,
    icon:String,
    isActive:Boolean,
    onClick:()=>void,
    menuOpen:Boolean
}
const MenuItem =(props:Props)=>{
const {title,icon,isActive,onClick,menuOpen}=props;

return <div><div onClick={()=>onClick()}  className={`menu-Item ${isActive?"menu-active":""}`}>
<div className="d-flex align-items-center ">
<Icon name={icon}/>

<p className="kahsdfe-waeas2">{title}</p>
</div>
<div className="ml-19px">
    
<Icon name={menuOpen==true?"drpchevdown":"drpchev"}/>
</div>
</div>

</div>

}
export default MenuItem;
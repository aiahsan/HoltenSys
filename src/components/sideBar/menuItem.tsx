import React from 'react';
import Icon from '../../svgIcons/svgIcons'
interface Props{
    title:String,
    icon:String,
    isActive:Boolean,
    onClick:()=>void
}
const MenuItem =(props:Props)=>{
const {title,icon,isActive,onClick}=props;

return <div onClick={()=>onClick()}  className={`menu-Item ${isActive?"menu-active":""}`}>
<Icon name={icon}/>
<p className="kahsdfe-waeas2">{title}</p>
</div>

}
export default MenuItem;
import React from 'react';
import {Dropdown} from 'react-bootstrap'
import Icon from '../svgIcons/svgIcons'
import CheckBox from './checkBox'
interface DropdownProps
{
    items?:ItemProp[],
    style?:object
}
interface ItemProp{
    title:string;
    isCheck:boolean;
    isDisabled:boolean;
    onClick:()=>void;
}
export default (props:DropdownProps)=>{
    const {items,style}=props;
    return <div className="menu-btn-cst cst-dropdown" style={style?{height:24}:{}}>
    <Dropdown >
  <Dropdown.Toggle  style={style?{...style}:{}}>
  <Icon name="menu-1"/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {items?.map((x,i)=>  <Dropdown.Item >
        <div className="menu-btn-item-cst" ><CheckBox  isCheck={x.isCheck} isDisabled={x.isDisabled}/> <div className={`${x.isDisabled==true?"hids-euw23":""}`} onClick={x.onClick}>
        {x.title}
            </div> </div>
        </Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>
    </div>
}
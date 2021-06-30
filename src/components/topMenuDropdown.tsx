import React, { ReactNode } from 'react';
import {Dropdown} from 'react-bootstrap'
import Icon from '../svgIcons/svgIcons'
interface DropdownProps
{
    title:string,
    items?:ItemProp[],
    style?:object,
    child?:()=>void,
}
interface ItemProp{
    itemrender?:()=>any,
    onClick:()=>void;
}


export default (props:DropdownProps)=>{
    const {title,items,style,child}=props;
    return <div className="cst-dropdown cst-drp-icon">
    <Dropdown>
  <Dropdown.Toggle style={style?{...style}:{}}>
      {child?child():<></>}
  <Icon name={title} /> 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {items?.map((x,i)=>  <Dropdown.Item >
        <div onClick={()=>x.onClick()}><p>{x.itemrender?x.itemrender():<></>}</p></div>

        </Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>
    </div>
}
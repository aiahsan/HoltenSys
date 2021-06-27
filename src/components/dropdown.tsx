import React from 'react';
import {Dropdown} from 'react-bootstrap'
import Icon from '../svgIcons/svgIcons'
interface DropdownProps
{
    title:string,
    items?:ItemProp[],
    style?:object
}
interface ItemProp{
    title:string,
    onClick:()=>void;
}
export default (props:DropdownProps)=>{
    const {title,items,style}=props;
    return <div className="shadi-sa2edsan">
    <Dropdown>
  <Dropdown.Toggle style={style?{...style}:{}}>
   <div className="d-flex">
   <div>
   {title}
   </div>
   <div className="ml-12p">
   <Icon name={`${style?"chevbtmwht":"chevbtm"}`} />
   </div>
   </div>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {items?.map((x,i)=>  <Dropdown.Item >
        <div onClick={x.onClick}>{x.title}</div>
        </Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>
    </div>
}
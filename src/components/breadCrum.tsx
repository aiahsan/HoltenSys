import React from 'react';
interface ItemProp{
    title:string;
    onClick:()=>void;
    isActive:boolean;
}
interface Props{
    items:ItemProp[]
}
const Comp=(props:Props)=>{
    const {items}=props;
    return <div className="bread-body-div">
   {items.map((x,i)=><div key={i} className={`${x.isActive==true?i===items.length-1?"ksdadmks-sacd brd-none":"ksdadmks-sacd":i===items.length-1?"dknsfi-asdc brd-none":"dknsfi-asdc"}`}>{x.title}</div>)}
    </div>
}
export default Comp;
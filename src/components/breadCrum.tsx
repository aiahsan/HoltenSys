import React from 'react';
interface ItemProp{
    title:string;
    onClick:()=>void;
    isActive:boolean;
}
interface Props{
    items:ItemProp[]
}
export default (props:Props)=>{
    const {items}=props;
    return <div className="masndas-sde">
   {items.map((x,i)=><div key={i} className={`${x.isActive==true?i==items.length-1?"ksdadmks-sacd brd-none":"ksdadmks-sacd":i==items.length-1?"dknsfi-asdc brd-none":"dknsfi-asdc"}`}>{x.title}</div>)}
    </div>
}
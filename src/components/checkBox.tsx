import React from 'react'
interface Props{
    isCheck:boolean,
    isDisabled:boolean,
}
export default (props:Props)    => {
    const {isDisabled}=props;
    const [isCheck,setisCheck]=React.useState(false);
    return <>
        <div>
            <label  className={`${isDisabled==true?"checkbox-button1":"checkbox-button"}`}>
                <input type="checkbox" checked={isCheck} onChange={()=>{}} onClick={()=>setisCheck(!isCheck)}   className={`${isDisabled==true?"checkbox-button1__input":"checkbox-button__input"}`} id="choice1-1" name="choice1" />
                <span   className={`${isDisabled==true?"checkbox-button1__control":"checkbox-button__control"}`}></span>
            </label>
        </div>
    </>
}
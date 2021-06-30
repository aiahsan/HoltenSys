import React from 'react';
import { Dropdown } from 'react-bootstrap';
import TopMenuDropdown from './topMenuDropdown'
import Icon from '../svgIcons/svgIcons'
export default ()=>{
    return   <div>
    <div className="d-flex align-items-center top-bar-body">
        <div className="top-bar-body-icon">
            <div className="top-bar-body-icon-inner">
                {/* <Icon name="english" /> */}
                <TopMenuDropdown items={[{itemrender:()=><>
                <div className="d-flex align-items-center">
                    <Icon name="english"/>
                    <p>English</p>
                </div>
                </>,onClick:()=>alert()}]} title="english"/>
            </div>
        </div>
        <div className="top-bar-body-icon">
            <div className="top-bar-body-icon-inner1">
                
                <TopMenuDropdown child={()=><div className="top-rel">
                <div className="top-bar-body-icon-title"><p>2</p></div>
                </div>} title="bell"/>
                {/* <Icon name="bell" /> */}
            </div>
        </div>
        <div className="top-bar-body-icon">
            <div className="top-bar-body-icon-inner">
            <TopMenuDropdown  title="setting"/>
                {/* <Icon name="setting" /> */}
            </div>
        </div>
        <div className="top-bar-body-icon">
            <div className="top-bar-body-icon-inner1">
            <TopMenuDropdown  title="user"/>

                {/* <Icon name="user" /> */}
            </div>
        </div>
    </div>

</div>
}
import React from 'react';
import { css, cx } from '@emotion/css'

import SearchBar from '../components/home/searchBar';
import SideNav from '../components/sideNav'
import TopBar from '../components/topBar'
import { Table } from 'react-bootstrap'
import CheckBox from '../components/checkBox'
import Icon from '../svgIcons/svgIcons'
import Dropdown from '../components/dropdown';
import MenuBtn from '../components/menubtn';
import BreadCrum from '../components/breadCrum1'
const MenuItems=[{title:"Bonavn",isCheck:true,isDisabled:true,onClick:()=>alert()},
{title:"Bostyrer",isCheck:true,isDisabled:true,onClick:()=>alert()},
{title:"Org. Number",isCheck:true,isDisabled:false,onClick:()=>alert()},
{title:"Apningsdato",isCheck:true,isDisabled:false,onClick:()=>alert()},
{title:"Banksaldo",isCheck:true,isDisabled:false,onClick:()=>alert()},
{title:"Fordringer",isCheck:true,isDisabled:false,onClick:()=>alert()},
{title:"Sum Fordringer",isCheck:true,isDisabled:false,onClick:()=>alert()},
{title:"Ansatte",isCheck:false,isDisabled:false,onClick:()=>alert()},
{title:"B-Lister",isCheck:false,isDisabled:false,onClick:()=>alert()},
{title:"Kommentrarer",isCheck:false,isDisabled:false,onClick:()=>alert()}]
const Home = () => {
    return <div className="app-con d-flex">
        <SideNav />
        <div className="main-body">
            <div className="top-bar-main d-flex justify-content-between">
                <SearchBar />
                <TopBar />
            </div>
            <div className="sdioas-2wsdasd">
                <h1 className="nasdifas-jdasde">Lonnskrav (3)</h1>
                <div className="ml-14px">
                <BreadCrum items={[{title:"Alle",isActive:true},{title:"0. Klargjore for NAV",isActive:false}
                ,{title:"1. Resultat NAV-behandlling",isActive:false}
                ,{title:"2. Utbetaling",isActive:false}
                ,{title:"3. Rapportere til Altinn",isActive:false}
                ,{title:"4. Arsoppgaver",isActive:false}
                
                ]}/>
                </div>
            </div>
            <div className="d-flex justify-content-between caslds0a2-ws isdif-asdwedsd2">
            <Dropdown title="Alle Statuser" items={[{title:"Alle",onClick:()=>alert()},{title:"Nye",onClick:()=>alert()},{title:"Arkiverte",onClick:()=>alert()}]}/>
                    <Dropdown title="Alle Konkurso"/>
                
            </div>
            <div className="d-flex ">
                <div className="chart-main-bd mafid-wewd pt-0">
                    
                    <div className="hdsauds-23wj ">
                        <Table responsive borderless className="chuasjse-esduw-2">
                            <thead>
                                <tr>
                                    
                                    <th><div className="ooas92-231" >B-Liste nr</div></th>
                                    <th><div className="ooas92-241" >Ansatt</div></th>
                                    <th><div className="ooas92-251">
                                    Lonnsart
                                    </div></th>
                                    <th><div className="ooas92-261">Fra-til dato</div></th>
                                    <th><div className="ooas92-271">Kurant</div></th>
                                    <th><div className="ooas92-281">Sats/belop</div></th>
                                    <th><div className="ooas92-291">Sum</div></th>
                                    <th><div className="ooas92-301">Status</div></th>
                                    <th><div className="ooas92-311">
                                    <MenuBtn  style={{padding:"0px"}} items={MenuItems}/>
                                        </div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.from({ length: 8 }, (v, i) => <tr>
                                        
                                        <td><div>1</div></td>
                                        <td><div>Hansen, Lise</div></td>
                                        <td><div>-</div></td>
                                        <td><div>1.1.2020-31.12.2020</div></td>
                                        <td><div>Kurant</div></td>
                                        <td><div>37900</div></td>
                                        <td><div>36500</div></td>
                                        <td><div>0. Klargjore for NAV</div></td>
                                        <td><div></div></td>
                                    </tr>)

                                }
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-end hiadsfa-3xn1">
                            <button className="btn">Tidligere</button>
                            <div className="d-flex khafds-sadw">
                                <button className="btn">1</button>
                                <button className="btn active">2</button>
                                <button className="btn">3</button>
                                <button className="btn">4</button>
                                <button className="btn mag-18">5</button>
                            </div>
                            <button className="btn">Neste</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
}
export default Home;
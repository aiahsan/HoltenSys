import React from 'react';
import { css, cx } from '@emotion/css'

import SearchBar from '../components/home/searchBar';
import SideNav from '../components/sideNav'
import TopBar from '../components/topBar'
import { Table } from 'react-bootstrap'
import CheckBox from '../components/checkBox'
import Icon from '../svgIcons/svgIcons'
import Dropdown from '../components/dropdown';
import MenuBtn from '../components/menubtn'
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
            <div>
                <h1 className="nasdifas-jdasde">Alle KonKursbo</h1>
            </div>
            <div className="d-flex justify-content-between caslds0a2-ws">
                <div className="isdif-asdwedsd2">
                    <Dropdown title="Alle Statuser" items={[{title:"Alle",onClick:()=>alert()},{title:"Nye",onClick:()=>alert()},{title:"Arkiverte",onClick:()=>alert()}]}/>
                    <Dropdown title="Alle Konkurso"/>
                    <button className="btn pidsf-ewe d-flex justify-content-center align-items-center">
                   <div className="nadsi-2e14">
                   <Icon name="plus1"/>
                   </div>
                    <div>Company Registration</div>
                    </button>
                </div>
                <div>
                   <MenuBtn items={MenuItems}/>
                </div>
            </div>
            <div className="d-flex ">
                <div className="chart-main-bd mafid-wewd">
                    <div className="d-flex justify-content-between ">
                        <h1 className="ldknaf-saedsd-1">Klienter</h1>
                        <button className="btn nkcsdoc-wdcsd mjdf-ds3">
                            <Icon name="menu" />
                        </button>
                    </div>
                    <div className="hdsauds-23wj">
                        <Table responsive borderless className="chuasjse-esduw-1">
                            <thead>
                                <tr>
                                    <th><div className="d-flex align-items-center ooas92-23">
                                        <CheckBox  isCheck={false} isDisabled={false} />
                                        <p>Bonavn</p>
                                    </div></th>
                                    <th><div className="ooas92-24" >Bostyrer</div></th>
                                    <th><div className="ooas92-25">
                                        Org. Nummer
                                    </div></th>
                                    <th><div className="ooas92-26">Apningsdato</div></th>
                                    <th><div className="ooas92-27">Banksaldo</div></th>
                                    <th><div className="ooas92-28">Fordringer</div></th>
                                    <th><div className="ooas92-29">Ansatte</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.from({ length: 8 }, (v, i) => <tr>
                                        <td><div className="d-flex align-items-center">
                                            <CheckBox isCheck={false} isDisabled={false} />
                                            <p>Innherred Grunneierlag
                                                <br></br>
                                                For Fellesforvaltning A Gas Sa</p>
                                        </div></td>
                                        <td><div>Pal Inge Slberg</div></td>
                                        <td><div>-</div></td>
                                        <td><div>08.01.2021</div></td>
                                        <td><div>0</div></td>
                                        <td><div>0</div></td>
                                        <td><div>0</div></td>
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
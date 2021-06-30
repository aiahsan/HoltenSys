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
            <div className="top-bar-main1 d-flex justify-content-between">
                <SearchBar />
                <TopBar />
            </div>
            <div>
                <h1 className="nasdifas-jdasde">Konkursbo Ervi AS (Nytt)</h1>
            </div>
            <div className="d-flex justify-content-between caslds0a2-ws1 jasdkf-sajeiw">
                <div>
                    <button className="btn asdfidsf-aendidawe">
                    Detljer
                    </button>
                </div>
                <div>
                   <MenuBtn items={MenuItems}/>
                </div>
            </div>
            <div className="d-flex card-wrapper-main">
                <div className="jdisfj-jsadis2w mafid-wewd">
                    <div className="sjadksaj0-12as1">
                        <h2>Detljer om boet</h2>
                        <p></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Selskapets orgnr</p>
                        <p>998570123</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Boets nye orgnr</p>
                        <p>22244466</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Bostyrer</p>
                        <p>Erik Parmer</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Apningsdato</p>
                        <p>2021-01-08</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Antall ansatte</p>
                        <p className="color-red">Mangler</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Adresse</p>
                        <p>Svinesundsveien 325</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Postnummer, Sted</p>
                        <p>1778, Halden</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>E-post</p>
                        <p className="color-red">Mangler</p>
                    </div>
                    <div className="sjadksaj0-12as1 brd-none">
                        <p>Omadressering</p>
                        <p>3 Maneder</p>
                    </div>
                    <div className="djsuhsd-edshd">
                        <button className="btn hadjf-ends">Endre</button>
                    </div>
                </div>
                <div className="jdisfj-jsadis2w">
                   <div className="d-flex flex-column ndasi-ase2das">
                   <div>
                    <div className="sjadksaj0-12as1">
                        <h2>Fullfor  apning av boet</h2>
                        <p></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Vennligst legg til folgende informasjon for a fullfore  apning av boet</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Detaljer</p>
                        <p>22244466</p>
                    </div>
                    <div className="sjadksaj0-12as1 brd-none">
                        <p>Nytt organisasjonsnummer</p>
                        <p><Icon name="tick"/><span className="color-gry">Lagt til</span></p>
                    </div>
                    <div className="sjadksaj0-12as1  ">
                        <p>Saksbehandler (valgfritt)</p>
                        <p>Lagt til</p>
                    </div>
                    <div className="sjadksaj0-12as1 brd-none ">
                        <p>Bankdetaljer</p>
                      
                    </div>
                    <div className="sjadksaj0-12as1 ">
                        <p>Bankkonto</p>
                        <p>Lagt til</p>
                    </div>
                    <div className="sjadksaj0-12as1 brd-none">
                        <p>Omadresseringsperiode (valgfritt)</p>
                        <p><Icon name="tick"/><span className="color-gry">Ferdig</span></p>
                    </div>
                    
                    </div>
                    <div className="djsuhsd-edshd">
                        <button className="btn hadjf-ends">Endre</button>
                    </div>
                   </div>
                </div>
                
            </div>

        </div>
    </div>
}
export default Home;
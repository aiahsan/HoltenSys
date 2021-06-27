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
import BreadCrum from '../components/breadCrum';
const MenuItems=[{title:"Detaljer",onClick:()=>alert(),isActive:true},{title:"Lonnskrav",onClick:()=>alert(),isActive:false},{title:"Dokumenter",onClick:()=>alert(),isActive:false}];
const MenuItems1=[{title:"Send e-post",onClick:()=>alert()},{title:"Last opp dokumentasjon",onClick:()=>alert()},{title:"Opprett Lonnskrav",onClick:()=>alert()},{title:"Opprett som kreditor",onClick:()=>alert()}];
const Home = () => {
    return <div className="app-con d-flex">
        <SideNav />
        <div className="jasdokf-we23">
            <div className="d-flex justify-content-between">
                <SearchBar />
                <TopBar />
            </div>
            <div>
                <h1 className="nasdifas-jdasde">Ola</h1>
            </div>
            <div className="d-flex justify-content-between caslds0a2-ws1 jasdkf-sajeiw">
                <div>
                    <BreadCrum items={MenuItems}/>
                </div>
                <div>
                   <Dropdown items={MenuItems1} style={{    backgroundColor: "#2E53DA", color: "white"}} title="Behandle"/>
                </div>
            </div>
            <div className="d-flex ">
                <div className="jdisfj-jsadis2w mafid-wewd">
                    <div className="sjadksaj0-12as1">
                        <h2>Porsonopplysinnger</h2>
                        <p></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Porsonopplysinnger</p>
                        <p>998570123</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Navn</p>
                        <p>Ola</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Adress</p>
                        <p>-</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Postnummer</p>
                        <p>2920</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Sted</p>
                        <p className="color-red"></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Land</p>
                        <p>Norway</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Spark</p>
                        <p>Norsk</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>E-post</p>
                        <p className="">Olaterje@online.no</p>
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
                   <div className="d-flex flex-column hdsfihi-asdcd">
                   <div>
                    <div className="sjadksaj0-12as1">
                        <h2>Om arbeidsforholdet</h2>
                        <p></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>2.1stilling i virksomheten</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>2.2 Ansettelsesdato</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1 brd-none">
                        <p>2.3 Oppsigelese mottatt</p>
                        <p>-</p>
                    </div>
                    <div className="sjadksaj0-12as1  ">
                        <p>2.4 Oppsigelesefrist</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>2.5 Tariffavtale om oppsigelsesfirst?</p>
                        <p>Nei</p>
                      
                    </div>
                    <div className="sjadksaj0-12as1 ">
                        <p>2.6 Avlonningsform</p>
                        <p>Null Pr. time</p>
                    </div>
                    <div className="sjadksaj0-12as1 ">
                    <p>2.7 Avtalt lonningsdato</p>
                      
                    </div>
                    <div className="sjadksaj0-12as1 ">
                    <p>2.8 Lonn mottatt frem til</p>
                      
                    </div>
                    <div className="sjadksaj0-12as1 ">
                    <p>2.9 Lonns-eller arbeidsvilkar har blitt endret i tiden for konkursapning.</p>
                      <p>Nei</p>
                    </div>
                    
                    </div>
                    <div className="djsuhsd-edshd">
                        <button className="btn hadjf-ends">Endre</button>
                    </div>
                   </div>
                </div>
                
            </div>


            <div className="d-flex ndasi-ase2das ">
                <div className="jdisfj-jsadis2w mafid-wewd">
                    <div className="sjadksaj0-12as1">
                        <h2>Betalingsinfo utenlandsk ansatt</h2>
                        <p></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Valuta</p>
                        <p>998570123</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>IBAN/Bankkonto</p>
                        <p>Ola</p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>BIC/Swiftkode</p>
                        <p>-</p>
                    </div>
                     <div className="djsuhsd-edshd">
                        <button className="btn hadjf-ends">Endre</button>
                    </div>
                </div>
                <div className="jdisfj-jsadis2w">
                   <div className="d-flex flex-column hdsfihi-asdcd">
                   <div>
                    <div className="sjadksaj0-12as1">
                        <h2>Skatt</h2>
                        <p></p>
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Skattekommune</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1">
                        <p>Forskuddsform</p>
                        <p>Ola</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1 brd-none">
                        <p>Skatteprosent</p>
                        
                    </div>
                    <div className="sjadksaj0-12as1  ">
                        <p>Tabellnummer.</p>
                        <p>Ola</p>
                        
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
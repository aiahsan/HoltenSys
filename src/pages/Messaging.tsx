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
import Switch from "react-switch";
import { Editor } from '@tinymce/tinymce-react';
import TopMenu from '../components/topmenu';

const MenuItems = [{ title: "Detaljer", onClick: () => alert(), isActive: true }, { title: "Lonnskrav", onClick: () => alert(), isActive: false }, { title: "Dokumenter", onClick: () => alert(), isActive: false }];
const MenuItems1 = [{ title: "Send e-post", onClick: () => alert() }, { title: "Last opp dokumentasjon", onClick: () => alert() }, { title: "Opprett Lonnskrav", onClick: () => alert() }, { title: "Opprett som kreditor", onClick: () => alert() }];
const Home = () => {
    const [switch1, setSwitch1] = React.useState(false);
    const editorRef = React.useRef();


    return <div className="app-con d-flex">
        <SideNav />
        <div className="main-body">
            <div className="top-bar-main d-flex justify-content-between">
                <SearchBar />
                <TopBar />
            </div>
            <div>
                <h1 className="nasdifas-jdasde">Messaging</h1>
            </div>

            <div className="d-flex drp-main-bdy">
                <div>
                    <Dropdown items={MenuItems1} title="Alle Statuser" />

                </div>
                <div className="nfdas-sadwme">
                    <Dropdown items={MenuItems1} title="Alle Konkurso" />

                </div>
            </div>

            <div className="d-flex ndasi-ase2das">
                <div className="hdsnfisd-aewnxw">
                    <h2>Mottakere</h2>
                    <div className="azx9ajes02">
                        <button className="btn asdiadi-saews">
                            <div className="nsadkiaw">                <Icon name="plus2" /></div>
                            Legg till ny mottaker
                        </button>
                    </div>

                    <div className="ids0w-esd2" ><CheckBox  isCheck={true} isDisabled={false} /> <div  >
                        Velg alle
                    </div>
                    </div>


                    <div className="ids0w-esd2" ><CheckBox isCheck={false} isDisabled={false} /> <div  >
                        Dagllg leder
                    </div>
                    </div>

                    <div className="ids0w-esd2" ><CheckBox isCheck={false} isDisabled={false} /> <div  >
                        Varamedlem
                    </div>
                    </div>
                    <div className="ids0w-esd2" ><CheckBox isCheck={false} isDisabled={false} /> <div  >
                        Alle kreditorer
                    </div>
                    </div>
                    <div className="ids0w-esd2" ><CheckBox isCheck={false} isDisabled={false} /> <div  >
                        Alle ansatte                    </div>
                    </div>

                    <div className="ids0w-esd2">
                        Alle dummy text
                    </div>

                    <div>
                        <input placeholder="Type here" type="text" className="dsfjisdsa-wesdia" />
                    </div>
                </div>
                <div className="hdsnfisd-aewnxw-1">
                    <div className="asods02wsi12w dsdsaijs-2esdd">
                        <div className="d-flex align-items-center">
                            <CheckBox isCheck={true} isDisabled={false} />
                            <p className="sbnoaid-2wasd">Ved apning</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <CheckBox isCheck={false} isDisabled={false} />
                            <p className="sbnoaid-2wasd">Lindervies</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <CheckBox isCheck={false} isDisabled={false} />
                            <p className="sbnoaid-2wasd">Ved=stenging</p>
                        </div>
                    </div>
                    <div className="ids0w-esd2 brd-none d-flex flex-column pl-0">
                        <p>                    Alle dummy text
                        </p>
                        <input placeholder="Type here" type="text" className="dsfjisdsa-wesdia w-100 mt-8p" />
                        <p className="dasidjwed-sae">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="ids0w-esd2 brd-none d-flex flex-column pt-0 pl-0">
                        <p>                    Alle dummy text
                        </p>
                        <input placeholder="Type here" type="text" className="dsfjisdsa-wesdia w-100 mt-8p" />

                    </div>
                    <div className="d-flex">
                        <Switch onColor="#2E53DA" width={46} height={21} className="nfsdo-2wssd" checkedIcon={<></>} uncheckedIcon={<></>} onChange={() => setSwitch1(!switch1)} checked={switch1} />
                        <p className="idsofpa023kese">Ved apning</p>
                    </div>
                    <div className="ids0w-esd2 brd-none d-flex flex-column pt-0 pl-0">
                        <p className="mt-18p">                   Inniedning
                        </p>
                        <Editor
                            // onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />

                    </div>
                    <div className="ids0w-esd2 brd-none d-flex flex-column pt-0 pl-0">
                        <p className="mt-18p">                  Melding
                        </p>
                        <Editor
                            // onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />

                    </div>
               
                </div>
                <div>

                </div>
            </div>



        </div>
    </div>
}
export default Home;
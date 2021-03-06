import React from 'react';

import SearchBar from '../components/home/searchBar';
import SideNav from '../components/sideNav'
import TopBar from '../components/topBar'
import { Table } from 'react-bootstrap'
import CheckBox from '../components/checkBox'
import Icon from '../svgIcons/svgIcons';
import Linechart from '../components/chart';

interface TodoProps {
    title: string,
    description: string,
    isSelected: boolean
}
const TodoItem = (props: TodoProps) => {
    const { title, description, isSelected } = props;
    // const [isSelected,setisSelected]=React.useState(false);
    return <div className="asidsa-asndise">
        <div className="jdifsd-dsew">
            <div className="fniasd93ew-ewe">
                <CheckBox isCheck={isSelected} isDisabled={false} />
                <p className={`ldknaf-saedsd ${isSelected === true ? "jfdsis-sdsae" : "jfdsis-sdsae-1"}`} >{title}</p>
            </div>
            <div className={isSelected === true ? "" : "d-none"}>
                <button className="btn nkcsdoc-wdcsd mjdf-ds2">
                    <Icon name="edit" />
                </button>
                <button className="btn nkcsdoc-wdcsd">
                    <Icon name="bin" />
                </button>
            </div>
        </div>

        <div>
            <p className={`hsdfs-sdasiew ${isSelected ? "jfdsis-sdsae" : "jfdsis-sdsae-2"}`}>

                {description}
            </p>

        </div>
    </div>
}
const Home = () => {
    const [todoArr,settodoArr]=React.useState<string[]>([]);
    return <div className="app-con d-flex">
        <SideNav />
        <div className="main-body">
            <div className="top-bar-main d-flex justify-content-between">
                <SearchBar />
                <TopBar />
            </div>
            <div>
                <h1 className="nasdifas-jdasde">Dashboard</h1>
            </div>
            <div className="d-flex row-1-cst ">
                <div className="todo-body-1 mafid-wewd">
                    <div className="d-flex justify-content-between ">
                        <h1 className="ldknaf-saedsd-1">Klienter</h1>
                        <button className="btn nkcsdoc-wdcsd mjdf-ds3">
                            <Icon name="menu" />
                        </button>
                    </div>
                    <div className="hdsauds-23wj">
                        <Table responsive borderless className="chuasjse-esduw">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.from({ length: 5 }, (v, i) => <tr key={i}>
                                        <td>Dummy Name</td>
                                        <td>32</td>
                                        <td>+47-123 45 678</td>
                                        <td>username@email.com</td>
                                        <td>Adressenanvet 23b</td>
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
                <div className="todo-body">
                    <div className="d-flex justify-content-between">
                        <h1 className="ldknaf-saedsd-1">Todo</h1>
                        <button className="btn nkcsdoc-wdcsd mjdf-ds3">
                            <Icon name="menu" />
                        </button>
                    </div>
                    <div className="todo-inner">
                    <TodoItem isSelected={true} title="Dummy Task name" description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. "/>
                    <TodoItem isSelected={false} title="Dummy Task name" description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. "/>
                    <TodoItem isSelected={false} title="Dummy Task name" description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. "/>
{
todoArr.map((x,i)=><TodoItem key={i} isSelected={false} title="Dummy Task name" description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. "/>)
}
                    </div>
                    <div className="d-flex aisdf-asdfswa2">
                        <button onClick={()=>{
                            settodoArr([...todoArr,""]);
                        }} className="btn nkcsdoc-wdcsd btn-add">
                            <Icon name="plus" />

                        </button>
                        <h2>Add Task</h2>
                    </div>
                </div>
            </div>

            <div className="chart-main-bd">
                <div className="d-flex justify-content-between ">
                    <h1 className="ldknaf-saedsd-1">History</h1>
                    <button className="btn nkcsdoc-wdcsd mjdf-ds3">
                        <Icon name="menu" />
                    </button>
                </div>
                <div className="chart-outer-body1">
                <Linechart/>    
                </div>
                

            </div>
        </div>
    </div>
}
export default Home;
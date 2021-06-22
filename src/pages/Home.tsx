import React from 'react';
import SearchBar from '../components/home/searchBar';
import SideNav from '../components/sideNav'
import TopBar from '../components/topBar'
const Home = () => {
    return <div className="app-con d-flex">
        <SideNav />
        <div className="jasdokf-we23">
            <div className="d-flex justify-content-between">
                <SearchBar />
                <TopBar/>
            </div>
        </div>
    </div>
}
export default Home;
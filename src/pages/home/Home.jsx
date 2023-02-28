import React from 'react';
import Widget from '../../components/widget/Widget';
import "./home.scss"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FeatureChart from '../../components/featurechart/FeatureChart';
import Chart from '../../components/chart/Chart';
const Home = () => {
    return (
        <div >
            <div className="widgets">
                <Widget data={{title:"USERS",isMoney:false,value:100,link:"See all users",icon:<PermIdentityIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>}}/>
                <Widget data={{title:"ORDERS",isMoney:false,value:200,link:"View all orders",icon:<ShoppingCartOutlinedIcon className='icon' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>}}/>
                <Widget data={{title:"EARNINGS",isMoney:true,value:150,link:"View net earnings",icon:<MonetizationOnOutlinedIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>}}/>
                <Widget data={{title:"BALANCE",isMoney:true,value:200,link:"See details",icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>}}/>
            </div>
            <div className="charts">
                <FeatureChart/>
                <Chart/>
            </div>
        </div>
    );
};

export default Home;
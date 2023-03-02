import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import TableComponent from '../../components/Table/Table';
import "./userDetails.scss"
const UserDetails = () => {
    // let { userId } = useParams();
    // console.log("userId",userId)
    const loggedInUser = useSelector((state) => state.user.user)
    return (
        <div className='userDetailsContainer'>
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img className="itemImg" src={loggedInUser.photoURL} alt="" />
                        <div className="details">
                            <h1 className="itemTitle">{loggedInUser.displayName}</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">{loggedInUser.email}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+1 2345 67 89</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">
                                    Elton St. 234 Garden Yd. NewYork
                                </span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={4/1} title={"Users spendings (Last 7 Months)" }/>
                </div>
            </div>
            <div className="bottom">
                <h1 className="title">Last Transactions</h1>
            <TableComponent/>
            </div>
        </div>
    );
};

export default UserDetails;
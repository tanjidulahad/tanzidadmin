import React from 'react';
import "./featurechart.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const FeatureChart = () => {
    return (
        <div className='featurechart'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="progressbar">
                <CircularProgressbar className='featurebar' value={70} text={`70%`} strokeWidth={5}/>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transaction processing. Last payments may not be included.</p>
                </div>
                <div className="summary">
                    <div className="item">
                        <p className='itemTitle'>Target</p>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon />
                            <p className="resultamount">$12.4k</p>
                        </div>
                    </div>
                    <div className="item">
                        <p className='itemTitle'>Last week</p>
                        <div className="itemResult negative">
                        <KeyboardArrowDownIcon/>
                            <p className="resultamount">$12.4k</p>
                        </div>
                    </div>
                    <div className="item">
                        <p className='itemTitle'>Last Month</p>
                        <div className="itemResult positive">
                        <KeyboardArrowUpIcon />
                            <p className="resultamount">$12.4k</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureChart;
import React from 'react';
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({type,data}) => {
    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney?"$":""} {data.value}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className='perchantage positive'>
                    <KeyboardArrowUpIcon/>
                    2%
                </div>
                    {data.icon}
            </div>
        </div>
    );
};

export default Widget;
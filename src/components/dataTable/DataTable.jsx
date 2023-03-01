import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../assets/tableData/tableData';
import "./dataTable.scss"
import { Link } from 'react-router-dom';
const DataTable = () => {
    const handleView=()=>{
        console.log("view clicked")
    }
    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to={`/user/${params.row.id}`}><div className="viewButton" onClick={handleView}>View</div></Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]
    return (
        <div className='dataContainer'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default DataTable;
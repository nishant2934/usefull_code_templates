import React, { useState, useEffect,useRef} from 'react';
import { DataTable, ConfirmDialog, confirmDialog, Column, Card, Button, Toolbar } from '../../helpers/utils';
import { StateService } from './services';
import Add from './Add';
import Edit from "./Edit";
import Upload from './Upload';
const Page = () => {

    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [data, setData] = useState([]);
    const [editRow, setEditRow] = useState(null);
    const [newDialog, setNewDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false);
    const [uploadDialog, setUploadDialog] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const dt = useRef(null);
    const [filters, setFilters] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null
    });


    useEffect(() => {
        loadLazyData(filters);
    }, []);

    const loadLazyData = (parameter) => {
        setLoading(true);
        StateService.getRows(parameter).then((result) => {
            if (!result.error) {
                setData(result.data.records)
                setTotalRecords(result.data.totalRecords)
                setLoading(false);
            } else {
                alert(result.msg)
            }
        })
    };

    const onPage = (event) => {
        setFilters(event);
        loadLazyData(event);
    };

    const onSort = (event) => {
        setFilters(event);
        loadLazyData(event);
    };

    const exportCSV = () => {
       
        console.log(dt.current.exportCSV(data));
    };

    const handleCloseDialog = async (close, isRender = false) => {

        setNewDialog(close);
        setEditDialog(close);
        setUploadDialog(close);
        if (isRender) {
            loadLazyData(filters);
        }
    }

    const deleteRecord = (row) => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                StateService.delete({ zipcode: [row.zipcode] })
                    .then(() => loadLazyData(filters));
            }
        })
    };
    const actionBodyTemplate = (row) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="me-2" onClick={(e) => { setEditDialog(true); setEditRow(row) }} />
                <Button onClick={() => deleteRecord(row)} icon="pi pi-trash" rounded outlined severity="danger" />
            </React.Fragment>
        );
    };

    const deleteMultipleRecord = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                StateService.delete({ zipcode: selectedRows.map((item) => item.zipcode) }).then(() => {
                    loadLazyData(filters);
                    setSelectedRows([]);
                });
            },
        });
    };
    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="" onClick={() => setUploadDialog(true)} icon="pi pi-file-import" className='me-2 ' tooltip="Import" tooltipOptions={{ position: "top" }} />
                <Button label="" icon="pi pi-file-export" className='me-2 ' tooltip="Export" tooltipOptions={{ position: "top" }} onClick={exportCSV} />
                {
                    selectedRows.length > 0 ?
                        <Button label="" onClick={() => { deleteMultipleRecord() }} icon="pi pi-trash" className='me-2 ' tooltip="Delete" severity="danger" tooltipOptions={{ position: "top" }} />
                        : null
                }
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Add" icon="pi pi-plus" severity="success" onClick={(e) => setNewDialog(true)} />
            </div>
        );

    };

    return (
        <Card>
            <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate} />
            <ConfirmDialog />
            <DataTable ref={dt} value={data} paginator 
                first={filters.first} lazy rows={filters.rows} totalRecords={totalRecords}
                loading={loading} onPage={onPage}
                rowsPerPageOptions={[10,50,100]}
                onSort={onSort} sortField={filters.sortField} sortOrder={filters.sortOrder}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                selection={selectedRows} onSelectionChange={(e) => { setSelectedRows(e.value) }} >
                <Column selectionMode="multiple" />
                <Column field="zipcode" sortable header="Zip Code" />
                <Column field="city" sortable header="City" />
                <Column field="state" sortable header="State" />
                <Column field="latitude" sortable header="Latitude" />
                <Column field="longitude" sortable header="Longitude" />
                <Column field="stateCode" sortable header="State Code" />
                <Column body={actionBodyTemplate}></Column>
            </DataTable>
            <Add show={newDialog} handleclosedialog={handleCloseDialog} />
            <Edit show={editDialog} handleclosedialog={handleCloseDialog} row={editRow} />
            <Upload show={uploadDialog} handleclosedialog={handleCloseDialog} />
        </Card>
    )
}

export default Page

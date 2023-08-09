import React, { useState, useEffect, useRef, useContext } from 'react';
import { DataTable, confirmDialog, Column, Card, Button, Toolbar, InputText, useDebounce, FilterMatchMode } from '../../helpers';
import { ProductTaxService } from './services';
import Upload from './Upload';
import ToastContext from '../../provider/ToastProvider';
import Add from './Add';
import Edit from "./Edit";
import EditTaxability from './EditTaxability';
import { EntryPerPage } from "../../config/constant"
import { capitalize } from 'lodash';


const Page = () => {
    const toast = useContext(ToastContext);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [data, setData] = useState([]);
    const [editRow, setEditRow] = useState(null);
    const [newDialog, setNewDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false);
    const [uploadDialog, setUploadDialog] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [search, debouncedSearch, setSearch] = useDebounce('', 500);
    const [expandedRows, setExpandedRows] = useState(null);
    const [childFilter, setChildFilter] = useState('');
    const [editTaxDialog, setEditTaxDialog] = useState(false);
    const [editTaxRow, setEditTaxRow] = useState(null);
    const [addDialogue, setAddDialogue] = useState(false);
    const [productId, setProductId] = useState(null);

    const [searchFilters, setSearchFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });


    const param = {
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        search: ''
    }

    const [filters, setFilters] = useState(param);

    useEffect(() => {
        loadLazyData(filters);
    }, [debouncedSearch]);

    const loadLazyData = (parameter) => {
        setLoading(true);
        ProductTaxService.getRows(parameter).then((result) => {
            if (!result.error) {
                setData(result.data)
                setTotalRecords(result.totalRecords)
                setLoading(false);
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

    const handleCloseDialog = async (close, isRender = false) => {
        setAddDialogue(false);
        setNewDialog(close);
        setEditDialog(close);
        setUploadDialog(close);
        setEditTaxDialog(close);
        if (isRender) {
            loadLazyData(filters);
        }
    }

    const deleteTaxability = (row) => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                ProductTaxService.deleteTaxability({ id: [row.id] }).then((result) => {
                    let type = (!result?.data?.error) ? 'success' : 'error';
                    if (!result?.data?.error) {
                        loadLazyData(filters)
                    }
                    toast.current.show({
                        severity: type,
                        summary: capitalize(type),
                        detail: result?.data?.message, life: 3000
                    });
                }
                )
            }
        })
    };

    const deleteProduct = (row) => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                ProductTaxService.deleteProduct({ id: [row.id] }).then((result) => {
                    toast.current.show({
                        severity: "success",
                        summary: "Success",
                        detail: result.data.message, life: 5000
                    });
                    loadLazyData(filters)
                }
                ).catch((error) => {
                    toast.current.show({
                        severity: "error",
                        summary: "Error",
                        detail: error.response.data.message, life: 5000
                    });
                })
            }
        })
    };

    const deleteMultipleRecord = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                ProductTaxService.delete({ zipcode: selectedRows.map((item) => item.zipcode) }).then(() => {
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
                {
                    selectedRows.length > 0 ?
                        <Button label="" onClick={() => { deleteMultipleRecord() }} icon="pi pi-trash" className='me-2 ' tooltip="Delete" severity="danger" tooltipOptions={{ position: "top" }} />
                        : null
                }
            </React.Fragment>
        );
    };

    const searchDatatable = (event) => {
        setSearch(event);
        setFilters({ ...param, ['search']: event });
    }

    const allowExpansion = () => {
        return true;
    };


    const onChildFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...searchFilters };
        _filters['global'].value = value;
        setSearchFilters(_filters);
        setChildFilter(value);
    };

    const clearChildSearchFilter = () => {
        setChildFilter('')
        let _filters = { ...searchFilters };
        _filters['global'].value = '';
        setSearchFilters(_filters);
    }

    const childHeader = () => {
        return (
            <div className="d-flex flex-wrap gap-20 align-items-center justify-content-between">
                <div className="p-input-icon-left">
                    <i className={childFilter ? 'pi pi-times' : 'pi pi-search'} style={{ top: "26px" }}
                        onClick={() => clearChildSearchFilter()} />
                    <InputText value={childFilter || ''} onChange={onChildFilterChange} placeholder="Search..." />
                </div>
                <Button className="p-input-icon-right" onClick={() => { setAddDialogue(true) }} label="Add" icon="pi pi-plus" severity="success" />

            </div>
        );
    };

    const childTemplateAction = (row) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="me-2" onClick={(e) => { setEditTaxDialog(true); setEditTaxRow(row) }} />
                <Button onClick={() => deleteTaxability(row)} icon="pi pi-trash" rounded outlined severity="danger" />
            </React.Fragment>
        ); 
    }

    const rowExpansionTemplate = (data) => {
        setProductId(data.id);
        return (
            <div className="p-3">
                <DataTable value={data.child} filters={searchFilters} paginator rows={5} header={childHeader} >
                    <Column field="stateCode" header="State Code" ></Column>
                    <Column field="state" header="State" ></Column>
                    <Column field="taxStatus" header="Tax Status" ></Column>
                    <Column body={childTemplateAction}></Column>
                </DataTable>
            </div>
        );
    };

    const parentHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span className="p-input-icon-left">
                    <i className={search ? 'pi pi-times' : 'pi pi-search'} style={{ top: "26px" }} onClick={() => { setSearch(''); setFilters(param) }} />
                    <InputText value={search || ''} onChange={(e) => searchDatatable(e.target.value)} placeholder="Search..." />
                </span>
            </div>
        );
    };

    const parentTemplateAction = (row) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="me-2" onClick={(e) => { setEditDialog(true); setEditRow(row) }} />
                <Button onClick={() => deleteProduct(row)} icon="pi pi-trash" rounded outlined severity="danger" />
            </React.Fragment>
        );

    };

    return (
        <Card>
            <Toolbar className="mb-4" left={leftToolbarTemplate} />
            <DataTable value={data} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
                dataKey="id"
                paginator
                first={filters.first} lazy rows={filters.rows} totalRecords={totalRecords}
                loading={loading} onPage={onPage}
                rowsPerPageOptions={EntryPerPage}
                onSort={onSort} sortField={filters.sortField} sortOrder={filters.sortOrder}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                selection={selectedRows} onSelectionChange={(e) => { setSelectedRows(e.value) }} header={parentHeader} >
                <Column expander={allowExpansion} style={{ width: '5rem' }} />
                <Column field="name" header="Name" />  
                <Column field="code" header="Code" />
                <Column body={parentTemplateAction} />
            </DataTable>
            <Edit show={editDialog} handleclosedialog={handleCloseDialog} row={editRow} />
            <Add show={addDialogue} handleclosedialog={handleCloseDialog} productid={productId} />
            <EditTaxability show={editTaxDialog} handleclosedialog={handleCloseDialog} row={editTaxRow} />
            <Upload show={uploadDialog} handleclosedialog={handleCloseDialog} />
        </Card>
    )
}

export default Page

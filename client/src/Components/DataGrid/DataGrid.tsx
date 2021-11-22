import React, { Component } from 'react';
import { TablePagination, Tooltip } from '@mui/material';

import Cell from './Cell/Cell';
import styled from 'styled-components';

interface Header {
    field: string;
    headerName: string;
    sortable?: boolean;
    type?: string;
    valueGetter?(params: object): string;
}
interface DataGridProps {
    headers?: Header[];
    title?: string;
    initialPageSize?: number;
    data: object[]

}

interface DataGridState {
    sortedField: string;
    page: number;
    pageSize: number;
    tableData: object[];
    currentOrder: number;

}


const Tr = styled.tr`
`;
const Th = styled.th`
    border: 1px solid #734e5f;
    background-color: #ae7d90;
    padding: 4px;
    color:#f4f6f8;
    text-align: left;
`;

const Table = styled.table`
    border-spacing: 0px;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    width: 100%;
`;
const DataGridContainer = styled.div`
max-width: 100vw;`;

const sorter = (a:any,b:any):number => {
    if (a === b) {
        return 0;
     }
     else if (a === null) {
        return 1;
     } else if (b === null) {
        return -1;
     }else  {
        return a < b ? -1 : 1;
     }
}
export default class DataGrid extends Component<DataGridProps, DataGridState> {
    constructor(props: DataGridProps) {
        super(props);
        const { initialPageSize, data } = props;
        this.state = {
            sortedField: "",
            currentOrder: 1,
            page: 0,
            pageSize: initialPageSize ? initialPageSize : 10,
            tableData: data
        }
    }
    sort = (field: string) => {
        const { tableData, sortedField } = this.state;
        const { data } = this.props;
      
        const newData = field === sortedField ?
            tableData.reverse()
            : data.sort((a: any, b: any) => sorter(a[field],b[field]))
            ;

        this.setState({
            sortedField: field,
            tableData: newData
        });

    }
    getHeadersFromData = (): Header[] => {
        // if a headers prop has not been assigned, one is generated from the first object of the data array
        const headers: Header[] = [];
        const { data } = this.props;
        Object.keys(data[0]).map((key) => {
            return headers.push({ field: key, headerName: key.toUpperCase(), type: typeof data[0] });
        });


        return headers;
    }
    renderHeaderCells = (_cell: Header, cellIndex: number) => {
        const notSortable = _cell.sortable === false;

        if (notSortable) {
            return (<Tooltip key={`header-${_cell.field}`} title="This column cannot be sorted">
                <Th
                    key={`header-${_cell.field}`}
                >
                    {_cell.headerName}
                </Th></Tooltip>);
        } else {
            return (<Th
                key={`header-${_cell.field}`}
                onClick={e => this.sort(_cell.field)}>
                {_cell.headerName}
            </Th>);

        }


    }

    renderRow = (_data: any, dataIndex: number) => {

        const { headers } = this.props;
        // if there are headers defined, print in that order else print in the generated headers order
        const printOrder = headers ? headers.map(header => header.field) : this.getHeadersFromData().map(header => header.field);


        return <Tr key={`row-${dataIndex}`}>
            {printOrder.map(fieldName => {
                // check if that field has a value getter and if so, use it to set the content
                const valueGetter = headers && headers.find((header) => header.field === fieldName)?.valueGetter;
                const content = valueGetter ? valueGetter(_data) : _data[fieldName];
                return (
                    <Cell
                        key={`row-${dataIndex}-${fieldName}`}
                        content={content}
                    />
                )
            })

            }</Tr>;
    }
    handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        this.setState({ page: newPage });
        // feed the presented array
    }
    handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({ page: 0, pageSize: parseInt(event.target.value) });

    }
    renderFooter = () => {
        const { data } = this.props;
        const { page, pageSize } = this.state;
        const count = Math.ceil(data.length / pageSize);

        return <TablePagination
            component="div"
            page={page}
            count={count}
            rowsPerPage={pageSize}
            onPageChange={this.handlePageChange}
            onRowsPerPageChange={this.handleChangePageSize} />;
    }
    render() {
        const { headers } = this.props;
        const { tableData } = this.state;
        this.renderHeaderCells = this.renderHeaderCells.bind(this);
        this.renderRow = this.renderRow.bind(this);

        const header = (<Tr>{headers ? headers.map(this.renderHeaderCells) : this.getHeadersFromData().map(this.renderHeaderCells)}</Tr>);
        const body = tableData.map(this.renderRow);
        const footer = this.renderFooter();
        return (
            <DataGridContainer>
                <Table>
                    <thead>{header}</thead>
                    <tbody>{body}</tbody>
                    {footer}
                </Table>

            </DataGridContainer>
        )
    }
}




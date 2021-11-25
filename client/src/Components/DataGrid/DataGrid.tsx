import { IconButton, Pagination, Tooltip } from '@mui/material';
import React, { Component } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

interface Header {
    field: string;
    headerName: string;
    sortable?: boolean;
    type?: string;
    valueGetter?(params: object): string;
    deleteEntry?: string | object;
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
const Table = styled.table`
    border-spacing: 0px;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    width: 100%;
    border-collapse: collapse; 
    table-layout:auto;
   
`;

const Tr = styled.tr`

&:nth-of-type(odd) { 
    background: #dde; 
  }

`;

const Th = styled.th`
&:first-child{
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    color: #fff;
}
    border: 1px solid #fff;
    background-color: #734e5f;
    color:#f4f6f8;
    text-align:left;
    padding: 14px 20px;
    


`;
const Td = styled.td`
&:first-child{
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    background-color:  #734e5f;
    color:#fff;
    font-weight: bold; 


}
    border: 1px solid #f4f6f8;
    padding: 12px 20px;
    text-align: left;
    white-space: nowrap;
    overflow:hidden;
    white-space:nowrap;
   
   
  
`;






const DataGridContainer = styled.div`
width:100vw;
overflow: scroll;

/* width and height*/
::-webkit-scrollbar {
  width: 10px;
  height:5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #965774;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #734e5f;
}
`;

const FooterContainer = styled.div`
display:flex;
    justify-content: center;
    width:100vw;
 
   
`;

const sorter = (a: any, b: any): number => {
    if (a === b) {
        return 0;
    }
    else if (a === null) {
        return 1;
    } else if (b === null) {
        return -1;
    } else {
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
            page: 1,
            pageSize: initialPageSize ? initialPageSize : 10,
            tableData: data
        }
    }
    sort = (field: string) => {
        const { tableData, sortedField } = this.state;
        const { data } = this.props;

        const newData = field === sortedField ?
            tableData.reverse()
            : data.sort((a: any, b: any) => sorter(a[field], b[field]))
            ;

        this.setState({
            sortedField: field,
            tableData: newData,
            page: 1
        });

    }
    handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        this.setState({ page: newPage });
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
            return (
                <Tooltip key={`header-${_cell.field}`} title="This column cannot be sorted">
                    <Th
                        key={`header-${_cell.field}`}
                    >
                        {_cell.headerName}
                    </Th>
                </Tooltip>);
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
                    <Td key={`row-${dataIndex}-${fieldName}`}>
                        {content}
                    </Td>
                )
            })

            }
            <Td>
                <IconButton aria-label="delete" onClick={e => { this.deleteRow(_data) }}>
                    <DeleteIcon />
                </IconButton>
            </Td>
        </Tr>;
    }

    deleteRow = (data: object) => {
        /**
         *For the demo this function deletes the product in the local state. 
        The full implementation would obviously check if a deleteEntry function 
        has been passed as a prop (in this case, the redux function 'deleteProductRequest')
        and if none have been passed,just delete the entry in the local tableData state variable
         */
        const { tableData } = this.state;
        this.setState({
            tableData: tableData.filter(entry => entry !== data)
        });
    }
    renderFooter = () => {

        const { tableData, page, pageSize } = this.state;
        const count = Math.ceil(tableData.length / pageSize);

        return <Pagination
            page={page}
            count={count}
            onChange={this.handlePageChange}
            defaultPage={1}
            variant={'outlined'}
            size={"large"}

        />;
    }
    render() {
        const { headers } = this.props;
        const { tableData, page, pageSize } = this.state;

        const startIndex = ((page - 1) * pageSize);

        this.renderHeaderCells = this.renderHeaderCells.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);

        const header = (<Tr>{headers ? headers.map(this.renderHeaderCells) : this.getHeadersFromData().map(this.renderHeaderCells)}<Th>Action</Th></Tr>);
        const body = tableData.slice(startIndex, page * pageSize).map(this.renderRow);
        const footer = this.renderFooter();
        return (
            <>
                <FooterContainer>{footer}</FooterContainer>
                <DataGridContainer>
                    <Table>
                        <thead>{header}</thead>
                        <tbody>{body}</tbody>

                    </Table>
                </DataGridContainer>
            </>

        )
    }
}




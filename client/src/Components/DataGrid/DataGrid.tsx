import React, { Component, useEffect, useState } from 'react';

import Cell from './Cell/Cell';
import PropTypes from 'prop-types'
import styled from 'styled-components';

interface Header {
    field: string;
    headerName: string;
    type?: string;
    description?: string;
    valueGetter?(params: object): string;
}
interface DataGridProps {
    headers?: Header[];
    title?: string;
    initialPageSize?: number;
    data: object[]

}

interface DataGridState {
    sortedField: { field: string, order: 1 | -1 };
    page: number;
    pageSize: number;


}

const Tr = styled.tr`
`;

const Table = styled.table`
    border-spacing: 0px;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    width: 100%;
`;
const DataGridContainer = styled.div`
max-width: 100vw;`;

export default class DataGrid extends Component<DataGridProps, DataGridState> {
    constructor(props: DataGridProps) {
        super(props);
        const { initialPageSize } = props;
        this.state = {
            sortedField: { field: "", order: 1 },
            page: 0,
            pageSize: initialPageSize ? initialPageSize : 5,
        }
    }
    sort = (field: string, order: 1 | -1) => {
        this.setState({ sortedField: { field: field, order: order } });

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

        return (<Cell
            key={`header-${_cell.field}`}
            content={_cell.headerName}
            header
        />);

    }

    renderRow = (_data: any, dataIndex: number) => {

        const { headers } = this.props;
        // if there are headers defined, print in that order else print in the generated headers order
        const printOrder = headers ? headers.map(header => header.field) : this.getHeadersFromData().map(header => header.field);


        return <Tr key={`row-${dataIndex}`}>
            {printOrder.map(fieldName => {
                // check if that field has a value getter and if so, use it to set the content
                const valueGetter =  headers && headers.find((header) => header.field===fieldName)?.valueGetter ;
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
    renderFooter = () => {

    }
    render() {
        const { headers, data } = this.props;
        this.renderHeaderCells = this.renderHeaderCells.bind(this);
        this.renderRow = this.renderRow.bind(this);

        const header = (<Tr>{headers ? headers.map(this.renderHeaderCells) : this.getHeadersFromData().map(this.renderHeaderCells)}</Tr>);
        const body = data.map(this.renderRow);
        return (
            <DataGridContainer>
                <Table>
                    <thead>{header}</thead>
                    <tbody>{body}</tbody>
                </Table>
            </DataGridContainer>
        )
    }
}




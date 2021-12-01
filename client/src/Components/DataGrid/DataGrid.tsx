import { IconButton, Pagination, Tooltip } from '@mui/material';
import React, { Component } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { GetPage } from '../../Store/inventory/types';
import Swal from 'sweetalert2';
import sorter from '../../Utils/sorter.utils';
import styled from 'styled-components';

interface Header {
  field: string;
  headerName: string;
  sortable?: boolean;
  type?: string;
  // eslint-disable-next-line no-unused-vars
  valueGetter?(params: object): string;
  deleteEntry?: string | object;
}
interface DataGridProps {
  headers?: Header[];
  title?: string;
  initialPageSize?: number;
  data: object[];
  // Dynamic data grid props
  dynamic?: boolean;
  currentPage?: number;
  currentSortField: string;
  order?: 'ASC' | 'DESC';
  total?: number;
  // eslint-disable-next-line no-unused-vars
  deleteEntry?: (dataEntry: object) => void;
  // eslint-disable-next-line no-unused-vars
  getPage?: (pageDetails: GetPage) => void;
}

interface DataGridState {
  sortedField: string;
  page: number;
  pageSize: number;
  tableData: object[];
  currentOrder: 'ASC' | 'DESC';
}
const Table = styled.table`
  border-spacing: 0px;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
`;

const Tr = styled.tr`
  &:nth-of-type(odd) {
    background: #dde;
  }
`;

const Th = styled.th`
  &:first-child {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    color: #fff;
  }
  border: 1px solid #fff;
  background-color: #734e5f;
  color: #f4f6f8;
  text-align: left;
  padding: 14px 20px;
`;
const Td = styled.td`
  &:first-child {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    background-color: #734e5f;
    color: #fff;
    font-weight: bold;
  }
  border: 1px solid #f4f6f8;
  padding: 12px 20px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
`;

const DataGridContainer = styled.div`
  width: 100vw;
  overflow: scroll;

  /* width and height*/
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
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
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export default class DataGrid extends Component<DataGridProps, DataGridState> {
  constructor(props: DataGridProps) {
    super(props);
    const { initialPageSize = 10, data, headers, currentPage = 1, dynamic } = props;
    this.state = {
      sortedField: headers ? headers[0].field : this.getHeadersFromData()[0].field,
      currentOrder: 'ASC',
      page: dynamic ? currentPage : 1,
      pageSize: initialPageSize,
      tableData: data
    };
  }
  /**
   * The sort function first checks if the component is being used "dynamically"
   * if so it checks if a getPage function has been passed if not, an error message shows when the user tries to sort
   * @param field
   */
  sort = (field: string) => {
    const { tableData, sortedField, page, pageSize } = this.state;
    const { data, dynamic, getPage, currentSortField, order } = this.props;
    if (dynamic) {
      let newOrder;
      if (field === currentSortField) {
        newOrder = order === 'DESC' ? 'ASC' : 'DESC';
      } else {
        newOrder = 'ASC';
      }
      getPage
        ? getPage({
            limit: pageSize,
            page,
            sortField: field,
            order: newOrder as 'ASC' | 'DESC'
          })
        : Swal.fire(
            'Error',
            'The "getPage" props is undefined. Please set it if you want to use this component dynamically.',
            'error'
          );
    } else {
      const newData =
        field === sortedField
          ? tableData.reverse()
          : data.sort((a: any, b: any) => sorter(a[field], b[field]));
      this.setState({
        sortedField: field,
        tableData: newData,
        page: 1,
        currentOrder: field === sortedField ? 'DESC' : 'ASC'
      });
    }
  };
  handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    const { currentOrder, sortedField, pageSize } = this.state;
    const { dynamic, getPage } = this.props;
    if (dynamic) {
      getPage
        ? getPage({
            limit: pageSize,
            page: newPage,
            sortField: sortedField,
            order: currentOrder
          })
        : Swal.fire(
            'Error',
            'The "getPage" props is undefined. Please set it if you want to use this component dynamically.',
            'error'
          );
    } else {
      this.setState({ page: newPage });
    }
  };

  getHeadersFromData = (): Header[] => {
    // if a headers prop has not been assigned, one is generated from the first object of the data array
    const headers: Header[] = [];
    const { data } = this.props;
    Object.keys(data[0]).map((key) => {
      return headers.push({ field: key, headerName: key.toUpperCase(), type: typeof data[0] });
    });

    return headers;
  };

  renderHeaderCells = (_cell: Header, cellIndex: number) => {
    const notSortable = _cell.sortable === false;

    if (notSortable) {
      return (
        <Tooltip key={`header-${_cell.field}-${cellIndex}`} title="This column cannot be sorted">
          <Th key={`header-${_cell.field}`}>{_cell.headerName}</Th>
        </Tooltip>
      );
    } else {
      return (
        <Th
          key={`header-${_cell.field}-${cellIndex}`}
          onClick={(e) => {
            e.preventDefault();
            this.sort(_cell.field);
          }}
        >
          {_cell.headerName}
        </Th>
      );
    }
  };

  renderRow = (_data: any, dataIndex: number) => {
    const { headers } = this.props;
    // if there are headers defined, print in that order else print in the generated headers order
    const printOrder = headers
      ? headers.map((header) => header.field)
      : this.getHeadersFromData().map((header) => header.field);

    return (
      <Tr key={`row-${dataIndex}`}>
        {printOrder.map((fieldName) => {
          // check if that field has a value getter and if so, use it to set the content
          const valueGetter =
            headers && headers.find((header) => header.field === fieldName)?.valueGetter;
          const content = valueGetter ? valueGetter(_data) : _data[fieldName];
          return <Td key={`row-${dataIndex}-${fieldName}`}>{content}</Td>;
        })}
        <Td>
          <IconButton
            aria-label="delete"
            onClick={(e) => {
              e.preventDefault();
              this.deleteRow(_data);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Td>
      </Tr>
    );
  };

  deleteRow = (dataEntry: object) => {
    const { tableData } = this.state;
    const { deleteEntry, dynamic } = this.props;

    if (dynamic) {
      deleteEntry
        ? deleteEntry(dataEntry)
        : Swal.fire(
            'Error',
            'The "deleteEntry" props is undefined. Please set it if you want to use this component dynamically.',
            'error'
          );
    } else {
      this.setState({
        tableData: tableData.filter((entry) => entry !== dataEntry)
      });
    }
  };
  renderFooter = () => {
    const { dynamic, total } = this.props;
    const { tableData, page, pageSize } = this.state;
    console.log(total);
    const count =
      dynamic && total ? Math.ceil(total / pageSize) : Math.ceil(tableData.length / pageSize);

    return (
      <Pagination
        page={page}
        count={count}
        onChange={this.handlePageChange}
        defaultPage={1}
        variant={'outlined'}
        size={'large'}
      />
    );
  };
  render() {
    const { headers, dynamic, data } = this.props;
    const { tableData, page, pageSize } = this.state;

    const startIndex = (page - 1) * pageSize;

    this.renderHeaderCells = this.renderHeaderCells.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    const header = (
      <Tr>
        {headers
          ? headers.map(this.renderHeaderCells)
          : this.getHeadersFromData().map(this.renderHeaderCells)}
        <Th>Action</Th>
      </Tr>
    );
    const body = dynamic
      ? data.map(this.renderRow)
      : tableData.slice(startIndex, page * pageSize).map(this.renderRow);
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
    );
  }
}

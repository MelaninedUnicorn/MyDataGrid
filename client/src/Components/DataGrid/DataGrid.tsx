import { DataGridContainer, PaginationBarContainer, Table, Td, Th, Tr } from './DataGrid.styles';
import { DataGridProps, DataGridState, Header } from './DataGrid.types';
import {
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Tooltip
} from '@mui/material';
import React, { Component } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import sorter from '../../Utils/sorter.utils';

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
        : console.error(
            'The "getPage" props is undefined. Please set it if you want to use this component dynamically.'
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
  /**
   *This function is called if no headers' prop has been assigned
   * and it  gets the keys from the first object of the passed prop
   * @returns an object of this Headers
   */
  getHeadersFromData = (): Header[] => {
    // if a headers prop has not been assigned, one is generated from the first object of the data array
    const headers: Header[] = [];
    const { data } = this.props;
    Object.keys(data[0]).map((key) => {
      return headers.push({ field: key, headerName: key.toUpperCase(), type: typeof data[0] });
    });

    return headers;
  };
  /**
   * Function that prints the table heading cells
   * @param _cell
   * @param cellIndex
   * @returns a Th component with the header name
   */
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

  /**
   * This function gets the print order to uniformly print the objects
   * if there are headers defined, it prints in that order 
   * else print in the generated headers order. It then goes to print the value by checking 
   * if there is a getValue function assigned to this field

   * @param _data 
   * @param dataIndex 
   * @returns a Tr component with all the current entry's information and a delete in
   */
  renderRow = (_data: any, dataIndex: number) => {
    const { headers } = this.props;

    const printOrder = headers
      ? headers.map((header) => header.field)
      : this.getHeadersFromData().map((header) => header.field);

    return (
      <Tr key={`row-${dataIndex}`}>
        {printOrder.map((fieldName) => {
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
  /**
   * This function checks if the Data Grid component is used dynamically,
   * if so, it expects a @deleteEntry function to be passed via the props and executes it
   * and if @deleteEntry is undefined it logs an error for the developer
   * if the Data Grid component is not used dynamically, this function simply removes the entry from the state
   * @param dataEntry
   */
  deleteRow = (dataEntry: object) => {
    const { tableData } = this.state;
    const { deleteEntry, dynamic } = this.props;

    if (dynamic) {
      deleteEntry
        ? deleteEntry(dataEntry)
        : console.error(
            'The "deleteEntry" props is undefined. Please set it if you want to use this component dynamically.'
          );
    } else {
      this.setState({
        tableData: tableData.filter((entry) => entry !== dataEntry)
      });
    }
  };
  /**
   * This function is called by the Pagination bar and first checks if the Data Grid component is used dynamically
   * if so, it expects a @getPage function to be passed via the props and executes it to get the page requested
   * and if @getPage is undefined, it logs an error for the developer
   * if the Data Grid component is not used dynamically, this function simply sets the new page number in the state
   * @param event
   * @param newPage
   */
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
        : console.error(
            'The "getPage" props is undefined. Please set it if you want to use this component dynamically.'
          );
    } else {
      this.setState({ page: newPage });
    }
  };
  /**
   * This function is called by the Pagination bar and first checks if the Data Grid component is used dynamically
   * if so, it expects a @getPage function to be passed via the props and executes it to get the page requested with a new size
   * and if @getPage is undefined, it logs an error for the developer
   * if the Data Grid component is not used dynamically, this function simply sets the new page size in the state
   * @param event
   */
  handlePageSizeChange = (event: SelectChangeEvent) => {
    const { currentOrder, sortedField, page } = this.state;
    const { dynamic, getPage } = this.props;
    if (dynamic) {
      getPage
        ? getPage({
            limit: parseInt(event.target.value),
            page: page,
            sortField: sortedField,
            order: currentOrder
          })
        : console.error(
            'The "getPage" props is undefined. Please set it if you want to use this component dynamically.'
          );
    } else {
      this.setState({ pageSize: parseInt(event.target.value) });
    }
  };
  /**
   * This function combines a select component along with with a pagination component
   * to form the Data Grid's Pagination bar which controls part of the state of the component
   * @returns
   */
  renderPaginationBar = () => {
    const { dynamic, total } = this.props;
    const { tableData, page, pageSize } = this.state;
    const count =
      dynamic && total ? Math.ceil(total / pageSize) : Math.ceil(tableData.length / pageSize);

    return (
      <PaginationBarContainer>
        <Grid item xs={2}>
          <FormControl fullWidth variant="standard">
            <Select
              style={{
                width: '99.3%',
                backgroundColor: '#a36f87',
                color: 'white',
                fontWeight: 'bolder'
              }}
              labelId="page-size-label"
              id="page-size-select"
              value={pageSize + ''}
              label="Rows per Page"
              onChange={this.handlePageSizeChange}
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={15}>Fifteen</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={50}>Fifty</MenuItem>
              <MenuItem value={100}>One Hundred</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={10}>
          <Pagination
            style={{ width: '99.3%', backgroundColor: '#a36f87', fontWeight: 'bolder' }}
            page={page}
            count={count}
            onChange={this.handlePageChange}
            defaultPage={1}
            showFirstButton
            showLastButton
            variant={'outlined'}
            size={'medium'}
          />
        </Grid>
      </PaginationBarContainer>
    );
  };

  render() {
    const { headers, dynamic, data } = this.props;
    const { tableData, page, pageSize } = this.state;

    const startIndex = (page - 1) * pageSize;

    this.renderHeaderCells = this.renderHeaderCells.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderPaginationBar = this.renderPaginationBar.bind(this);

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
    const footer = this.renderPaginationBar();
    return (
      <div style={{ paddingLeft: '3vh' }}>
        {footer}
        <DataGridContainer>
          <Table>
            <thead>{header}</thead>
            <tbody>{body}</tbody>
          </Table>
        </DataGridContainer>
      </div>
    );
  }
}

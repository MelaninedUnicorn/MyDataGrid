import { InventoryState, Product } from '../Store/inventory/types';
import React, { useEffect } from 'react';
import { deleteProductRequest, fetchInventoryRequest } from '../Store/inventory/action';

import { AnyAction } from 'redux';
import { ApplicationState } from '../Store';
import DataGrid from '../Components/DataGrid/DataGrid';
import Loading from '../Components/Loading/Loading';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import lodash from 'lodash';

function MyProductDataGrid({ loading, data, fetchInventoryRequest }: InventoryState) {
  useEffect(() => {
    fetchInventoryRequest && fetchInventoryRequest();
  }, [fetchInventoryRequest]);

  const headers = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title' },
    { field: 'category', headerName: 'Category' },
    { field: 'price', headerName: 'Price' },
    {
      field: 'specifications',
      headerName: 'Specifications',
      sortable: false,
      valueGetter: (product: Product) => {
        // eslint-disable-next-line no-unused-vars
        let { id, title, description, price, category, ...specifications } = product;
        const { startCase } = lodash;

        let specsToString = '';
        for (const [key, value] of Object.entries(specifications)) {
          specsToString += `-${startCase(key)}: ${value} \n `;
        }
        return specsToString;
      }
    },
    { field: 'description', headerName: 'Description' }
  ];

  return loading ? <Loading /> : <DataGrid data={data} headers={headers} />;
}

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.error,
  data: inventory.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchInventoryRequest: () => {
      dispatch(fetchInventoryRequest());
    },
    deleteProductRequest: () => {
      dispatch(deleteProductRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProductDataGrid);

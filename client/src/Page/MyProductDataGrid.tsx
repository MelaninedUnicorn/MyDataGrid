import { InventoryState, Product } from '../Store/inventory/types';
import React, { useEffect } from 'react';
import { deleteProductRequest, fetchInventoryRequest } from '../Store/inventory/action';

import { AnyAction } from 'redux';
import { ApplicationState } from '../Store';
import DataGrid from '../Components/DataGrid/DataGrid';
import Loading from '../Components/Loading/Loading';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { setCsrfToken } from '../Store/inventory/services';

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
    deleteProductRequest: (id: string) => {
      dispatch(deleteProductRequest(id));
    }
  };
};

type MyProductDataGridProps = InventoryState & ReturnType<typeof mapDispatchToProps>;

function MyProductDataGrid({
  loading,
  data,
  fetchInventoryRequest,
  deleteProductRequest
}: MyProductDataGridProps) {
  useEffect(() => {
    setCsrfToken();
  }, [setCsrfToken]);

  useEffect(() => {
    fetchInventoryRequest();
  }, [fetchInventoryRequest, deleteProductRequest]);

  const headers = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title' },
    { field: 'category', headerName: 'Category' },
    { field: 'price', headerName: 'Price' },
    { field: 'description', headerName: 'Description' }
  ];
  const deleteProduct = (product: Product | any) => {
    deleteProductRequest(product.id);
  };

  return loading === true ? (
    <Loading />
  ) : (
    <DataGrid data={data} headers={headers} deleteEntry={deleteProduct} />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProductDataGrid);

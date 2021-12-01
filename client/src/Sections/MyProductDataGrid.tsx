import { GetPage, InventoryState, Product } from '../Store/inventory/types';
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
  currentPage: inventory.currentPage,
  order: inventory.order,
  data: inventory.data,
  total: inventory.total,
  sortField: inventory.sortField
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchInventoryRequest: (pageDetails: GetPage) => {
      dispatch(fetchInventoryRequest(pageDetails));
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
  total,
  currentPage,
  sortField,
  order,
  fetchInventoryRequest,
  deleteProductRequest
}: MyProductDataGridProps) {
  useEffect(() => {
    setCsrfToken();
  }, [setCsrfToken]);

  useEffect(() => {
    fetchInventoryRequest({ limit: 10, page: 1, sortField: 'id', order: 'ASC' });
  }, [fetchInventoryRequest]);

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

  const getPage = ({ limit, page, sortField, order }: GetPage) => {
    fetchInventoryRequest({ limit, page, sortField, order });
  };

  return loading === true ? (
    <Loading />
  ) : (
    <DataGrid
      dynamic
      total={total}
      data={data}
      order={order as 'ASC' | 'DESC'}
      currentSortField={sortField}
      currentPage={currentPage}
      headers={headers}
      deleteEntry={deleteProduct}
      getPage={getPage}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProductDataGrid);

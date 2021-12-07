import { GetPage, InventoryState, Product } from '../Store/inventory/types';
import React, { useEffect } from 'react';
import { deleteProductRequest, fetchInventoryRequest } from '../Store/inventory/action';

import { AnyAction } from 'redux';
import { ApplicationState } from '../Store';
import DataGrid from '../Components/DataGrid/DataGrid';
import Loading from '../Components/Loading/Loading';
import Swal from 'sweetalert2';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { setCsrfToken } from '../Store/inventory/services';

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  error: inventory.error,
  limit: inventory.limit,
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
    deleteProductRequest: async (id: string) => {
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
  limit,
  sortField,
  order,
  error,
  fetchInventoryRequest,
  deleteProductRequest
}: MyProductDataGridProps) {
  useEffect(() => {
    setCsrfToken();
  }, [setCsrfToken]);

  useEffect(() => {
    fetchInventoryRequest({ limit: 10, page: 1, sortField: 'id', order: 'ASC' });
  }, [fetchInventoryRequest]);
  useEffect(() => {
    if (error) {
      Swal.fire('Oops!', error, 'error');
    }
  });

  const headers = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title' },
    { field: 'category', headerName: 'Category' },
    { field: 'price', headerName: 'Price' },
    { field: 'description', headerName: 'Description' }
  ];
  /**
   * Defining the function that will be passed onto the data grid component as @deleteEntry
   * This function will dispatch the DELETE_PRODUCT_REQUEST action
   * @param product
   */
  const deleteProduct = (product: Product | any) => {
    const { id } = product;
    deleteProductRequest(id as string).then(() => {
      fetchInventoryRequest({ limit, page: currentPage, sortField, order });
    });
  };

  /**
   * Defining the function that will be passed onto the data grid component as @getPage
   * This function will dispatch the GET_INVENTORY_REQUEST action
   * @param pageDetails
   */
  const getPage = ({ limit, page, sortField, order }: GetPage) => {
    fetchInventoryRequest({ limit, page, sortField, order });
  };

  return loading === true ? (
    <Loading />
  ) : (
    <DataGrid
      dynamic
      title={'Dynamic Product DataGrid'}
      initialPageSize={limit}
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

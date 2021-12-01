import { GetPage } from '../../Store/inventory/types';
export interface Header {
  field: string;
  headerName: string;
  sortable?: boolean;
  type?: string;
  // eslint-disable-next-line no-unused-vars
  valueGetter?(params: object): string;
  deleteEntry?: string | object;
}
export interface DataGridProps {
  headers?: Header[];
  title?: string;
  initialPageSize?: number;
  data: object[];
  // Dynamic data grid props
  dynamic?: boolean;
  currentPage?: number;
  currentSortField?: string;
  order?: 'ASC' | 'DESC';
  total?: number;
  // eslint-disable-next-line no-unused-vars
  deleteEntry?: (dataEntry: object) => void;
  // eslint-disable-next-line no-unused-vars
  getPage?: (pageDetails: GetPage) => void;
}

export interface DataGridState {
  sortedField: string;
  page: number;
  pageSize: number;
  tableData: object[];
  currentOrder: 'ASC' | 'DESC';
}

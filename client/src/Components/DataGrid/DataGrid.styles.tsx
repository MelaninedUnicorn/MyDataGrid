import styled from 'styled-components';
export const Table = styled.table`
  border-spacing: 0px;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background: #dde;
  }
`;

export const Th = styled.th`
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
export const Td = styled.td`
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

export const DataGridContainer = styled.div`
  width: 100vw;
  overflow: scroll;
  margin: auto;

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

export const PaginationBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #734e5f;
`;
export default {
  Th,
  Tr,
  Td,
  Table,
  DataGridContainer,
  PaginationBarContainer
};

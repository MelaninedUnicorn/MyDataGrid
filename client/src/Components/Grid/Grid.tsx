import styled from 'styled-components';
interface ColProps {
  size?: number;
  collapse?: string;

}
// TODO: implement collapsible column
// const media = {
//   xs: (styles: any): string => `
//   @media only screen and (max-width:480px){
//     ${styles}
//   }`
// };

export const Grid = styled.div`
`;

export const Row = styled.div`
display:flex
`;

export const Col = styled.div`
flex: ${(props: ColProps) => props ? props.size : 1};

`;
